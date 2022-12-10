import { Link } from "react-router-dom"

import Styles from '../Styles/Components/menu.module.css'

export function Menu (){
    return (
        <ul className={Styles.menuContainer}>
            <li className={Styles.menuItem}>
                <Link className={Styles.menuLink} to="/">Inicio</Link>
            </li>
            <li className={Styles.menuItem} >
                <Link className={Styles.menuLink} to="/sobre">A autora</Link>
            </li>
            <li className={Styles.menuItem}>
                <Link className={Styles.menuLink} to="/encontre">Encontre Ajuda</Link>
            </li>
            <li className={Styles.menuItem} >
                <Link className={Styles.menuLink}  to="/ajuda">Ajude-nos</Link>
            </li>
        </ul>
    )
}