# Asana WebDev Take-Home Exercise

This application comprises of two major frameworks: [Express](https://expressjs.com/en/4x/api.html) for backend and [React](https://reactjs.org/docs/getting-started.html) for frontend. 

This requires the latest `npm` and `node` installed. Please refer to these [instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Install
`npm install`

## Development
1. `npm test`
2. `npm run dev` on a separate window
3. create or edit your test first and then code to pass those tests
4. visit <http://localhost:3000> to view your changes
5. `npm run build` to deploy to the backend
6. visit <http://localhost:8000> to view the production-ready build

### Available Commands
* `foreman start` - Production Server (requires `foreman` installed)
* `npm start` - Test Server
* `npm test` - TDD watcher and test runner
* `npm run frontend` - Frontend Dev with React Create App environment
* `npm run backend` - Backend Dev with Node Express environment
* `npm run dev` - Concurrently run both frontend and backend
* `npm run build` - Build and compile the frontend to be served through the backend

### Browser Viewing
* <http://localhost:3000/> - displays the frontend work in progress
* <http://localhost:8000/> - displays the build

## Deployment
You can typically deploy this to a Heroku or Dokku server for quick testing.

1. `git checkout -b <branch-name>`
2. Edit the `.gitignore` file to swap the ignored folders:
```
	# build/
	src/
	public/
```
3. `git push <remote-name> <branch-name>` or `git push heroku <branch-name>:master`

## References

### Frontend
* <https://reactjs.org/docs/getting-started.html>
* <https://jestjs.io/docs/en/api>

### Backend
* <https://expressjs.com/en/4x/api.html>
* <https://mozilla.github.io/nunjucks/api.html>
* <https://jestjs.io/docs/en/api>
* <https://airbnb.io/enzyme/docs/guides/jest.html>
