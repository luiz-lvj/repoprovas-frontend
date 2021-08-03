import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Card, HomeStyle } from "./Home";
import Title from "./Title";

export default function AddTest(){
    const history = useHistory();
    const [inputState, setInputState] = useState("name");
    const [name, setName] = useState("")
    const [link, setLink] = useState("");
    const [professorId, setProfessorId] = useState(0);
    const [professors, setProfessors] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [subjectId, setSubjectId] = useState(0);
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState(0);
    const [periods, setPeriods] = useState([]);
    const [periodId, setPeriodId] = useState(0);
    const [sending, setSending] = useState(false);

    function submitName(event){
        event.preventDefault();
        if(name === ""){
            alert('Digite um nome para a prova!');
            return;
        }
        setInputState("link");
    }
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
    function loadProfessors(){
        const url = `${process.env.REACT_APP_API_BASE_URL}/professors`;
        const request = axios.get(url);
        request.then(response => {
            setProfessors(response.data);
        });
        request.catch(() => {
            alert("Não conseguimos recuperar os professores");
            window.location.reload();
        })
    }
    function loadCategories(){
        const url = `${process.env.REACT_APP_API_BASE_URL}/categories`;
        const request = axios.get(url);
        request.then(response => {
            setCategories(response.data);
        });
        request.catch(() => {
            alert("Não conseguimos recuperar as categorias");
        })
    }
    function loadPeriods(){
        const url = `${process.env.REACT_APP_API_BASE_URL}/periods`;
        const request = axios.get(url);
        request.then(response => {
            setPeriods(response.data);
        });
        request.catch(() => {
            alert("Não conseguimos recuperar os períodos");
            window.location.reload();
        })
    }
    function loadSubjects(){
        if(professorId < 1){
            return;
        }
        const url = `${process.env.REACT_APP_API_BASE_URL}/professors/${professorId}/subjects`;
        const request = axios.get(url);
        request.then(response => {
            setSubjects(response.data.subjects);
        });
        request.catch(() => {
            alert("Não conseguimos recuperar as disciplinas");
            window.location.reload();
        })
    }
    function loadProfessorsSelection(){
        return(
            <LabelSelect> 
                <SelectionStyle onChange={e => {
                    setProfessorId(e.target.value);
                    setInputState("subject");
                }}
                name="professors" id="professors">
                    <option value={professorId}>Selecione um professor</option>
                    {professors.map((professor,idx) => {
                        return(
                            <option key={idx} value={professor.id}>{professor.name}</option>
                        );
                    })}
                </SelectionStyle>
            </LabelSelect>
            
        );
    }
    function loadSubjectsSelection(){
        return(
            <LabelSelect> 
                <SelectionStyle onChange={e =>{
                    setSubjectId(e.target.value);
                    setInputState("category");
                }}
                name="subjects" id="subjects">
                    <option value={subjectId}>Selecione uma disciplina</option>
                    {subjects.map((subject,idx) => {
                        return(
                            <option key={idx} value={subject.id}>{subject.name}</option>
                        );
                    })}
                </SelectionStyle>
            </LabelSelect>
            
        );
    }
    function loadCategoriesSelection(){
        return(
            <LabelSelect> 
                <SelectionStyle onChange={e => {
                    setCategoryId(e.target.value);
                    setInputState("period");
                }}
                name="categories" id="categories">
                    <option value={categoryId}>Selecione uma categoria</option>
                    {categories.map((category,idx) => {
                        return(
                            <option key={idx} value={category.id}>{category.name}</option>
                        );
                    })}
                </SelectionStyle>
            </LabelSelect>
            
        );
    }
    function loadPeriodsSelection(){
        return(
            <LabelSelect> 
                <SelectionStyle onChange={e => {
                    setPeriodId(e.target.value);
                    setInputState("ready");
                }}
                name="periods" id="periods">
                    <option value={periodId}>Selecione um período</option>
                    {periods.map((period,idx) => {
                        return(
                            <option key={idx} value={period.id}>{period.name}</option>
                        );
                    })}
                </SelectionStyle>
            </LabelSelect>
            
        );
    }
    function sendTest(){
        if(sending){
            return;
        }
        setSending(true);
        const body = {
            name,
            link,
            professorId: parseInt(professorId),
            subjectId: parseInt(subjectId),
            categoryId: parseInt(categoryId),
            periodId: parseInt(periodId)
        }
        console.log(body);
        const url = `${process.env.REACT_APP_API_BASE_URL}/tests`;
        const request = axios.post(url, body);
        request.then(response => {
            alert("Parabéns, enviamos sua prova!");
            setSending(false);
            history.push("/");
        });
        request.catch(err => {
            alert("Infelizmente não conseguimos enviar sua prova");
            setSending(false);
            history.push("/");
        });

    }
    return(
        <HomeStyle>
            <Title onClick ={() => setInputState("name")}/>
            {inputState === "name" ?
                <Card>
                    <form onSubmit={e => submitName(e)}>
                        <InputStyle
                        onChange={e => setName(e.target.value)}
                        value={name}
                        placeholder="Insira o nome da Prova e pressione Enter"></InputStyle>
                    </form>
                </Card>:
            ""}
            {inputState === "link" ?
                <Card>
                    <form onSubmit={e => submitLink(e)}>
                        <InputStyle
                        onChange={e => setLink(e.target.value)}
                        value={link}
                        placeholder="Insira o link da Prova e pressione Enter"></InputStyle>
                    </form>
                </Card>
            :""}
            {inputState === "professor" ?
                <Card>
                    {loadProfessors()}
                    {professors.length > 0 ? loadProfessorsSelection() : ""}
                </Card>
            :""}
            {inputState === "subject" ?
                professorId > 0 ?  
                    <Card>
                        {loadSubjects()}
                        {subjects.length > 0 ? loadSubjectsSelection() : 
                        <>
                        {alert('Parece que esse professor não ministra nenhuma disciplina')}
                        {setInputState("professor")}
                        </>}
                    </Card>
                : ""
            :""}
            {inputState === "category" ?
                <Card>
                    {loadCategories()}
                    {categories.length > 0 ? loadCategoriesSelection() : ""}
                </Card>
            : ""}
            {inputState === "period" ?
                <Card>
                    {loadPeriods()}
                    {periods.length > 0 ? loadPeriodsSelection(): ""} 
                </Card>
            : ""}
            {inputState === "ready" ?
                <Card>
                    <ButtonStyle
                    onClick={sendTest}
                    >Enviar Prova</ButtonStyle>
                </Card>
            :""}
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

const SelectionStyle = styled.select`
    height: 50px;
    width: 60%;
    border-radius: 10px;
    border: none;
    padding-left: 10px;
    border: 0.5px solid blueviolet;
`;

const LabelSelect = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

const ButtonStyle = styled.button`
    border: none;
    background: blueviolet;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 22px;
    height: 50px;
    width: 40%;
    border-radius: 10px;
    cursor: pointer;
`;