# Mock Service

Mock service may mock any http service. It runs on the port given in `MOCK_PORT` (default is 8000).
It will automatically log datetime, method, url and headers of each incoming request.

`npm run serve` or `npm run build & npm run serve` starts the server.

## Successful Responses

### JSON

* A `GET` request to `/json` will return the query params as a json body. I.e. `GET /json?foo=bar` will return a body `{"foo": "bar"}`.
* A `POST` request to `/json` will just return the request body back to you.

### Static files

Put your static files in a directory given in the `STATIC_DIR` environment variable (default: `./static`). Any request to `/static/*` will serve your files.

## Errors and other status responses

* Any request to `/status/{code}` will send back a response with http status code `{code}`.
