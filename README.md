# Mock Service

Mock service may mock any http service. It runs on the port given in `MOCK_PORT` (default is 8000).

`npm run serve` or `npm run build & npm run serve` starts the server.

## Successful Responses

* A `GET` request to `/json` will return the query params as a json body. I.e. `GET /json?foo=bar` will return a body `{"foo": "bar"}`.
* A `POST` request to `/json` will just return the request body back to you.

## Error responses

* A `GET` or `POST` request to `/error/{code}` will send back an error response with code `{code}`.
