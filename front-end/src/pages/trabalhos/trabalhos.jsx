import { useEffect } from "react"

import MetaDados from "../../seo/trabalhos"
import TodosTrabalhos from "../../components/TodosTrabalhos"
import "../../css/trabalhos.css"

export default function Trabalhos() {
  useEffect(function scrollToTop() {
    window.scrollTo(0, 0);
  }, [])

    return (
      <>
        <MetaDados/>
        <main>
          <h1 className="title">Meus Trabalhos</h1>
          <hr/>
          <section id="trabalhos">
            <div className="container">
              <TodosTrabalhos/>
            </div>
          </section>
        </main>
      </>
    )
}
