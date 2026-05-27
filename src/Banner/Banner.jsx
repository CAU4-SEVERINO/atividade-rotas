import styles from "./Banner.module.css"
import mosqueteiro from '../../src/assets/mosqueteiro.png'

const Banner = () =>{
    return(
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>Olá, Mundo!</h1>
                <p>SALVEEEEEE AQUI VOCÊ VAI CONHECER MAIS UM 
                POUQUINHO SOBRE OS ESPORTES E SEUS IDOLOS</p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.mosqueteiro} src={mosqueteiro} alt="perfil" />
                
            </div>
        </div>
    )
}

export default Banner