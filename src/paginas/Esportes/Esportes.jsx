import Card from "../../Card/Card"

const Esportes = () =>{
    return(
        <div className="card-area">
            <br />
            <Card 
            className="card"
            titulo="Futebol"
            descricao="esporte coletivo com bola e gols."
            />
            <br />
            <Card 
            className="card"
            titulo="Vôlei"
            descricao="esporte coletivo com bola e gols."
            />
            <br />
            <Card 
            className="card"
            titulo="Basquete"
            descricao="jogo com bola e cestas."
            />
            <br />
            <Card 
            className="card"
            titulo="UFC"
            descricao="luta esportiva com artes marciais mistas."
            />
        </div>
    )
}

export default Esportes