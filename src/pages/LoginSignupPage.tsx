import { useState, type ChangeEvent, type FormEvent } from "react";
import type { LoginDetails } from "../types/types";
import { useUser } from "../auth/userContext";
import ErrorPage from "./ErrorPage";
import registerUser from "../api/registerUser";

type Toggle = 'login'|'signup'
type Field = 'email'|'password'|'name'


export default function LoginSignupPage() {

    const [userFormState, setUserFormState] = useState<LoginDetails>({email:'',password:''})
    const [toggleState, setToggleState] = useState<Toggle>('login')

    const {userStatus,login} = useUser()

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

    const submissionHandler = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (toggleState === 'login') {
            login(userFormState)
        } else {
            let userDetails
            if (formValues.name !== undefined) {
                userDetails = await registerUser(
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

    return (
        <form aria-label='login form' onSubmit={submissionHandler}>
            {toggleState === 'signup'?<>
                <label htmlFor='name' className="h3">name:</label>
                <input id='name' value={formValues.name} onChange={changeHandler('name')}></input>
            </>:<></>}
            <label htmlFor='email' className="h3">email:</label>
            <input id='email' value={formValues.email} onChange={changeHandler('email')}></input>
            <label htmlFor='password' className="h3">password:</label>
            <input id='password' value={formValues.password} onChange={changeHandler('password')}></input>
            <button type='submit'>Submit</button>
            <button type='button' onClick={onToggle}>
                {toggleState==='login'?`Sign up`:`Log in`}
            </button>
        </form>
    )



}