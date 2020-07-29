extern crate bcrypt;
use diesel::prelude::*;
use juniper::RootNode;
use bcrypt::{hash, verify};

use crate::db::*;
use crate::gql_types::*;
// use crate::jwt::encode_jwt;
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
}

pub type Schema = RootNode<'static, QueryRoot, MutationRoot>;

pub fn create_schema() -> Schema {
  Schema::new(QueryRoot {}, MutationRoot {})
}
