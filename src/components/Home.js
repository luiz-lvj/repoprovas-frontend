import { useHistory } from "react-router-dom";
import styled from "styled-components"
import Title from "./Title";

export default function Home(){
    const history = useHistory();
    return(
        <HomeStyle>
            <Title/>
            <Card>
                <ButtonStyled onClick={() => history.push("/newtest")}
                >Cadastrar nova prova</ButtonStyled>
            </Card>
            <Card>
                <ButtonStyled onClick={() => history.push("/tests")}
                >Visualizar a lista de provas</ButtonStyled>
            </Card>
            <Card>
                <ButtonStyled onClick={() => history.push("/subjects")}
                >Visualizar a lista de disciplinas</ButtonStyled>
            </Card>
            <Card>
                <ButtonStyled onClick={() => history.push("/professors")}
                >Visualizar a lista de professores</ButtonStyled>
            </Card>
        </HomeStyle>
    );
}

export const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    max-width: 80%;
    padding: 40px;
    margin-left: auto;
    margin-right: auto;
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100%;
    border: 2px solid blueviolet;
    border-radius: 10px;
    margin-bottom: 40px;
    ${props => props.title? 'cursor: pointer;':''}
    h1{
        font-size: 30px;
        font: Arial;
        font-weight: bold;
    }
    form{
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

const ButtonStyled = styled.button`
    height: 40px;
    width: 60%;
    border: none;
    color: #FFFFFF;
    background: blueviolet;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
`;