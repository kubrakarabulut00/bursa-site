import React, { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


const MyComponent = () => {
  const [data, setData] = useState(null);
  const adres = 'https://acikyesil.bursa.bel.tr/api/3/action/datastore_search';

  useEffect(() => {
    fetchData();
    fetch(adres)
        .then(res => res.json())
        .then(data => setUsers(data))
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://acikyesil.bursa.bel.tr/api/3/action/datastore_search');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1></h1>
      {data ? (
        <div>
          <h2></h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};
  
  export default MyComponent;

  
  
  
  
  
  
  