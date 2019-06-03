# Angular & Express Stack
> Made by Nicholas Ramsay

## Preface
This project is a general outline for the generation of my most recent projects. It includes an Angular front-end/client with routing capabilities which is then served via express which handles server routes such as `/admin'.

## Starting from scratch
Once this project is forked you have two options:
1. Start working on the front-end and worry about building the backend later.
2. Prototype the full working project without the developed front-end.

### Building the front-end
1. Run `cd client` to enter into the client directory.
2. Run `ng serve --open` to run the angular-cli development site (If angular-cli is not installed, install with `npm install -g @angular/cli`)
3. Now you can play around with the client/src folder to generate your front-end in Angular

### Building the full project with server
If you look at the root package.json you can see a set of very useful scripts:

```json
...
    "install-wide": "...",
    "build-client": "...",
    "start-prod": "...",
    "start-prod-first-time": "...",
    "start-dev": "...",
    "start-dev-first-time": "..."
...
```

Most primarily, the `start-dev`(development) and `start-prod`(production) scripts with their respective `...-first-time` versions.

Both development and production start scripts will *successfully* run your server with certain configurations(see below) as long as:
1. All ./client npm packages are installed
2. All ./server npm packages are installed
3. The ./client has been built with `ng build --prod` and the built files are in ./client/dist/.

If none of these have been completed then the `-first-time` post-fix will automate this process. In particular, `start-prod-first-time` is a very useful script for running on a server/production environment for the first time


