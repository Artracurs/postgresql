# Express + PostgreSQL #

1. yarn install
2. yarn dev

## User ##

- [x] ~~Create user~~
- [x] ~~Delete user~~
- [x] ~~Get user by id~~
- [x] ~~Get all users~~
- [x] ~~Change user name~~

### Create User ###
POST http://localhost:8080/api/user
```
{
	"name": "Your name",
	"surname": "Your sername"
}
```
response
```
[{
    "id": 1,
    "name": "Your name",
    "surname": "Your sername"
  },
  {
    "id": 2,
    "name": "Your name",
    "surname": "Your sername"
}]
```
### Delete User ###

### Get user by id ###
GET http://localhost:8080/api/user/10
response
```
{
	"id": 10,
	"name": "Ruslan",
	"surname": "Lanneq"
}
```

## Post ##
### Create User ###

**get all posts** GET http://localhost:8080/api/post 
**get all posts by user id** GET http://localhost:8080/api/post?id=1
**create post** POST
```
{
	"title": "some title21",
	"content": "some content",
	"user_id": 1
}
```

