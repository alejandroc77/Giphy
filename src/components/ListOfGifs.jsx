import React from "react";
import { useState, useEffect } from "react";
import { Gif } from "./Gif";
import { getGif } from "../services/getGif";
export const ListOfGifs = ({ params }) => {
  //Es recomendable hacer un console.log(props) para saber que es lo que me esta llegando
  // console.log(params);
  const { keyword } = params;
  //use State
  const [gifs, setGifs] = useState([]);
  //useEfect
  useEffect(() => {
    getGif({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]); //El searchDefault es un efecto secundario que si no tiene ningun valor eso quiere decir que se va a reenderizar una sola vez
  //retorno
  return (
    <>
      {gifs.map((allGifs) => (
        <Gif key={allGifs.url} {...allGifs} />
      ))}
    </>
  );
};
