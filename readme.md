# Express + PostgreSQL #

1. yarn install
2. yarn dev

---
## User ##

### Create User ###
POST http://localhost:8080/api/user
```
{
	"name": "Your name",
	"surname": "Your surname"
}
```
response
```
[{
    "id": 1,
    "name": "Your name",
    "surname": "Your surname"
  },
  {
    "id": 2,
    "name": "Your name",
    "surname": "Your surname"
}]
```

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

### Update User ###
PUT http://localhost:8080/api/user
```
{
  "id": 2,
  "name": "New name",
  "surname": "New surname"
}
```
response
```
{
  "id": 2,
  "name": "New name",
  "surname": "New surname"
}
```

### Delete User ###
---
## Post ##
### Create Post ###

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

