import styled from "styled-components";

export default function Card(){
    return <StyleCard/>
}

const StyleCard = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100px;
width: 500px;
max-width: 80%;
border: 2px solid blueviolet;
border-radius: 10px;
margin-bottom: 40px;
h1{
    font-size: 30px;
    font: Arial;
    font-weight: bold;
}
`;