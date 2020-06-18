import React from "react";
import Trabalhos from "../../../components/Trabalhos"

export default function TrabalhosHome() {
  return (
    <section id="trabalhos">
      <div className="container">
        <h2 className="title">Trabalhos</h2>
        <hr />
        <p>
          Veja alguns de meus <strong>trabalhos</strong>:
        </p>
        <Trabalhos/>
      </div>
    </section>
  );
}
