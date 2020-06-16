import { FormEvent } from "react";
import { RouteComponentProps } from "react-router-dom";

interface IGeneral extends RouteComponentProps<any> {
    loginHandler: (e: FormEvent<HTMLFormElement>, state: any) => void;
    signupHandler: (e: FormEvent<HTMLFormElement>, state: any) => void;
    logout: any;
    isAuth: boolean;
    authLoading: boolean;
}

export default IGeneral;