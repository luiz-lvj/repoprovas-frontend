import { useHistory } from "react-router-dom";
import { Card } from "./Home";

export default function Title(){
    const history = useHistory();
    return(
        <Card title onClick={() => history.push("/")}>
            <h1>RepoProvas</h1>
        </Card>
    );
}