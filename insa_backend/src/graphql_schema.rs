use diesel::prelude::*;
use juniper::RootNode;

use crate::db::PgPool;
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

#[derive(Queryable)]
pub struct User {
  pub id: i32,
  pub name: String,
}

#[derive(juniper::GraphQLInputObject, Insertable)]
#[table_name = "users"]
pub struct NewUser {
  pub name: String,
}

#[juniper::object(description = "An user in the system")]
impl User {
  pub fn id(&self) -> i32 {
    self.id
  }

  pub fn name(&self) -> &str {
    self.name.as_str()
  }
}

pub type Schema = RootNode<'static, QueryRoot, MutationRoot>;

pub fn create_schema() -> Schema {
  Schema::new(QueryRoot {}, MutationRoot {})
}
