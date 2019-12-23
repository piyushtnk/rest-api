var jwt = require('jsonwebtoken');
import { Router } from 'express';
const router = Router();

router.get('/*', function(req, res, next) {
  if (
    req.hasOwnProperty('headers') &&
    req.headers.hasOwnProperty('authorization')
  ) {
    try {
      req.user = jwt.verify(
        req.headers['authorization'],
        process.env.jwtSecret,
      );
    } catch (err) {
      return res.status(401).json({
        error: {
          msg: 'Failed to authenticate token!',
        },
      });
    }
  } else {
    return res.status(401).json({
      status: false,
      code: 401,
      error: {
        message: 'Authorization token required!',
      },
    });
  }
  next();
  return;
});

router.post('/', function(req, res) {
  console.log(req.body);
  if (
    req.body.username === 'admin' &&
    req.body.password === 'admin'
  ) {
    res.status(200).json({
      id: 1,
      username: 'admin',
      jwt: jwt.sign(
        {
          id: 1,
        },
        process.env.jwtSecret,
        { expiresIn: 60 * 60 },
      ),
    });
  } else {
    res.status(401).json({
      error: {
        message: 'Wrong username or password!',
      },
    });
  }
});

export default router;
