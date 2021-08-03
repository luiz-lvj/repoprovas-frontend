import { useHistory } from "react-router-dom";
import { SmallCardStyle } from "./SmallCard";

export default function SmallCardProfessor({profId, profName}){
    const history = useHistory();
    if(!profId || !profName){
        history.push("/");
        return "";
    }
    return(
        <SmallCardStyle>
            <h3>{profName}</h3>
        </SmallCardStyle>
    );
}
