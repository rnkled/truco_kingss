import React from 'react';
import { Link } from 'react-router-dom';
import useDelayRouteExit from "delay-react-route-exit";
import { Container, Content, Image, Text, Button, Line } from './styles';

function Home() {

    const isExitingRoute = useDelayRouteExit(1300, () => { });


    return (
        <Container>
            <Content leave={isExitingRoute ? true : false}>
                <Text>
                    <h1>Bem-Vindo!</h1>
                    <h3>A Melhor plataforma online de Truco chegou!</h3>
                    <p>Faça seu Login e enfrente seus amigos em salas Privadas ou Jogue contra
                    milhares de Oponentes online pelo mundo. Aumente seu Ranking, e quem sabe você
                    possa até se tornar o melhor jogador de Truco de Todo o Mundo!? Tá preparado?
                    </p>
                    <Line>
                        <Link to="/join"><Button>Cadastre-se</Button></Link>
                        <Link to="/login"><Button>Entrar</Button></Link>
                    </Line>
                </Text>
                <Image>
                    <img src="./assets/cards.png" alt="cards" />
                </Image>
            </Content >
        </Container >
    )
}

export default Home;