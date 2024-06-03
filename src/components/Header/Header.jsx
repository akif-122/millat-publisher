import React from 'react'
import "./Header.css";

import { FaPhone, FaRegEnvelope } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <>
            <header className='header'>
                <div className="top-bar">
                    <div className="container ">
                        <ul className='top-link d-flex flex-column flex-md-row align-items-center '>
                            <li><a href="mailto: grm@kpec.org.pk"><FaRegEnvelope /> grm@kpec.org.pk</a></li>
                            <li><a href="tel: 091-9216005"><FaPhone />  091-9216005</a></li>
                        </ul>
                    </div>
                </div>

                {/* LOGO SECTION */}
                <div className="text-center my-3">
                    <Link to={"/"}>
                        <img src="./imgs/logo.png" width={180} alt="" />
                    </Link>
                </div>

            </header>
        </>
    )
}

export default Header