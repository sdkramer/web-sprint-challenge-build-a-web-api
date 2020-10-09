const express = require('express');
const projectRouter = require('./data/helpers/projectRouter');
const logger = require('./middleware/logger');


const server = express();
const port = 8080;

server.use(express.json());

server.use(logger);


server.get('/', (req, res) => {
  res.send('api server running!');
});

server.use(projectRouter);


server.listen(port, () => {
  console.log(`server listening at http://localhost: ${port}`);
})