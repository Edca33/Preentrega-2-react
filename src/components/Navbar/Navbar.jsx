import './navBarStyled.css';
import CarWidget from '../CartWidget/CarWidget';
import Logo from '../../assets/img/logo2.jpg';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isShowModal, setIsShowModal] = useState(false);

  const clickEnCarrito = () => {
    setIsShowModal(true);
  };

  return (
    <nav className="navBar">
      <div className="container-logo">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </div>
      <ul className="categoryList">
        <li>
          <NavLink to="/category/ps5">Ps5</NavLink>
        </li>
        <li>
          <NavLink to="/category/xbox">Xbox s/x</NavLink>
        </li>
        <li>
          <NavLink to="/category/pc">PC</NavLink>
        </li>
        <li>
          <NavLink to="/category/">Accesories</NavLink>
        </li>
      </ul>
      <CarWidget
        number={369}
        clickEnCarrito={clickEnCarrito}
        isShowModal={isShowModal}
      />
    </nav>
  );
}

export default Navbar;
