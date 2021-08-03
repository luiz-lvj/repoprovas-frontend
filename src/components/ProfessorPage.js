import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { HomeStyle } from "./Home";
import { SmallCardList } from "./SmallCard";
import SmallCardTest from "./SmallCardTest";
import Title from "./Title";

export default function ProfessorPage(){
    const history = useHistory();
    const {profId} = useParams();
    const [loading, setLoading] = useState(true);
    const [tests, setTests] = useState([]);
    useEffect(() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/tests/professors/${profId}`;
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
                {loading ? <><br/><br/><br/><p>Carregando Provas...</p></>:""}
                {tests.map((test, idx) => {
                    return(
                        <SmallCardTest
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