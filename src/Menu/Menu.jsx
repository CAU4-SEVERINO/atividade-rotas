import { Link, useLocation } from "react-router"
import styles from "./Menu.module.css"
import MenuLink from "../MenuLink/MenuLink"
import logo from '../../src/assets/garibaldo.jpg'

const Menu = () =>{



    return(
        <header> 
            <nav className={styles.navegacao}>
                <img className={styles.Logo} src={logo} alt="" />
                <div className={styles.navlink}>
                    <MenuLink to = "/">Inicio</MenuLink>
                    <MenuLink to = "/esportes">Esportes</MenuLink>
                    <MenuLink to = "/idolos">Idolos</MenuLink>
                </div>
            </nav>
        </header>
    )
}

export default Menu