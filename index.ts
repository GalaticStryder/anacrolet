import * as express from 'express';
import * as path from 'path';

const app = express();

// Create a link to the Angular build directory.
app.use(express.static(path.join(__dirname, 'dist')));

// Initialize the app by listening on the default 8080 port.
const server = app.listen(process.env.PORT || 8080, function () {
const port = server.address().port;
  console.log('App now running on http://localhost:' + port);
});
