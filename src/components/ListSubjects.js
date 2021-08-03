import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { HomeStyle } from "./Home";
import { SmallCardList } from "./SmallCard";
import SmallCardSubject from "./SmallCardSubject";
import Title from "./Title";

export default function ListSubjects(){
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    useEffect(() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/subjects`;
        const request = axios.get(url);
        request.then(response => {
            setLoading(false);
            setSubjects(response.data);
        });
        request.catch(() => {
            alert("Não conseguimos recuperar as disciplinas");
            setLoading(false);
            history.push("/");
        })
    },[]);
    return(
        <HomeStyle>
            <Title/>
            <SmallCardList>
                <h2>Disciplinas</h2>
                {loading ? <><br/><br/><br/><p>Carregando disciplinas...</p></> : ""}
                {subjects.map((subject, idx) => {
                    return<SmallCardSubject key={idx} subjectId={subject.id} subjectName={subject.name} numTests={subject.tests}/>
                })}
            </SmallCardList>
        </HomeStyle>
    );
}