import { FormEvent } from "react";
import { RouteComponentProps } from "react-router-dom";

interface IGeneral extends RouteComponentProps<any> {
    loginHandler: Function;
    signupHandler: (e: FormEvent<HTMLFormElement>, state: any) => void;
    logout: Function;
    authLoading: boolean;
}

export default IGeneral;