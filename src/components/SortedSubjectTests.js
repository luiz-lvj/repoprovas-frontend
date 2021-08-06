import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { HomeStyle } from "./Home";
import { SmallCardList } from "./SmallCard";
import SmallCardTest from "./SmallCardTest";
import Title from "./Title";

export default function SortedSubjectTests(){
    const {subjectId} = useParams();
    const [categories, setCategories] = useState([]);
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        loadCategories();
        loadSubjectTests();
    }, []);
    function loadCategories(){
        const url = `${process.env.REACT_APP_API_BASE_URL}/categories`;
        const request = axios.get(url);
        request.then(response => {
            setCategories(response.data);
        });
    }
    function loadSubjectTests(){
        const url = `${process.env.REACT_APP_API_BASE_URL}/tests/subjects/${subjectId}`;
        const request = axios.get(url);
        request.then(response => {
            setLoading(false);
            setTests(response.data);
        });
        request.catch(() => {
            alert("Não conseguimos recuperar as provas");
            setLoading(false);
        })
    }
    return(
        <HomeStyle>
            <Title/>
            {categories.map((category, idx) => {
                return(
                    <SmallCardList key={idx}>
                        <h2>{category.name}</h2>
                        {tests.map((test, idx2) => {
                            if(test.category.id === category.id){
                                return(
                                    <SmallCardTest
                                    key={idx2}
                                    id={test.id}
                                    name={test.name}
                                    link={test.link}
                                    category={test.category}
                                    period={test.period}
                                    professor={test.professor}
                                    subject={test.subject}
                                    />
                                );
                            }
                            return "";
                        })}
                    </SmallCardList>
                );
            })}
        </HomeStyle>
    );
}