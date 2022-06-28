import axios from 'axios';

export function Repository() {
  // const [data, setData] = useState([]);
  axios.get('http://localhost:4000/repos').then((res) => console.log(res));
  return <div>hello</div>;
}
