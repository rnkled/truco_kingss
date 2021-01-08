import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 60vw;
    height: 80vh;
    border-radius: 20px;
    position: relative;
    top: 5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    ${({ leave }) => leave ? "animation: leaveLogin 0.8s forwards;" : ""}
    

    @keyframes leaveLogin{
        100% {
            opacity: 0%;
        }
    }
    
`;

export const Text = styled.div`
    margin: 20px;
    animation: summoning 1.5s forwards;
    position: relative;
    top: -3vh;
    opacity: 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2{
        margin-left: 20px;
    }

    p{
        font-size: 1.2vw;
        margin-top: 30px;
    }
    input{
        border: 2px solid white;
        border-radius: 20px;
        width: 100%;
        min-width: 100px;
        height: 7vh;
        margin: 15px 0px;
        padding: 0 15px;
        font-size: 1.4vw;

    }

    @keyframes summoning{
        100% {
            opacity: 100%;
        }
    }
`

export const Image = styled.div`
    width: fit-content;
    opacity: 0%;
    animation: showLogin 1s forwards;    

    img{
        position: relative;
        float: right;
        width: 15vw;
        padding: 0;
    }

    @keyframes showLogin{
        0%{
            transform: translate(100%, 35%);
        }
        100% {
            opacity: 100%;
            transform: translate(0%, 0%);
            transform: rotate(-25deg);
        }
    }
`

export const Button = styled.button`
    background-color: transparent;
    color: white;
    border: 1px solid white;
    padding: 10px 20px 10px 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    margin: 5px 0px 5px 0px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    
    &:hover{
        background-color: white;
        color: black;
    }
`

export const Line = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1vh;
    justify-content: center;
    height: fit-content;
    width: 100%;
`