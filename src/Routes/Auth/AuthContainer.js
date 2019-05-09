import React, {useState} from "react";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import useInput from "../../Hooks/useInput";
import { LOG_IN, CREATE_ACCOUNT, CONFIRM_SECRET, LOCAL_LOG_IN } from "./AuthQueries";
import AuthPresenter from "./AuthPresenter";

export default () => {
    const [action, setAction] = useState("logIn");
    const username = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("");
    const secret = useInput("");

    const requestSecretMutation = useMutation(LOG_IN, { 
        variables: { email : email.value }
    });

    const createAccountMutataion = useMutation(CREATE_ACCOUNT, {
        variables: {
            email: email.value,
            username: username.value,
            firstName: firstName.value,
            lastName: lastName.value
        }
    })

    const confirmSecretMutation = useMutation(CONFIRM_SECRET, {
        variables: {
            email: email.value,
            secret: secret.value
        }
    })

    const localLogInMutation = useMutation(LOCAL_LOG_IN);

    const onSubmit = async(e) => {
        e.preventDefault();
        // logIn action
        if (action === "logIn") {
            if (email !== "") {
                try{
                    const { data : { requestSecret : { ok } } } = await requestSecretMutation();
                    if(!ok){
                        toast.error("You dont have an account yet, create one");
                        setTimeout(() => setAction("signup"), 3000);
                    }else {
                        toast.success("check your inbox for your login secret!");
                        setAction("confirm");
                    }
                } catch(e) {
                    //toast.error("Could not complete this action try again");
                    toast.error(e.message);
                }
            } else {
                toast.error("Email is required");
            }
        // signUp action
        } else if (action === "signUp") {
            if (
                email.value !== "" &&
                username.value !== "" &&
                firstName.value !== "" &&
                lastName.value !== ""
            ) {
                try {
                    const { data : { createAccount : { ok } } } = await createAccountMutataion();
                    if(!ok){
                        toast.error("Can't create account!");
                    }else {
                        toast.success("Account created! Log In now!");
                        setTimeout(() => setAction("logIn"), 3000);
                    }
                } catch(e) {
                    toast.error(`Could not complete this action ${e.message}`);
                }
            } else {
                toast.error("All field are required");
            }
        // confirm action
        } else if(action === "confirm") {
            if(secret.value !== ""){
                try {
                    const { data : { confirmSecret : { ok, token } } } = await confirmSecretMutation();
                    if(!ok){
                        toast.error("Cant confirm secret! check again")
                    }else {
                        if(token){
                            localLogInMutation({ variables: { token }});
                            toast.success("Welcome!");
                        }else {
                            toast.error("plz check your secret word!");
                        }
                    }
                } catch {
                    toast.error("Cant confirm secret! check again");
                }
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
            secret={secret}
            onSubmit={onSubmit}
        />
    )
}