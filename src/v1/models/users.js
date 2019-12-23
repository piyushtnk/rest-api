import {
  dbInit,
  _sendResponseError,
  _sendResponseSuccess,
} from './config';

const UsersList = async () => {
  try {
    const db = await dbInit();
    const query = 'SELECT * FROM users';
    const [result] = await db.execute(query);
    return _sendResponseSuccess(result);
  } catch (error) {
    return _sendResponseError(error);
  }
};

const UsersOne = async userId => {
  try {
    const db = await dbInit();
    const query = `SELECT * FROM users WHERE userId = "${userId}"`;
    const [result] = await db.execute(query);
    return _sendResponseSuccess(result);
  } catch (error) {
    return _sendResponseError(error);
  }
};

const UsersDelete = async userId => {
  try {
    const db = await dbInit();
    const query = `DELETE FROM users WHERE userId = "${userId}"`;
    const [result] = await db.execute(query);
    return _sendResponseSuccess(result);
  } catch (error) {
    return _sendResponseError(error);
  }
};

const UsersUpdate = async (req, res) => {
  console.log('Updating...');
  try {
    console.log('Trying...');
    const db = await dbInit();
    const query = `UPDATE users SET
                      name = "${req.body.name}",
                      userBalance = "${req.body.balance}",
                      email = "${req.body.email}"
                  WHERE userId = "${req.params.userId}"`;
    const [result] = await db.execute(query);
    return _sendResponseSuccess(result);
  } catch (error) {
    return _sendResponseError(error);
  }
};

module.exports = {
  UsersList,
  UsersOne,
  UsersDelete,
  UsersUpdate,
};
