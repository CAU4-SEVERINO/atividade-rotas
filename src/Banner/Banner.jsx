import styles from "./Banner.module.css"

const Banner = () =>{
    return(
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>Olá, Mundo!</h1>
                <p>SALVEEEEEE AQUI VOCÊ VAI CONHECER MAIS UM 
                POUQUINHO SOBRE OS ESPORTES E SEUS IDOLOS</p>
            </div>
        </div>
    )
}

export default Banner