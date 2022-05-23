/**
 *
 * @swagger
 * paths:
 *   /books/addBook:
 *     post:
 *       tags:
 *         - "books"
 *       summary: "Add a new book"
 *       description: "Add a new book record to the database, with the fields: name, author, pages number, language and published year"
 *       consumes:
 *         - "application/json"
 *       produces:
 *         - "application/json"
 *       parameters:
 *         - in: "body"
 *           name: "body"
 *           description: "Fields: name, author, pages number, language and published year"
 *           required: true
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 maxLength: 200
 *                 example: "El amor en los tiempo del colera"
 *                 minLength: 1
 *                 format: byte
 *               author:
 *                 type: string
 *                 maxLength: 200
 *                 example: "Gabriel Garcia Marquez"
 *                 minLength: 1
 *                 format: byte
 *               pages_numer:
 *                 type: integer
 *                 maxLength: 5
 *                 example: 211
 *                 minLength: 1
 *               language:
 *                 type: string
 *                 maxLength: 20
 *                 example: "Español"
 *                 minLength: 1
 *               published:
 *                 type: integer
 *                 maxLength: 20
 *                 example: 1998
 *                 minLength: 1
 *       responses:
 *         "200":
 *           description: "Successful operation"
 *         "405":
 *           description: "Invalid input"
 *         "404":
 *           description: "The server cannot find the requested resource"
 *         "500":
 *           description: "Internal server error"
 *   /books:
 *     get:
 *       tags:
 *         - "books"
 *       summary: "Get all records from books database"
 *       description: "Service to obtain a list with all the data registered in the database"
 *       produces:
 *         - "application/json"
 *       parameters: []
 *       responses:
 *         "200":
 *           description: "Successful operation"
 *         "405":
 *           description: "Invalid input"
 *         "404":
 *           description: "The server cannot find the requested resource"
 *         "500":
 *           description: "Internal server error"
 *
 *   /books/editBook/{id}:
 *     put:
 *       tags:
 *         - "books"
 *       summary: "Updated user"
 *       description: "This can only be done by the logged in user."
 *       operationId: "updateUser"
 *       produces:
 *         - "application/xml"
 *         - "application/json"
 *       parameters:
 *         - name: "id"
 *           in: "path"
 *           description: "name that need to be updated"
 *           required: true
 *           type: "string"
 *         - in: "body"
 *           name: "body"
 *           description: "Updated user object"
 *           required: true
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 maxLength: 200
 *                 example: "El amor en los tiempo del colera"
 *                 minLength: 1
 *                 format: byte
 *               author:
 *                 type: string
 *                 maxLength: 200
 *                 example: "Gabriel Garcia Marquez"
 *                 minLength: 1
 *                 format: byte
 *               pages_numer:
 *                 type: integer
 *                 maxLength: 5
 *                 example: 211
 *                 minLength: 1
 *               language:
 *                 type: string
 *                 maxLength: 20
 *                 example: "Español"
 *                 minLength: 1
 *               published:
 *                 type: integer
 *                 maxLength: 20
 *                 example: 1998
 *                 minLength: 1
 *
 *       responses:
 *         "200":
 *           description: "Successful operation"
 *         "405":
 *           description: "Invalid input"
 *         "404":
 *           description: "The server cannot find the requested resource"
 *         "500":
 *           description: "Internal server error"
 *   /books/deleteBook/{id}:
 *     delete:
 *       tags:
 *         - "books"
 *       summary: "Delete user"
 *       description: "This can only be done by the logged in user."
 *       operationId: "deleteUser"
 *       produces:
 *         - "application/xml"
 *         - "application/json"
 *       parameters:
 *         - name: "id"
 *           in: "path"
 *           description: "The name that needs to be deleted"
 *           required: true
 *           type: "string"
 *       responses:
 *         "200":
 *           description: "Successful operation"
 *         "405":
 *           description: "Invalid input"
 *         "404":
 *           description: "The server cannot find the requested resource"
 *         "500":
 *           description: "Internal server error"
 *   /user/newUser:
 *     post:
 *       tags:
 *         - "users"
 *       summary: "Add a new user in FireBase project"
 *       description: "Service to register a new user in the firebase project"
 *       produces:
 *         - "application/json"
 *       parameters:
 *         - in: "body"
 *           name: "user data"
 *           description: ""
 *           required: true
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 maxLength: 200
 *                 pattern: First@second.third
 *                 example: "email@email.com"
 *                 minLength: 5
 *                 format: byte
 *               password:
 *                 type: string
 *                 maxLength: 200
 *                 example: "123456"
 *                 minLength: 6
 *                 format: byte
 *       responses:
 *         "200":
 *           description: "Successful operation"
 *         "405":
 *           description: "Invalid input"
 *         "404":
 *           description: "The server cannot find the requested resource"
 *         "500":
 *           description: "Internal server error"
 *   /user/login:
 *     post:
 *       tags:
 *         - "users"
 *       summary: "Add a new user in FireBase project"
 *       description: "Service to register a new user in the firebase project"
 *       produces:
 *         - "application/json"
 *       parameters:
 *         - in: "body"
 *           name: "user data"
 *           description: ""
 *           required: true
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 maxLength: 200
 *                 pattern: First@second.third
 *                 example: "email@email.com"
 *                 minLength: 5
 *                 format: byte
 *               password:
 *                 type: string
 *                 maxLength: 200
 *                 example: "123456"
 *                 minLength: 6
 *                 format: byte
 *       responses:
 *         "200":
 *           description: "Successful operation"
 *         "405":
 *           description: "Invalid input"
 *         "404":
 *           description: "The server cannot find the requested resource"
 *         "500":
 *           description: "Internal server error"
 */
//# sourceMappingURL=books.docs.js.map