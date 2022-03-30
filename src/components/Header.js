import React from "react";
import style from '../components-css/Header.module.css'
import {Link} from "react-router-dom";
import {whenMapDispatchToPropsIsMissing} from "react-redux/lib/connect/mapDispatchToProps";


const Header = () => {
    let refresh = () => {
        localStorage.clear();
        return window.location.reload();
    }

    if(localStorage.getItem('name') === "\"\"" || localStorage.getItem('name') === null){
        return (
            <div className={style.headerdiv}>
                <div className={style.logo}>
                    <div><Link to="/">
                        <img src="http://g02.s.alicdn.com/kf/HT1haGBFLVaXXagOFbXa/200116775/HT1haGBFLVaXXagOFbXa.jpg"/>
                        <span>WhateverYouWant</span>
                    </Link></div>
                </div>
                <div className={style.navbar}>
                    <div><Link to="/registration"><span>Registration</span>></Link></div>
                    <div><Link to="/registration"><span>Login</span>></Link></div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={style.headerdiv}>
                <div className={style.logo}>
                    <div><Link to="/">
                        <img src="http://g02.s.alicdn.com/kf/HT1haGBFLVaXXagOFbXa/200116775/HT1haGBFLVaXXagOFbXa.jpg"/>
                        <span>WhateverYouWant</span>
                    </Link></div>
                </div>
                <div className={style.navbar}>
                    <div><Link to="/favorites"><span>Favorites</span></Link></div>
                    <div><Link to="/history"><span>History</span></Link></div>
                    <div><span onClick={refresh}>Exit</span></div>
                    <div className={style.nickname}><Link to="/registration"><span>{localStorage.name}</span></Link></div>
                </div>
            </div>
        )
    }


}
export default Header;