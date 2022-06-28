// import axios from 'axios';
import axios from 'axios';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface Data {
  // fix this !!!!!
  data: any;
}

export function Repository(props: Data) {
  const [repoInfo, setRepoInfo] = useState(false);
  const data = props.data;

  const getReadMe = (name: string) => {
    axios
      .get(`https://raw.githubusercontent.com/${name}/master/README.md`)
      .then((readme: any) => {
        return <ReactMarkdown>{readme}</ReactMarkdown>;
      });
  };

  return (
    <div>
      <ul key={data.id}>
        <li>Repository: {data.name}</li>
        <li>Description: {data.description}</li>
        <li>Language: {data.language}</li>
        <li>Number of Forks: {data.forks}</li>
        {repoInfo && (
          <ul>
            <li>Last commit:{data.updated_at}</li>
            <li>Full Name: {data?.author}</li>
            <li>Message: {data?.message}</li>
            {data?.hasOwnProperty('README.md') ? (
              <ReactMarkdown>{data['README.md']}</ReactMarkdown>
            ) : (
              getReadMe(data.full_name)
            )}
          </ul>
        )}
        <button onClick={() => setRepoInfo(!repoInfo)}>More info</button>
      </ul>
    </div>
  );
}
