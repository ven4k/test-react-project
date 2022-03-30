import React, {useEffect, useState} from "react";
import style from "../components-css/RegistrationForm.module.css";
import {useLocalStorage} from "./useLocalStorage";
import {Link} from "react-router-dom";

const RegistrationForm = () => {
    const [name, setName] = useLocalStorage('name', '')
    const [password, setPassword] = useLocalStorage('password', '')
    const [checked, setChecked] = useLocalStorage('checked', false)

    function redirect(){
        window.location.reload();
        window.location = 'http://localhost:3000/';
    }
    return (
        <div className={style.registrationPage}>
            <form>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="name"
                    aria-label="name"/>
                <div><input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    aria-label="password"/></div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={(e) => setChecked(e.target.checked)}
                        />{" "}
                        Not a robot?
                    </label>
                </div>
               <Link to='/'><div><input type="submit" value="Submit" onClick={redirect} /></div></Link>
            </form>
        </div>
    );
};

export default RegistrationForm;