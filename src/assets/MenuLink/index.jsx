import { Link, useLocation } from 'react-router-dom'
import styles from './MenuLink.module.css'

function MenuLink( {children, to} ) {

    const localizacao = useLocation()

    return (
        <>
            <Link to={to} className={`
                ${styles.link} 
                ${localizacao.pathname === to ? styles.linkDestacado : ""}
            `}>
                {children}
            </Link>
        </>
    )
}

export default MenuLink


//ou pode ser com o NavLink
//import { NavLink } from 'react-router-dom';
//import styles from './MenuLink.module.css';

//function MenuLink({ children, to }) {

//   return (
//        <NavLink
//            className={({ isActive }) => `
//                ${styles.link}
//                ${isActive ? styles.linkDestacado : ""}
//            `}
//            to={to}
//            end
//        >
//            {children}
//        </NavLink>
//    )
//}


//export default MenuLink
