/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import DB from './db';

const app = express();

app.get('/users/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const user = await DB.getUserByUsername(username);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send();
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

export { app };
