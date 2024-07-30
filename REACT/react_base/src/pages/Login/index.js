import React from "react";
import { Title, Paragrafo } from "./styled";
import { Container } from "../../styles/GlobalStyles";
import { useDispatch } from "react-redux";
import * as exempleActions from '../../store/modules/example/actions';


export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();

    dispatch(exempleActions.clicaBotaoRequest());
  }

  return (
    <>
      <Container>
        <Title>
          Login
          <small>Ola</small>
        </Title>
        <Paragrafo>Lorem ipsum, dolor sit amet consectetur adipisicing elit.?</Paragrafo>
        <button type="button" onClick={handleClick}>Enviar</button>

      </Container>
    </>
  )
}
