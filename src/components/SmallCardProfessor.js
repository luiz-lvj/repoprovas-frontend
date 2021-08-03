import { useHistory } from "react-router-dom";
import { SmallCardStyle } from "./SmallCard";

export default function SmallCardProfessor({profId, profName,numTests}){
    const history = useHistory();
    if(!profId || !profName){
        history.push("/");
        return "";
    }
    return(
        <SmallCardStyle>
            <h3>{profName}</h3>
            <p>{numTests} provas</p>
        </SmallCardStyle>
    );
}
