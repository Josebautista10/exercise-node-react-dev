import { Router, Request, Response } from 'express';

// const data = require('../../data/repos.json');
import data from '../../data/repos.json';
export const repos = Router();
data?.forEach((repo) => (repo.created_at = `${new Date(repo.created_at)}`));
const filteredRepos = data?.filter((repo) => repo.fork === false);
repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');
  res.type('application/json');
  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  res.send(filteredRepos);
});
