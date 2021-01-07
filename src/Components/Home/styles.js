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
    ${({ leave }) => leave ? "animation: leave 1.3s forwards;" : ""}
    

    @keyframes leave{
        100% {
            opacity: 0%;
            transform: translateY(-50%);
        }
    }
    
`;

export const Text = styled.div`
    margin: 20px;
    animation: falling 1.5s forwards;
    position: relative;
    top: -7vh;
    opacity: 0%;

    h1{
    font-size: 4.5vw;
    margin-bottom: 20px;
    }
    h3{
        margin-bottom: 10px;
    }

    @keyframes falling{
        0% {
            transform: translateY(-50%);
        }
        100% {
            opacity: 100%;
            transform: translateY(0%);
        }
    }
`

export const Image = styled.div`
    width: fit-content;
    opacity: 0%;
    animation: show 1.5s forwards;    

    img{
        position: relative;
        float: right;
        width: 20vw;
        padding: 0;
    }

    @keyframes show{
        0% {
            transform: translateX(100%);
        }
        100% {
            opacity: 100%;
            transform: translateX(0%);
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
    margin: 5px 25px 5px 25px;
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
    justify-content: space-evenly;
    height: fit-content;
    width: 80%
`