extern crate bcrypt;
extern crate chrono;
use diesel::prelude::*;
use juniper::RootNode;
use bcrypt::{hash, verify};
use chrono::prelude::*;

use crate::db::*;
use crate::gql_types::*;
use crate::jwt::encode_jwt;
use crate::models::*;
use crate::schema::users;

#[derive(Clone)]
pub struct Context {
    pub db: PgPool,
}

impl juniper::Context for Context {}

pub struct QueryRoot;

#[juniper::object(Context = Context)]
impl QueryRoot {
    fn users(context: &Context) -> Vec<User> {
        use crate::schema::users::dsl::*;
        let connection = context.db.get().unwrap();;
        users
          .limit(100)
          .load::<User>(&connection)
          .expect("Error loading users")
    }

    fn me(context: &Context, user_id: Option<i32>) -> UserResponse {
        use crate::schema::users::dsl::*;

        let user_id = match user_id {
            Some(user_id) => user_id,
            None => return UserResponse{ok:false, error:Some("Login required".to_string()), user:None},
        };

        let connection = context.db.get().unwrap();;


        match users.find(user_id).first(&connection) {
            Ok(user) => UserResponse{ok:true, error:None, user:Some(user)},
            _ => UserResponse{ok:false, error:Some( "Not existing user".to_string() ), user:None},
        }
    }
}

pub struct MutationRoot;

#[juniper::object(Context = Context)]
impl MutationRoot {
    fn create_user(context: &Context, data: NewUser) -> User {
        let connection = context.db.get().unwrap();;
        diesel::insert_into(users::table)
            .values(&data)
            .get_result(&connection)
            .expect("Error saving new post")
    }

    fn signUp(context: &Context, email:String, first_name:String, last_name:String, password:String, bio:Option<String>, avatar:Option<String>) -> UserResponse {
        use crate::schema::users;
        let connection = context.db.get().unwrap();;

        let hashed = hash(&password, 10);
        let mut hashed = match hashed {
            Ok(hashed) => hashed,
            Err(e) => String::from("Error"),
        };

        let hashed_new_user = NewUser {
            email:email,
            first_name:first_name,
            last_name:last_name,
            password:hashed,
            bio:bio,
            avatar:avatar,
        };

        match diesel::insert_into(users::table)
            .values(&hashed_new_user)
            .get_result(&connection){
                Ok(user) => UserResponse{ok:true,error:None, user:Some(user)},
                _ => UserResponse{ok:false, error:None, user:None}
            }

    }

    fn signIn(context: &Context, email:String, password:String) -> TokenResponse {
        use crate::schema::users;
        let connection = context.db.get().unwrap();;

        let user = users::dsl::users.filter(users::dsl::email.eq(email)).load::<User>(&connection);

        let mut user = match user {
            Ok(user) => user,
            Err(e) => return TokenResponse{token:None},
        };

        let valid = verify(password, &user[0].password);
        let mut valid = match valid {
            Ok(valid) => valid,
            Err(e) => false,
        };

        if valid {
            let token = match encode_jwt(user[0].id, 30){
                Ok(t) => t,
                _ => return TokenResponse{token:None},
            };
            TokenResponse{token:Some(token)}
        } else {
            TokenResponse{token:None}
        }
    }
}

pub type Schema = RootNode<'static, QueryRoot, MutationRoot>;

pub fn create_schema() -> Schema {
  Schema::new(QueryRoot {}, MutationRoot {})
}
