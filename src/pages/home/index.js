import React from "react";
import "./styles.css";
import Card from "../../components/card";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "https://dummy.restapiexample.com/api/v1/employees";
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  if (loading) {
    return <div className="home">Loading...</div>;
  }
  if (error) {
    return <div className="home">Error: {error.message}</div>;
  }
  return (
    <div className="home">
      <div className="cards">
        {data.data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
