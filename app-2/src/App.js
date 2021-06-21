import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ListItem from './Components/ListItem';
import './App.css';


function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('https://www.haloapi.com/metadata/h5/metadata/weapons').then((res) => {
      setList(res.data.results)
    })
  }, [])
  
  return (
    <div>
       {list.map((element, index) => {
        return <ListItem name={element.name} key={index} />
      })}
    </div>
  );
}

export default App;
