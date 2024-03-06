# SQL-Wizard - SQL Query Converter

![Alt text](client/src/assets/Screenshot.jpg?raw=true "Screenshot")

This is a full stack app that converts natural language English to SQL queries using OpenAI's GPT-3.5 architecture and text completion API. The app has a client and a server, each with its own npm packages. 

## Getting Started

To get started, clone the repository to your local machine and navigate to the root directory. There are two folders in the root directory: client and server. Each folder has its own package.json file and node_modules folder.

### Installing Dependencies

To install the dependencies for the client, navigate to the client folder and run the following command:

```bash
npm install
```

To install the dependencies for the server, navigate to the server folder and run the following command:

```
npm install
```

## Running the Client

To run the client, navigate to the client folder and run the following command:

```
npm run dev
```

The client will be available at http://localhost:3000/.

## Running the Server

To run the server, navigate to the server folder and run the following command:

```
npm start
```
### Using your credentials
You can use your own credentials by get the api in to the [OPENAI API DOCS](https://platform.openai.com/api-keys) setting the OPENAI_API_KEY` environment variables before running the server. For example, you could supply your own credentials by running the server like so:

```
OPENAI_API_KEY=my_api_key
```

## Technologies

The front end is built with React, and the back end is built with Node.js and Express.
