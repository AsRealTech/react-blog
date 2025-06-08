import { useState, useEffect } from 'react';
import ListComponent from './ListComponent';

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await resp.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>User List</h1>
      <ListComponent userLists={userData} />
    </>
  );
}

export default App;
