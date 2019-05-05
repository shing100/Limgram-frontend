import React, {useState} from "react";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import useInput from "../../Hooks/useInput";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries";
import AuthPresenter from "./AuthPresenter";

export default () => {
    const [action, setAction] = useState("logIn");
    const username = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("");
    const requestSecret = useMutation(LOG_IN, { 
        update: (_, { data }) => {
            const { requestSecret: { ok } } = data;
            if(!ok){
                toast.error("You dont have an account yet, create one");
                setTimeout(() => setAction("signup"), 3000);
            }else {
                toast.success("Welcome! Limgram!");
            }
        },
        variables: { email : email.value }
    });

    const createAccount = useMutation(CREATE_ACCOUNT, {
        variables: {
            email: email.value,
            username: username.value,
            firstName: firstName.value,
            lastName: lastName.value
        }
    })

    const onSubmit = (e) => {
        e.preventDefault();
        if (action === "logIn") {
            if (email !== "") {
                requestSecret();
            } else {
                toast.error("Email is required");
            }
        } else if (action === "signUp") {
            if (
                email.value !== "" &&
                username.value !== "" &&
                firstName.value !== "" &&
                lastName.value !== ""
            ) {
                createAccount();
            } else {
                toast.error("All field are required");
            }
        }
    }

    return (
        <AuthPresenter 
            setAction={setAction} 
            action={action} 
            username={username} 
            firstName={firstName}
            lastName={lastName}
            email={email}
            onSubmit={onSubmit}
        />
    )
}