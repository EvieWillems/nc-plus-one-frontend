import { useState, type ChangeEvent, type FormEvent } from "react";
import type { LoginDetails } from "../types/types";
import { useUser } from "../auth/userContext";
import registerUser from "../api/registerUser";
import LoginSignupForm from "../components/LoginSignupForm";

export type Toggle = 'login'|'signup'
export type Field = 'email'|'password'|'name'


export default function LoginSignupPage() {

    const [userFormState, setUserFormState] = useState<LoginDetails>({email:'',password:''})
    const [toggleState, setToggleState] = useState<Toggle>('login')

    const {login} = useUser()

    const formValues = userFormState

    const changeHandler = (field:Field) => {
        return (
            (event:ChangeEvent<HTMLInputElement>) => {
                setUserFormState({...formValues,[field]:event.target.value})
            }
        )
    }

    const onToggle = () => {
        let freshValues = {email:'',password:''}
        if (toggleState === 'login') {
            setToggleState('signup');
            setUserFormState({...freshValues,name:''});
        } else {
            setToggleState('login');
            setUserFormState({...freshValues});
        }
    }

    const submissionHandler = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (toggleState === 'login') {
            login(userFormState)
        } else {
            let userDetails
            if (formValues.name !== undefined) {
                userDetails = registerUser(
                    {
                        name:formValues.name,
                        email:formValues.email,
                        password:formValues.password
                    }
                );
            }
            if (userDetails) {
                login({
                    email:formValues.email,
                    password:formValues.password
                })
            }
        }
    }

    const formProps = {
        toggleState:toggleState,
        name:formValues.name,
        email:formValues.email,
        password:formValues.password,
        changeHandler:changeHandler,
        submissionHandler:submissionHandler,
        onToggle:onToggle
    };

    return (
        <LoginSignupForm formProps={formProps}/>
    );
}