import React from "react";
import { useState, useEffect } from "react";
import { Gif } from "./Gif";
import { getGif } from "../services/getGif";

export const ListOfGifs = ({ params }) => {
  const [loading, setLoading] = useState(false); //-> por defecto loading es false
  //Es recomendable hacer un console.log(props) para saber que es lo que me esta llegando -> console.log(params);
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    setLoading(true); //-> Antes de hacer la llamada a los gifs cambia el estado a true
    getGif({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false); // -> Y una vez hecha la carga de los gifs pasa a false
    });
  }, [keyword]);

  if (loading) return <i>Loading...</i>;
  //El keyword es un efecto secundario que si no tiene ningun valor eso quiere decir que se va a reenderizar una sola vez

  return (
    <>
      {gifs.map((allGifs) => (
        <Gif key={allGifs.url} {...allGifs} />
      ))}
    </>
  );
};
