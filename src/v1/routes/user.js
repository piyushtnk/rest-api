import { Router } from 'express';
import { UsersList, UsersOne } from '../models/users';

const router = Router();

router.get('/', async (req, res) => {
  const response = await UsersList();
  res.status(response.code).send(response);
});

router.get('/:userId', async (req, res) => {
  const response = await UsersOne(req.params.userId);
  res.status(response.code).send(response);
});

export default router;
