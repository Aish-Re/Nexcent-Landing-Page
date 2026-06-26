import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg'
import Button from '../Button/Button';
import Container from '../Container/Container';
import './Navbar.scss'

const navMenus = [
    {
        name : "Home",
        path : "/"
    },

    {
        name : "Features",
        path : "/"
    },

    {
        name : "Community",
        path : "/"
    },

    {
        name : "Blog",
        path : "/"
    },

    {
        name : "Pricing",
        path : "/"
    }
]

function Navbar() {
    return(
        <nav>
            <Container>
                <div className="navbar-content">
                    <div className="logo">
                        <img src={Logo} alt="Nexcent Logo"/>
                    </div>

                    <div className="menus_btn">
                        <ul className="nav-menus">
                            {navMenus.map((navMenu) => (
                                <li key={navMenu.name}><Link to={navMenu.path}>{navMenu.name}</Link></li>
                            ))}
                        </ul>

                        <Button text="Register Now" />
                    </div>

                </div>

            </Container>
        </nav>
    );
}

export default Navbar;