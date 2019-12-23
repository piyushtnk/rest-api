import { Router } from 'express';
import {
  UsersList,
  UsersOne,
  UsersDelete,
  UsersUpdate,
} from '../models/users';

const router = Router();

router.get('/', async (req, res) => {
  const response = await UsersList();
  res.status(response.code).send(response);
});

router.get('/:userId', async (req, res) => {
  const response = await UsersOne(req.params.userId);
  res.status(response.code).send(response);
});

router.delete('/:userId', async (req, res) => {
  const response = await UsersDelete(req.params.userId);
  res.status(response.code).send(response);
});

router.put('/:userId', async (req, res) => {
  const response = await UsersUpdate(req, res);
  res.status(response.code).send(response);
});
export default router;
