import React, { useState } from "react";
import useGithubUser from "./useGithubUser"; //qui si importa il custom hook

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function GithubUser() {
  const [username, setUsername] = useState(""); //si imposta la state variable
  const { data, error, mutate } = useGithubUser(username); //destructuring del custom hook

  const handleChange = (event) => {
    setUsername(event.target.value); // qui si aggiorna lo stato del nome utente.
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={handleChange} //event handler per aggiornare lo stato del nome utente
        placeholder="Enter GitHub username"
      />
      {error && <p>Error: {error.message}</p>} {/* Gestione dell'errore*/}
      {data && (
        <div>
          <h2>{data.name}</h2>
          <img src={data.avatar_url} alt={data.name} width={100} />
        </div>
      )}
      <button onClick={mutate}>Update Data</button>{" "}
      {/* aggiornamento manuale dei dati  */}
    </div>
  );
}
