# restapi-exercise
REST API Exercise Phase 2

/// Tech Used
1. Sequelize
2. Postgres (Database)
3. Express (Server)
4. Body Parser


SCHEMA DATABASE
------------------------
Contacts (Table)
|   name    |   phone   |   email   |   address   |
|   String  |   String  |   String  |   String    |

------------------------

ROUTING
------------------------
|   Route       |   Method    |     Function     
| /contacts     |    GET      | Show all contact Data
| /contacts/:id |    GET      | Show one contact Data by ID
| /contacts     |    POST     | Add new data to database
| /contacts/:id |    PUT      | Update data by ID
| /contacts/:id |    DELETE   | Delete data by ID

------------------------
This application has been tested on POSTMAN application.
You can use '//localhost:4000' to run this app

------------------------
ADDING CLIENT SIDE
------------------------
1. You can ADD new contact by client side
2. You can DELETE contact by client side
3. You can EDIT contact by client side