import logosenai from './assets/logo-senai.png';
import menuamburger from './assets/menu.svg';
import imglogin from './assets/login.svg';
import imgsearch from './assets/search.svg';
import './styles.css';

export default function Header() {
    return (
        <div class="menu_sup">
            <img src={menuamburger} alt="menu hamburger" />
            <img src={logosenai} alt="logo do senai" />
            <img src={imglogin} alt="login" />
            <img src={imgsearch} alt="busca" />
        </div>
    );
}