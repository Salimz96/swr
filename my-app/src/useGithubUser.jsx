import useSWR, { mutate } from "swr"; //importare la libreria swr

//funzione fetcher per fare il fetch dei dati da eliminare perché si usa la configurazione di SWR a livello globale.
/* const fetcher = (url) => fetch(url).then(Response.json()); */
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );
  return {
    data,
    error,
    mutate: () => mutate(`https://api.github.com/users/${username}`),
  }; //qui si inserusce la funzione mutate per aggiornare manualmente i dati.
}
