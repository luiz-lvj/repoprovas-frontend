import { useHistory } from "react-router-dom";
import { SmallCardStyle } from "./SmallCard";

export default function SmallCardProfessor({profId, profName,numTests}){
    const history = useHistory();
    if(!profId || !profName){
        history.push("/");
        return "";
    }
    function redirectToPage(){
        if(numTests < 1){
            alert("Não há provas cadastradas!")
            return;
        }
        history.push(`professorpage/${profId}`)
    }
    return(
        <SmallCardStyle>
            <h3
            onClick={redirectToPage}
            >{profName}</h3>
            <p>{numTests} provas</p>
        </SmallCardStyle>
    );
}
