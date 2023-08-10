# Brrdi

## Description

Brrdi is an interactive web application allowing users to post short messages, termed "chrrps". Built on a secure MERN stack platform, it supports user registration and profile creation for personalized posts and interactions. It is currently deployed on Heroku, and you can visit the site [here]().

## Table of Contents
- [Description](#description)
- [Installation](#installation)
  - [Database Seeding](#database-seeding)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Credits](#credits)
- [License](#license)
- [Authors](#authors)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory by running `cd Brrdi`.

3. **Backend Setup:**
    - Navigate to the backend directory: `cd backend`.
    - If you haven't already, download and install [Node.js](https://nodejs.org/).
    - Install the necessary backend dependencies by running `npm install`.
    - Create a `.env` file in the backend directory. Refer to the example `.env` in the root directory for the required variables. These will typically include your JWT secret and expiration settings:
      ```
      JWT_SECRET=<Your_Secret_Key>
      JWT_EXPIRATION=<Expiration_Time>
      ```
    - Once the `.env` settings are in place and dependencies are installed, start the backend server by running `npm start`.

4. **Frontend Setup:**
    - Navigate back to the main project directory and then to the frontend directory: `cd ../frontend` (if you're in the backend directory).
    - Install the necessary frontend dependencies by running `npm install`.
    - Once the installation is complete, start the frontend application by running `npm start`.

## Database Seeding

1. After completing the backend setup and ensuring your database is configured correctly, you can seed the database with initial data.
2. Navigate to the `seeders` folder inside the backend directory.
3. Run the seed file by typing `node seeds.js` in your terminal. This command will set up the necessary tables and populate them with seed data.
4. If the seeding process is successful, you should see a confirmation message in your terminal.


## Usage

1. Open your preferred web browser and navigate to the hosted website.
2. Register or log in to start sending chrrps and interacting on Brrdi.
3. Share your thoughts, interact with others, and enjoy the Brrdi community!

## Dependencies

- apollo
- graphql
- jwt
- react
- tailwindcss
- mongoose
- dotenv
- bcrypt

## Credits

- [Node.js](https://nodejs.org/): A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Apollo](https://www.apollographql.com/): A platform for building a data graph.
- [GraphQL](https://graphql.org/): A query language for your API.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [TailwindCSS](https://tailwindcss.com/): A utility-first CSS framework.
- [Mongoose](https://mongoosejs.com/): Elegant MongoDB object modeling for Node.js.
- [bcrypt](https://www.npmjs.com/package/bcrypt): A library to help you hash passwords.

## License

This project is licensed under the terms of the MIT license. For more details, refer to [the MIT License page](https://opensource.org/licenses/MIT).

## Authors

#### Front End
- [Luis Villarreal](https://github.com/Luis6400)
- [Dane Kargis](https://github.com/Dkargis)

#### Back End
- [Adam Riet](https://github.com/Adam-Riet)
- [Jahsper Harrell](https://github.com/JahsperH)


