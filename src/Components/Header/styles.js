import styled from 'styled-components';

export const TopMenu = styled.div`
    background-image : linear-gradient(to right, #2dc961, #2daa52);
    position: relative;
    width: 100%;
    height: 9vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 25px;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.6);
    -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.6);
    -moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.6);
    z-index: 100;
    border-bottom: 0.5px solid green;
    `;

export const Title = styled.h1`
    font-size: 35px;
    letter-spacing: 5px;
    transition: letter-spacing 0.3s ease-in-out;
    
    &:hover{
        transition: letter-spacing 0.3s ease-in-out;
        letter-spacing: 15px;
    }
`

export const LeftMenuButton = styled.div`
    border: none;
    margin-left: 1vw;
    padding: 5px;
    background-color: transparent;
    color: white;
    cursor: pointer;
    transform: ${({ open }) => open ? 'scale(1.5) translateX(4.5vw)' : 'scale(1)'};
    transition: transform 0.3s ease-in-out;
`
export const RightMenuButton = styled.div`
    border: none;
    margin-right: 1vw;
    padding: 5px;
    background-color: transparent;
    color: white;
    cursor: pointer;
    transform: ${({ open }) => open ? 'scale(1.5) translateX(-4.5vw)' : 'scale(1)'};
    transition: transform 0.3s ease-in-out;
`

/*Side Menu*/
export const SideDiv = styled.nav`
    background-image: linear-gradient(to right, #62f576, #2fca64);
    color: white;
    position: absolute;
    z-index: 105;
    ${({ side }) => (side === 'right') ? 'right' : 'left'} : -20vw;
    width: 20vw;
    height: 100vh;
    transform: ${({ open, side }) => open ? 'translateX(' + ((side === 'right') ? '-100%)' : '100%)') : 'translateX(0)'};
    transition: transform 0.3s ease-in-out;
    overflow-y: scroll;
    box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.6);
    -webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.6);
    -moz-box-shadow: 0px 2px px 0px rgba(0,0,0,0.6);
`

export const Option = styled.div`
    width: 100%;
    height: 5vw;
    position: relative;
    z-index: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 2.5vw;
    border-bottom: 0.5px solid #fff8;
    cursor: pointer;

    &:hover {
    background-color: #2dc961;
    }
`

