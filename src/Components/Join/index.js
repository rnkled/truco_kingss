import React from 'react';
import { Link } from 'react-router-dom';
import useDelayRouteExit from "delay-react-route-exit";
import { Container, Content, Image, Text, Button, Line } from './styles';

function Join() {

    const isExitingRoute = useDelayRouteExit(1300, () => { });


    return (
        <Container>
            <Content leave={isExitingRoute ? true : false}>
                <Text>
                    <h2>Nome de Usuario</h2>
                    <input name="username"></input>
                    <h2>Email</h2>
                    <input name="email"></input>
                    <h2>Senha</h2>
                    <input type="password" name="password"></input>
                    <h2>Confirme sua Senha</h2>
                    <input type="password" name="passwordConfirm"></input>
                    <Line>
                        <Link to="/join"><Button>Cadastrar-se</Button></Link>
                    </Line>
                    <p>Já possui uma conta? <Link to="/login">Clique aqui!</Link></p>
                </Text>
                <Image>
                    <img src="./assets/queen.jpg" alt="queen card" />
                </Image>
            </Content >
        </Container >
    )
}

export default Join;