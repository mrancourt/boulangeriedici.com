import './styles/Header.scss'

function Header() {
  return (
    <div className="Header">
      <img className="menu-logo " src="/images/logo.png" alt="Boulangerie d'ici" />
      <ul className="menu">
        <li className="menu-link active">
          <a href='/' className="active">Maison</a>
        </li>
        <li className="menu-link">
          <a href='/notre-histoire'>Notre Histoire</a>
        </li>
        <li className="menu-link">
          <a href='/nos-produits'>Boutique</a>
        </li>
        <li className="menu-link">
          <a href='/contactez-nous'>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
