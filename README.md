This is a base Node Js Backend Project made using (Express), which anyone can use as it has been prepared, by keeping some of the most important code principles and project managment recommendations. Feel free to change anything.


`src` -> Inside this src folder all the actual source code regarding the project will reside, this will not have any kind of tests. (You might want to make seprate test forlder)

Lets take a look inside the `src` folder

 - `config` -> In this folder there will be  anything or everything regarding any configuration or setup of a library or module will be done. For example : setting up `dotenv` so that we can use the enviroment variables in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup Logger library that can help to prepare meaningful logs, so configuration for this librabry should also be done here.

 - `routes` -> In this routes folder, we register a route and the corresponding middleware and controllers to it.

 - `middleware` -> They are just going to intercept the incomming requests where we can write our validators, authentication, etc.

 - `controllers` -> They are kind of the last middlewars as post them you can call your business layer to execute the business logic. In controllers we just recive the incomming request or data and then pass it to business layer, and once the business layer returns an output, we structure the API response and send the output.

 - `repositories` -> This folder contains all the logic using which we interact with the DB by writing queries, all the new queries or ORM queries will go here.

 - `services` -> Contains the business logic and interacts with respositories for data from the database.

 - `utils` -> Contains helper method, error classes etc.

### Setup the project

 - Download the code from the github and open it in your tet editor.

 - Go inside the folder path and execute the folowing command :
  ```
  npm install
  ```
 - In the root directory create a `.env` file and the following env variables.
    ex:
  ```
  PORT=3000
  ```

 - Inside the `src/config` folder create a file named as `config.json` and write the following code:
 ```
 {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
 - Go inside the `src` folder and execute the command : 
  ```
  npx sequelize init
  ```
 - By executing the following command you will get migrations and seeders folder along with config.json inside the config folder.

 - If your are setting up your development enviroment, then write the username of your db, password of your db and in dialect mention whatever db you are using ex:`mysql`.

 - If you are setting up test or prod enviroment, make sure make sure you also replace the host with the hosted db url.

 - To run the server execute 
  ```
  npm run dev
  ```