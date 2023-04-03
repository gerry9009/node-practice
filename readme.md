# Node JS

Created basic HTTP server
HTTP - HyperText Transform Protocol

Client -> request -> Server
Client <- response <- Server

Client - Browser -> Google Chrome
Server -> Web servers

_JS Global Objects_

- \_\_dirname -> absolute path of the directory containing the currently executing file
- \_\_filename -> represents the filename of the code being executed
- module -> A reference to the current module object -> share data between files
- require -> Used to import modules, `JSON` and local files.
- exports -> `module` method -> `module.exports = {} or () => ()`

_Node js libraries_

- `http`
- FileSystem as `fs`

_Request:_ -`URL` -> http://localhost:8080/<path> -`METHOD`
-> `GET` request data from a special resource,
-> `POST` send data to a server to create/update a resource,
-> `DELETE` deletes the specified resource,
-> `PATCH` making partial changes to an existing resource,
->`PUT` insert, replace if already exists
->[for mor information](https://www.w3schools.com/tags/ref_httpmethods.asp)

- `Query string` -> http://localhost:8080/<path>?QUERY=VALUE&QUERY2=VALUE2
- `BODY` -> user information
- `HEADER` -> meta data & authorization token -> "content-type: application/json, authorization: {token}" -> `key : value`

_Response_ -`HEADER` -`BODY` -`STATUS`

_FileSystems_

- `fs.readFile(path[, options], callback)` -> Asynchronously reads the entire contents of a file.

- `fs.createReadStream(path[, options])`

- `fs.createWriteStream(path[, options])`

```js
const fs = require("fs");

const rs = fs.createReadStream("./content.txt");

const ws = fs.createWriteStream("./copy.txt");

// Both are same
rs.on("data", (data) => {
  ws.write(data);
  console.log(data);
});

rs.pipe(ws);

rs.on('end' () => {
    console.log('Stream has been finished')
    ws.close()
})
```
