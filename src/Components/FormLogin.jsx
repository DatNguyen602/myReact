import axios from "axios";
import React, { useState } from "react";


const FormLogin = () => {

    let check = -1;

    const [login , setLogin] = useState({
        email: "",
        password: "",
    });

    const ChangeLogin = (e) => {
        setLogin({
            ...login,
            [e.target.name] : e.target.value,
        })
        console.log(login);
    }

    const checkMail = (e) => {
        // ^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*/$
        const regexEmail = /@.+?\.[a-zA-Z0-9]/i ;
        check = login.email.search((regexEmail));
        const logError = document.querySelector(".errorInputMail");
        logError.innerHTML = check !== -1 ? "" : "Pleas check your email!";
        logError.innerHTML = login.email !== "" ? logError.innerHTML : "Email , it's empty!";
    }

    const checkPassword = () => {
        const logError = document.querySelector(".errorInputPass");
        logError.innerHTML = login.password !== "" ? "" : "Password , it's empty!";
    }

    const ClickLogin = (e) => {
        e.preventDefault();
        if(check === -1){
            document.querySelector("#email").focus();
            return;
        }
        if(login.password === ""){
            document.querySelector("#password").focus();
            return;
        }
        axios.post("https://reqres.in/api/login",login)
            .then((response) => {
                alert("Login is Success! " + response);
            })
            .catch((error) => {
                alert("Login is Error! " + error)
            });
            // alert("Login is Success! ");
    }

    const ClickSigin = (e) => {
        e.preventDefault();
        alert("Hi , Have a good day!");
    }

    return <div className="formLogin">
        <form onSubmit={checkMail}>
            <h1>Form login</h1>
            <label htmlFor="email">
                Email 
            </label>
            <input 
            id="email"
            name="email"
            className="btn"
            onChange={ChangeLogin}
            onBlur={checkMail}
            type="text"
            placeholder="Type your Email!"
            />
            <p className="errorInputMail styleError"></p>
            <label htmlFor="password">
                Password 
            </label>
            <input id="password"
            name="password"
            className="btn"
            onChange={ChangeLogin}
            onBlur={checkPassword}
            type="password"
            placeholder="Type your Password!"
            />
            <p className="errorInputPass styleError"></p>

            <div className="btns">
                <button onClick={ClickLogin} className="btn">Login</button>
                <button onClick={ClickSigin} className="btn">Sigin</button>
            </div>
        </form>
    </div>

}

export default FormLogin;