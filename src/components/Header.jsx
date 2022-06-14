import React from 'react';

import { useSelector } from 'react-redux';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Logo from '../assets/img/logo.svg';

function Header(props) {
    const reserveSize = useSelector(state => state.reserve.length);
    return (
        <HeaderContainer>
            <Link to={"/"}>
                <img src={Logo} alt="Logo" />
                <p>Voar</p>
            </Link>

            <Link to={"/reservas"}>
                <div className="reservas">
                    <strong>Minhas reservas</strong> 
                    <span>{reserveSize} reservas</span>
                </div>
            </Link>
        </HeaderContainer>

    );
}

export default Header;

const HeaderContainer = styled.header`
    align-items: center;

    border-bottom: 2px solid #FFFFFF;

    border-top: 2px solid #FFFFFF;

    display: flex;

    justify-content: space-between;
    
    margin-top: 5px;

    padding: 15px 15px;

    a {
        text-decoration: none;
    }

    a p  {
        color: #FFFFFF;

        font-family: 'Lobster', cursive;

        font-size: 36px;

        text-align: center;
    }

    img     {
        max-height: 110px;

        max-width: 110px;
    }

    .reservas {
        text-align: right;
    }

    .reservas strong {
        color: #FFFFFF;

        display: block;

        font-weight: bold;

        padding-bottom: 5px;
    }

    .reservas span {
        color: #217477;

        display: block;
    }

`;

