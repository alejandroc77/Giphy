import React from "react";
import { ListOfGifs } from "./components/ListOfGifs";
import { Link, Route } from "wouter";

export const App = () => {
  // const [keyword, setKeyword] = useState("panda"); //estado inicial es panda

  return (
    <>
      <h1>App</h1>
      <section>
        <Link to="/gif/marilin/">gifs de marilin</Link>
        <Link to="/gif/ecuador/">gifs de ecuador</Link>
        <Link to="/gif/peru/">gifs de peru</Link>

        {/* <button onClick={() => setKeyword("messi")}>refresh</button>
        al momento de dar al boton se ejecutara el efecto */}

        <Route path="/gif/:keyword" component={ListOfGifs} />
        {/* Route me sirve para que no recarge la pagina funciona con Link */}
      </section>
    </>
  );
};
