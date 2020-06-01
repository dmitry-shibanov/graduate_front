import { RouteComponentProps } from "react-router-dom";
import { History } from "history";
interface IAppProps extends RouteComponentProps<any> {
    history : History
}

export default IAppProps;