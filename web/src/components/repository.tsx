// import axios from 'axios';
import { useState } from 'react';

interface Data {
  // fix this !!!!!
  data: any;
}

export function Repository(props: Data) {
  const [repoInfo, setRepoInfo] = useState(false);
  const data = props.data;

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
            <li>Full Name: {data.full_name}</li>
            <li>Message: hello github</li>
            {/* <li>{data.message}</li> */}
          </ul>
        )}
        <button onClick={() => setRepoInfo(!repoInfo)}>More info</button>
      </ul>
    </div>
  );
}
