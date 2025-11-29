import logosenai from './assets/logo-senai.png';
import './styles.css';

export default function Header(/*(ontogglemenu)*/) {
    return (
        <div class="cabecalho">
            <div className='pnl-esquerda'>
                <span className='icon-hamburger' /*onClick={ontogglemenu}*/></span>
                <img src={logosenai} alt="logo do senai" />
            </div>
            <div className='pnl-direita'>
                <span className='icon-login'></span>
                <span className='icon-search'></span>
            </div>
        </div>
    );
}