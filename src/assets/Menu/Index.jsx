import './Menu.modules.css'
import MenuLink from '../MenuLink'

function Menu () {

    return (
        <>
            <header>
                <nav className='navegacao'>
                    <MenuLink to="/">
                        Inicio
                    </MenuLink>
                    <MenuLink to="/sobre">
                        Sobre Taylor Swift
                    </MenuLink>
                </nav>
            </header>
        </>
    )
}

export default Menu
