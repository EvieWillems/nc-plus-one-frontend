import type { ChangeEventHandler, SubmitEventHandler } from "react";
import type {Field, Toggle} from '../pages/LoginSignupPage'


interface LoginSignupFormProps {
    toggleState:Toggle;
    name?:string;
    email:string;
    password:string;
    changeHandler:(field:Field)=>ChangeEventHandler;
    submissionHandler:SubmitEventHandler<HTMLFormElement>;
    onToggle:()=>void
}


export default function LoginSignupForm(props:{formProps:LoginSignupFormProps}) {

    const {toggleState,name,email,password,changeHandler,submissionHandler,onToggle} = props.formProps

    return (
        <form aria-label='login form' onSubmit={submissionHandler}>
            {toggleState === 'signup'?<>
                <label htmlFor='name' className="h3">name:</label>
                <input id='name' value={name} onChange={changeHandler('name')}></input>
            </>:<></>}
            <label htmlFor='email' className="h3">email:</label>
            <input id='email' value={email} onChange={changeHandler('email')}></input>
            <label htmlFor='password' className="h3">password:</label>
            <input id='password' value={password} onChange={changeHandler('password')}></input>
            <button type='submit'>Submit</button>
            <button type='button' onClick={()=>onToggle}>
                {toggleState==='login'?`Sign up`:`Log in`}
            </button>
        </form>
    )
}