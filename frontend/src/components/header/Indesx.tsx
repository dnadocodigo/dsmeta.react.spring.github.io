import logo from '../../assets/img/logo.svg';

import './introducao.css';

function Header(){
  return(
    <header className="introducao">
    <div className="introducao-content container">
      <img src={logo} alt="Logo DSMeta" className="introducao-logo" />
      <h1>DSMeta</h1>
      <p>
        Desenvolvido por <a href="https://dnadocodigo.github.io/">@pauloGaldino veja meu portfólio</a>
      </p>
    </div>
   </header>
  )
}

export default Header