# food-explorer.web

the front-end integrated with the back-end of a restaurant application, where customers can enter to place an order and the admin can receive the orders and edit the dishes as needed.

uses Styled Components to create all pages and Axios to connect with the server; it has responsive screen-size.

## Run

to install all dependencies and start the application.
```bash
  npm install
  npm run dev
```

## Usage/Examples

#### the customer experience is really straight forward:

- create an account with {name, valid email, password}.
- login with the { e-mail, password}.
- in the home page you can search by dish name or some ingredient
- there's a heart that can click to add a dish to your favorites
- there's a page where you can see all dishes you have favorited and you can also remove any if want to
- can click in one dish to open it and see it's picture, how it's made, the ingredients and the price.
- also can select the amount desired of a dish and add it to the current order
- can open the current order to proceed or remove one dish from it
- when making the payment with credit card, please don't put real information, just presse 1 till all fields are valid, you were warned, it's not my responsibility, it's one you now.
- the status of the current order will try to update every 30 seconds, waiting for the admin to update it
- can go to orders history to see every order you have made so far


#### the Admin experience

- the admin was set before deploy { email: juh@email,
password: 123}
- the admin can make searches like the custumer, but it can't make an order nor add a dish to favorites.
- on the other hand the admin can add new dishes or edit it, as long as it fills all the fields
- the admin can see all the orders that were made, and update its status as it progresses to keep the customer updated.

## Server to be connected with
https://github.com/tarcisioMateus/food-explorer.api

## Deployment link 
https://foodexplorerweb.netlify.app/

## Tech Stack
**client:** React Js, Vite, Styled Components, Axios, CSS, HTML.

## Links
[![github](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tarcisiomateus)


