import { useState } from "react";
import "./style.css";

export function MeuContador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  return (
    <div className="container">
      <h1>Meu Contador</h1>
      <h2>{contador}</h2>
      <button className="myButton" onClick={aumentar}>
        aumentar
      </button>
    </div>
  );
}
