extern crate juniper;
extern crate chrono;

use chrono::prelude::*;

#[derive(Queryable, juniper::GraphQLObject, Debug)]
pub struct User {
    pub id: i32,
    pub email: String,
    pub first_name: String,
    pub last_name: String,
    pub password: String,
    pub bio: Option<String>,
    pub avatar: Option<String>,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}
