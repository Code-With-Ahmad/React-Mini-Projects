import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Code-With-Ahmad")
  //       .then((res) => {
  //         return res.json(); // Return the promise
  //       })
  //       .then((result) => {
  //         setData(result);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   }, []);
  return (
    <div>
      <img src={data.avatar_url} alt="Image" />
      <h1>Github Name: {data.login}</h1>
      <h1>Github Followers: {data.followers}</h1>{" "}
    </div>
  );
};

export default Github;

// More Optimization Approach , it will fetch the data from API when hover
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Code-With-Ahmad");
  return response.json();
};
