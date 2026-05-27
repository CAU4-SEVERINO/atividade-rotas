import Card from "../../Card/Card"

const Esportes = () =>{
    return(
        <div className="card-area">
            <br />
            <Card 
            className="card"
            titulo="Futebol"
            descricao="O futebol é um dos esportes mais populares e influentes do mundo, 
            praticado por milhões de pessoas em diferentes países e culturas. Disputado 
            entre duas equipes, o objetivo principal é marcar gols e superar o adversário 
            utilizando estratégia, habilidade, velocidade e trabalho em equipe. Além da 
            competição, o futebol representa paixão, união entre torcedores e impacto 
            cultural, sendo responsável por revelar grandes atletas e movimentar eventos 
            acompanhados globalmente. Ao longo dos anos, tornou-se símbolo de entretenimento,
             identidade nacional e superação."
            />
            <br />
            <Card 
            className="card"
            titulo="Vôlei"
            descricao="O vôlei é um esporte coletivo baseado em trabalho em equipe, 
            agilidade e precisão. O objetivo principal é fazer a bola tocar o chão da quadra 
            adversária, respeitando regras de movimentação e número de toques. A modalidade 
            possui versões de quadra e praia, ambas com forte presença internacional. O 
            vôlei destaca valores como cooperação, disciplina e comunicação, sendo 
            amplamente praticado em ambientes escolares, profissionais e olímpicos."
            />
            <br />
            <Card 
            className="card"
            titulo="Basquete"
            descricao="O basquete é um esporte coletivo disputado entre duas equipes, no 
            qual o objetivo é marcar pontos arremessando a bola na cesta adversária. 
            Conhecido pela intensidade, velocidade e necessidade de coordenação entre os 
            jogadores, o esporte exige habilidade técnica, resistência física e estratégia. 
            Com grande popularidade em diversos países, o basquete influencia gerações e 
            possui ligas acompanhadas por milhões de pessoas ao redor do mundo."
            />
            <br />
            <Card 
            className="card"
            titulo="UFC"
            descricao="O UFC (Ultimate Fighting Championship) é a principal organização de 
            artes marciais mistas do mundo, reunindo atletas especializados em diferentes 
            estilos de luta, como boxe, jiu-jitsu, muay thai, wrestling e karatê. Os 
            confrontos exigem preparo físico, estratégia, resistência e técnica. O 
            crescimento do UFC contribuiu para popularizar o MMA internacionalmente, 
            transformando lutadores em referências esportivas e ampliando o interesse do 
            público por esportes de combate."
            />
        </div>
    )
}

export default Esportes