# HOMEWORK: Tweedr!!

Let's make a cool new app called ***TWEEDR***!! Not Twitter, geez...

An Express backend has already been provided for you, because we love you all very much. You will just need to create a React frontend for it. (You shouldn't need to modify anything in the Express backend, except to connect the React frontend. The model, controllers, etc. are all set up already.)

### Wireframe

![tweedr](./assets/tweedr.png)

### Before you start

Let's start practicing project workflow best practices **OPTIONAL**.

- Wireframe the mockup into the components you want to have
- Write out your user stories
- Make a project board with the code tasks from your user stories

You will need to set up the Tweedr database.
- Create a database named `ada_tweedr_tues_dev`.
- Run the migration & seed files in `tweedr/db`.
- **Read the readme** in the `tweedr` directory -- it will give you all you need to know about the endpoints you'll be using.

### Working with an Express server and a react app

- [Read this tutorial on connecting an express server and React in development environment](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/)

## 🚀 Completion looks like:

Your React/Express app should:

- Take an input of a Tweed
- Render all the Tweeds from the database into the browser
- Accomplish this with at least four components, possibly more:
    - `App`: holds calls to the database
    - `Input`: will take a text input and allow it to be submitted into the database
    - `TweedrFeed`: Holds `Tweed` components, which reflect the information in the database
    - `Tweed`: Holds one individual tweed
    - Any other components you see fit!

## 🚀 Your homework submission should include:

- An issue ticket created on the repo `ada-students` [here](https://git.generalassemb.ly/nyc-wdi-ada/ada-students/issues/new)
- A link to your fork of this repository
- Completion, comfort, wins, losses, questions... you know the drill.

## This homework is due 🚨 11PM ON WEDNESDAY NIGHT 🚨
