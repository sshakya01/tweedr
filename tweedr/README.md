# Welcome to the Tweedr API!

To get the Tweedr API set up, you know the drill.

- Install dependencies
- Create database (`ada_tweedr_tues_dev`)
- Run seed & migration
- Start the server!

## Endpoints

### GET `/api/tweeds`

Returns all tweeds in database.

```json
{
"message": "ok",
  "data": {
    "tweeds": [
      {
        "id": "1",
        "tweed_text": "Hello World!",
        "tweed_time": "1494788500041"
      },
      {
        "id": "2",
        "tweed_text": "I love using Tweedr... so much better than twitter.",
        "tweed_time": "1494788543350"
      },
      {
        "id": "3",
        "tweed_text": "React is the best!",
        "tweed_time": "1494788564011"
      },
      {
        "id": "4",
        "tweed_text": "testing tweed upload",
        "tweed_time": "1494792188509"
      }
    ]
  }
}
```

### GET `/api/tweeds/:id`

Returns information about one specific tweed.

```json
{
  "message": "ok",
  "data": {
    "tweed": {
      "id": "1",
      "tweed_text": "Hello World!",
      "tweed_time": "1494788500041"
    }
  }
}
```

### POST `/api/tweeds`

Adds a tweed to the database. Request body must include a `tweed` property. Refer back to the [Express as an API lecture](https://git.generalassemb.ly/nyc-wdi-ada/LECTURE_U03_D01_Express-as-an-API/blob/master/adaquotesapi-final/public/src/main.js#L34) and the [Ada API docs](http://ada-api.herokuapp.com/#post-to-apiquotes) for how to format a POST request with fetch.

The response looks like this:

```json
{
  "message": "ok",
  "data": {
    "tweed": {
      "id": "5",
      "tweed_text": "makin that tweed",
      "tweed_time": "1494793073028"
    }
  }
}
```