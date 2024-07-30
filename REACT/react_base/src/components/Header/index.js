import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

import { Nav } from './styled';
export default function Header() {
  const botaoClicado = useSelector(state => state.exempleReducer.botaoClicado);
  return <Nav>
    <Link to="/">
      <FaHome />
    </Link>
    <Link to="/login">
      <FaUserAlt />
    </Link>
    <Link to="/logout">
      <FaSignInAlt />
    </Link>
    <p>{botaoClicado ? 'Clicado' : 'Não Clicado'}</p>
  </Nav>
};
