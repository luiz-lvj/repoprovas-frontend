import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import styled from "styled-components";
import { HomeStyle } from "./Home";
import { SmallCardList } from "./SmallCard";
import SmallCardTest from "./SmallCardTest";
import Title from "./Title";

export default function SubjectPage(){
    const history = useHistory();
    const {subjectId} = useParams();
    const [loading, setLoading] = useState(true);
    const [tests, setTests] = useState([]);
    useEffect(() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/tests/subjects/${subjectId}`;
        const request = axios.get(url);
        request.then(response => {
            setLoading(false);
            setTests(response.data);
        });
        request.catch(() => {
            alert("Não conseguimos recuperar as provas");
            setLoading(false);
            history.push("/");
        })
    }, []);


    return(
        <HomeStyle>
            <Title/>
            <SmallCardList>
                {tests.length >= 0 ? <h2>Provas cadastradas</h2>: ""}
                <br/>
                <SortButton onClick={() => history.push(`/sortedsubject/${subjectId}`)}>Ver as provas por categorias</SortButton>
                <br/>
                {loading ? <><br/><br/><br/><p>Carregando Provas...</p></>:""}
                {tests.map((test, idx) => {
                    return(
                        <SmallCardTest
                        key={idx}
                        id={test.id}
                        name={test.name}
                        link={test.link}
                        category={test.category}
                        period={test.period}
                        professor={test.professor}
                        subject={test.subject}
                        />
                    );
                })}
            </SmallCardList>
        </HomeStyle>
    );
}

const SortButton = styled.button`
    border: none;
    background: blueviolet;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 17px;
    height: 50px;
    width: 40%;
    border-radius: 10px;
    cursor: pointer;
`;