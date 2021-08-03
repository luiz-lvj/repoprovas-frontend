import { useHistory } from "react-router-dom";
import { SmallCardStyle } from "./SmallCard";

export default function SmallCardTest({id, name, link, category, period, professor, subject}){
    const history = useHistory();
    if(!id || !name || !link || !category || !period || !professor || !subject){
        history.push("/");
        return "";
    }
    return(
        <SmallCardStyle>
            <p>Prova:</p> <a href={link}> {name}</a>
            <p>Prof.: {professor.name}</p>
            <p>Disc.: {subject.name}</p>
            <p>Cat.: {category.name}</p>
            <p>Per.: {period.name}</p>
        </SmallCardStyle>
    );
}