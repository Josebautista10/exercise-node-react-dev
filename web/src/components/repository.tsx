import axios from 'axios';
import { useState } from 'react';

export function Repository() {
  interface Repo {
    id: number;
    name: string;
    description: string;
    language: string;
    forks: string;
  }
  const [data, setData] = useState([]);
  axios.get('http://localhost:4000/repos').then((res) => {
    console.log(res.data);
    setData(res.data);
  });

  const displayRepos = data?.map((repo: Repo) => {
    return (
      <ul key={repo.id}>
        <li>{repo.name}</li>
        <li>{repo.description}</li>
        <li>{repo.language}</li>
        <li>{repo.forks}</li>
      </ul>
    );
  });
  return <div>{displayRepos}</div>;
}
