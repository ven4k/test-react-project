import React from "react";
import {Link} from "react-router-dom";
import style from "../components-css/AboutUs.module.css";


const AboutUs = () => {

    return (
        <div className={style.aboutUsPage}>
            <div><img
                src="https://avatars.mds.yandex.net/get-zen_doc/3502647/pub_610817ffbe4d6e3d43db78cf_610826f1a1c5706037c4956d/scale_1200"/>
            </div>
            <div className={style.infoBlock}>
                <div className={style.textBlock}>
                    <p>
                        More than 7 billion people live on our planet and each of them has their own interests, views
                        and tastes. We all have a favorite song, book, place, dish, which are associated with the most
                        unforgettable moments of life. And just as you chose them, you will be able to plunge into the
                        fascinating search for a drink, the taste of which will become part of your character and
                        lifestyle. It is this taste that will create an atmosphere of happiness for you.
                    </p>
                </div>
                <div className={style.buttonBlock}>
                    <Link to='/apicatalog'>
                        <button>OPEN CATALOG</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;