import { useState } from "react";
import styled from "styled-components";
import { Card, HomeStyle } from "./Home";
import Title from "./Title";

export default function AddTest(){
    const [inputState, setInputState] = useState("link");
    const [link, setLink] = useState("");
    function submitLink(event){
        event.preventDefault();
        if(!isValidLink()){
            alert('Digite um link válido!');
            return;
        }
        setInputState("professor");
    }
    function isValidLink(){
        const regex1 = /^http:\/\//;
        const regex2 = /^https:\/\//;
        return regex1.test(link) || regex2.test(link);
    }
    return(
        <HomeStyle>
            <Title onClick ={() => setInputState("link")}/>
            {inputState === "link" ?
                <Card>
                    <form onSubmit={e => submitLink(e)}>
                        <InputStyle
                        onChange={e => setLink(e.target.value)}
                        value={link}
                        placeholder="Insira o link da Prova e pressione Enter"></InputStyle>
                    </form>
                </Card>:
            ""}
        </HomeStyle>
    );
}

const InputStyle = styled.input`
    height: 50px;
    width: 60%;
    border-radius: 10px;
    border: none;
    padding-left: 10px;
    border: 0.5px solid blueviolet;
`;