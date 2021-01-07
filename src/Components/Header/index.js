import React, { useState } from 'react';
import SideMenu from './sideMenu';
import { TopMenu, Title, LeftMenuButton, RightMenuButton } from "./styles";
import { Link } from 'react-router-dom';



/* Component */
const Header = (props) => {
    const [LeftIsOpen, setLeft] = useState(false);
    const [RightIsOpen, setRight] = useState(false);

    const toggleLeft = () => setLeft(!LeftIsOpen);
    const toggleRight = () => setRight(!RightIsOpen);

    return (
        <div>
            <TopMenu>
                <LeftMenuButton onClick={toggleLeft} open={LeftIsOpen}>Menu</LeftMenuButton>
                <Title><Link to='/'>Truco Kingss</Link></Title>
                <RightMenuButton onClick={toggleRight} open={RightIsOpen}>Perfil</RightMenuButton>
            </TopMenu>

            <SideMenu open={LeftIsOpen} side='left' options={
                {
                    'Single Player': '/game',
                    'Multiplayer': '/lobby',
                    'Criar Sala': '/create'
                }
            } />
            <SideMenu open={RightIsOpen} side='right' options={
                {
                    'Meu Perfil': '/perfil',
                    'Amigos': '/friendlist',
                    'Logout': '/logout'
                }
            } />
        </div>
    );
};
export default Header;