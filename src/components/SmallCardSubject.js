import { useHistory } from "react-router-dom";
import { SmallCardStyle } from "./SmallCard";

export default function SmallCardSubject({subjectId, subjectName,numTests}){
    const history = useHistory();
    if(!subjectId || !subjectName){
        history.push("/");
        return "";
    }
    function redirectToPage(){
        if(numTests < 1){
            alert("Não há provas cadastradas!")
            return;
        }
        history.push(`subjectpage/${subjectId}`)
    }
    return(
        <SmallCardStyle>
            <h3
            onClick={redirectToPage}
            >{subjectName}</h3>
            <p>{numTests} provas</p>
        </SmallCardStyle>
    );
}
