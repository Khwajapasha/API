import React, { useEffect, useState } from "react";

const FetchingDataFromApi = () => {
  const [user, setUser] = useState([]);
  console.log(user);

  const getUserData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    setUser(await response.json());
  };
  useEffect(() => {
    getUserData();
  }, []);

  const myDiv = {
    border: "1px solid red",
  };
  return (
    <div>
      <h1>USER DETAILS</h1>
      {user.map((items) => {
        return (
          <div key={items.id} style={myDiv} className="row">
            <h4>Name: {items.name}</h4>
            <h4>Phone: {items.phone}</h4>
            <h4> UserName: {items.username}</h4>
            <h4>Email Id: {items.email}</h4>
            <h4>Address:</h4>
            <address>
              {items.address.suite} {items.address.city} {items.address.street}{" "}
              {items.address.zipcode}{" "}
            </address>
            <h2>Compnay: {items.company.name}</h2>
            <h4>Base: {items.company.bs}</h4>
            <h4>Industry Type: {items.company.catchPhrase}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default FetchingDataFromApi;
