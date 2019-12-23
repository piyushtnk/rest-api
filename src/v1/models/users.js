import { dbInit,_sendResponseError,_sendResponseSuccess } from './config';

const UsersList = async () => {
  try {
    const db = await dbInit();
    const query = 'SELECT * FROM users';
    const result = await db.execute(query);
    return _sendResponseSuccess(result[0]);
  } catch (error) {
    return _sendResponseError(error);
  }
};

const UsersOne = async (userId) => {
  try {
    const db = await dbInit();
    const query = `SELECT * FROM users WHERE userId = "${userId}"`;
    const result = await db.execute(query);
    return _sendResponseSuccess(result[0]);
  } catch (error) {
    return _sendResponseError(error);
  }
};

module.exports = {
  UsersList,
  UsersOne
};
