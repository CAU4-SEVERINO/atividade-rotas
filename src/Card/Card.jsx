import "./Card.css"
import Button from "../Button/Button"

function Card({ titulo, descricao, destaque }) {

  function adicionar() {
    alert("RECOMENDADO PARA MAIS PESSOAS")
  }

  return (
    <div className={destaque ? "card destaque" : "card"}>

      <h3>{titulo}</h3>

      <p>{descricao}</p>

      <Button
        texto="Recomendar"
        acao={adicionar}
        classe="btn-adicionar"
      />

    </div>
  )
}

export default Card