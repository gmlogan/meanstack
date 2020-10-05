import React, { useEffect, useState } from "react";

export const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setCountries(res.data);
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(true);
      });
  }, []);

  if (load) {
    return (
      <ul>
        {error ? (
          <li>{error.message}</li>
        ) : (
          countries.map((country, index) => <li key={index}>{country.name}</li>)
        )}
      </ul>
    );
  } else {
    return <div>Loading...</div>;
  }
};




 {
   error ? (
     <li>{error.message}</li>
   ) : (
     todos.map((todo, index) => (
       <li key={todo.__id}>
         {todo.todo_description},{todo.todo_responsible},{todo.todo_priority},
         {todo.todo_completed}
       </li>
     ))
   );
 }