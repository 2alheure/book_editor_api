# Standard Auth API (written in Golang) <!-- omit in toc -->

- [The project](#the-project)
- [Init the project](#init-the-project)
- [Documentation](#documentation)
- [Dependances](#dependances)

## The project
This project is a simple auth API written in Go. It's been thought to follow the best code practices and easily maintainable and expandable.

It includes a handling for login, registering, recovering and getting information on an account. It creates and uses a token.


It has been inspired by [the article of Adigun Hammed Olalekan](https://medium.com/@adigunhammedolalekan/build-and-deploy-a-secure-rest-api-with-go-postgresql-jwt-and-gorm-6fadf3da505b). Go check his work.

## Init the project
In order for the project to run, you need to set up your environment. To do so, please create a file named `my.env` at the root of the project, following the same pattern as the provided `.env` file.  
Then you can `go build` the app.

Or you can just execute the `install.sh` file, which does exactly the same.

## Documentation
Complete documentation can be found in the `docs` directory. It has been generated using [apiDoc](https://apidocjs.com). An online version is available on [my website](https://2alheure.fr/go_standard_auth_api/docs) or [on GitHub](https://2alheure.github.io/go_standard_auth_api/).

## Dependances
This project uses some dependances :
- [github.com/gorilla/mux](https://github.com/gorilla/mux)
- [github.com/joho/godotenv](https://github.com/joho/godotenv)
- [github.com/jinzhu/gorm](https://github.com/jinzhu/gorm)
- [github.com/dgrijalva/jwt-go](https://github.com/dgrijalva/jwt-go)

Go check their work !
