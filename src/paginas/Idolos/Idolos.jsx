import Card from "../../Card/Card"


const Idolos = () =>{

    
    return(
        <div className="card-area">
            <br />
            <Card 
            className="card"
            titulo="Pelé"
            descricao="Grande Homem do futebol"
            />
            <br />
            <Card
            className="card"
            titulo="Lebron James"
            descricao="Um dos idolos do basquete"
            />
            <br />
            <Card
            className="card"
            titulo="Aspas"
            descricao="Um dos maiores jogados de E-Esports"
            />
        </div>
    )
}

export default Idolos