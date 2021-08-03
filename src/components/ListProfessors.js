import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { HomeStyle } from "./Home";
import { SmallCardList } from "./SmallCard";
import SmallCardProfessor from "./SmallCardProfessor";
import Title from "./Title";

export default function ListProfessors(){
    const [professors, setProfessors] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    useEffect(() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/professors`;
        const request = axios.get(url);
        request.then(response => {
            setLoading(false);
            setProfessors(response.data);
        });
        request.catch(() => {
            alert("Não conseguimos recuperar os professores");
            setLoading(false);
            history.push("/");
        })
    },[]);
    return(
        <HomeStyle>
            <Title/>
            <SmallCardList>
                <h2>Professores</h2>
                {loading ? <><br/><br/><br/><p>Carregando professores...</p></> : ""}
                {professors.map((professor, idx) => {
                    return<SmallCardProfessor key={idx} profId={professor.id} profName={professor.name}/>
                })}
            </SmallCardList>
        </HomeStyle>
    );
}