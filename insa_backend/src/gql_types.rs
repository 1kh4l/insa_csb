use crate::models::User;
use crate::schema::users;

#[derive(juniper::GraphQLInputObject, Insertable)]
#[table_name = "users"]
pub struct NewUser {
    pub email: String,
    pub first_name: String,
    pub last_name: String,
    pub password: String,
    pub bio: Option<String>,
    pub avatar: Option<String>,
}

#[derive(AsChangeset)]
// #[changeset_options(treat_none_as_null="true")]
#[table_name = "users"]
pub struct UpdateUser {
    pub password: Option<String>,
    pub bio: Option<String>,
    pub avatar: Option<String>,
}

#[derive(juniper::GraphQLObject, Debug)]
pub struct TokenResponse {
    pub token: Option<String>,
}

#[derive(juniper::GraphQLObject, Debug)]
pub struct UsersResponse {
    pub ok: bool,
    pub error: Option<String>,
    pub users: Option<Vec<User>>,
}

#[derive(juniper::GraphQLObject, Debug)]
pub struct UserResponse {
    pub ok: bool,
    pub error: Option<String>,
    pub user: Option<User>,
}
