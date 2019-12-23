import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
//!!! import models from './v1/models';
import routes from './v1/routes';

const app = express();
// Application-Level Middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS,GET,POST,PUT,PATCH,DELETE',
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type,Authorization',
  );
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: '*',
    withCredentials: true,
  }),
);

// !!! Backend Purpose Only.
/* app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
}); */

// Routes
app.use('/api/v1', routes.authorization);
app.use('/api/v1/users', routes.user);
app.use('/api/v1/messages', routes.message);

// Start
app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}!`),
);
