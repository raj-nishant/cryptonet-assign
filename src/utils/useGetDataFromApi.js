import React, { FETCH_URL } from "../config";
import { useState, useEffect } from "react";

const useGetDataFromApi = () => {
  const [user, setUser] = useState([]);

  // create useEffect hook with empty dependancy array for single time api call
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(FETCH_URL);
    const json = await data.json();
    setUser(json.results[0]);
  }
  return user;
};

export default useGetDataFromApi;
