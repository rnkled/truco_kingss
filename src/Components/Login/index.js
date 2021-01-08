import React from 'react';
import { Link } from 'react-router-dom';
import useDelayRouteExit from "delay-react-route-exit";
import { Container, Content, Image, Text, Button, Line } from './styles';

function Login() {

    const isExitingRoute = useDelayRouteExit(1300, () => { });


    return (
        <Container>
            <Content leave={isExitingRoute ? true : false}>
                <Text>
                    <h2>Login</h2>
                    <input name="login"></input>
                    <h2>Senha</h2>
                    <input type="password" name="password"></input>
                    <Line>
                        <Link to="/login"><Button>Login</Button></Link>
                    </Line>
                    <p>Ainda não possui conta? <Link to="/join">Clique aqui!</Link></p>
                </Text>
                <Image>
                    <img src="./assets/jack.png" alt="jack card" />
                </Image>
            </Content >
        </Container >
    )
}

export default Login;