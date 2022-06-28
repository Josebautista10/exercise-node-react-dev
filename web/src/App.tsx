import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Repository } from './components/repository';
export function App() {
  const [data, setData] = useState([]);
  const [showLanguage, setShowLanguage] = useState(false);
  const [language, setLanguage] = useState('');

  interface Repo {
    id: number;
    name: string;
    description: string;
    language: string;
    forks: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    created_at: Date;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    updated_at: Date;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    full_name: string;
    message: string;
  }
  useEffect(() => {
    axios
      .get('http://localhost:4000/repos')
      .then((res) => {
        setData(res.data);
      })
      .catch(function (error) {
        console.log({ 'error.response.data': error.response.data });
      });
  }, [data]);

  // attempt at trying to sort data by chronological order
  //data?.sort(
  //   (a: Repo, b: Repo) => a.created_at - b.created_at

  const filterLanguage = () => {
    const filteredLanguages = data?.filter(
      (repo: Repo) => repo.language === language
    );

    return filteredLanguages.map((repo: Repo) => {
      return <Repository data={repo} key={repo.id} />;
    });
  };

  const repos = data?.map((repo: Repo) => {
    return <Repository data={repo} key={repo.id} />;
  });

  const languageButtons = data?.map((repo: Repo) => {
    return (
      <ul key={repo.id}>
        <li>
          <button
            onClick={() => {
              setLanguage(repo.language);
              filterLanguage();
              setShowLanguage(true);
            }}
          >
            {repo.language}
          </button>
        </li>
      </ul>
    );
  });

  return (
    <div className="App">
      <div>
        <button onClick={() => setShowLanguage(false)}>Show All</button>
      </div>
      <div>{languageButtons}</div>

      <div>{showLanguage ? filterLanguage() : repos}</div>
    </div>
  );
}
