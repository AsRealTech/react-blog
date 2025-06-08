// App.jsx or DataFetcher.jsx
import React, { useEffect, useState } from 'react';
import ListComponent from './ListComponent';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Example: JSONPlaceholder API
  const API_URL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Post List</h2>
      <ListComponent
        items={data}
        renderItem={(item) => (
          <div>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </div>
        )}
      />
    </div>
  );
};

export default DataFetcher;
