import axios from 'axios';
import { useEffect, useState } from 'react';

export function Repository() {
  interface Repo {
    id: number;
    name: string;
    description: string;
    language: string;
    forks: string;
    createdAt: string;
  }
  const [data, setData] = useState([]);
  const [languageRepo, setLanguageRepo] = useState([]);
  const [showLanguages, setShowLanguages] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4000/repos').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [data]);

  const filterLanguage = (language: string) => {
    const filteredLanguages = data?.filter(
      (repo: Repo) => repo.language === language
    );

    setLanguageRepo(filteredLanguages);
  };
  // const sortedData = data?.sort(
  //   (a: Repo, b: Repo) => a.created_at - b.created_at
  // );

  const displayRepos = data?.map((repo: Repo) => {
    return (
      <ul key={repo.id}>
        <li>Repository: {repo.name}</li>
        <li>Description: {repo.description}</li>
        <li>Language: {repo.language}</li>
        <li>Number of Forks: {repo.forks}</li>
      </ul>
    );
  });
  const displayLanguages = languageRepo.map((repo: Repo) => {
    return (
      <ul key={repo.id}>
        <li>Repository: {repo.name}</li>
        <li>Description: {repo.description}</li>
        <li>Language: {repo.language}</li>
        <li>Number of Forks: {repo.forks}</li>
      </ul>
    );
  });

  const languageButtons = data?.map((repo: Repo) => {
    return (
      <ul key={repo.id}>
        <li>
          <button
            onClick={() => {
              filterLanguage(repo.language);
              setShowLanguages(true);
            }}
          >
            {repo.language}
          </button>
        </li>
      </ul>
    );
  });

  return (
    <div>
      <div>{languageButtons}</div>
      <div>{showLanguages ? displayLanguages : displayRepos}</div>
    </div>
  );
}
