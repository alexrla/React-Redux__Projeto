import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addReserve } from '../store/modules/reserve/action';

import styled from 'styled-components';

import { MdFlightTakeoff } from 'react-icons/md'

import api from '../services/api';

function Home(props) {
    const dispatch = useDispatch();
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        async function loadApi() {
            const response = await api.get("trips");
            setTrips(response.data);
        }

        loadApi();
    }, []);

    function handleAdd(trip)  {
        dispatch(addReserve(trip));
    }

    return (
        <main>
            <Box>
                {trips.map(trip => (
                    <li key={trip.id}>
                        <img src={trip.image} alt={trip.title} />
                        
                        <strong>{trip.title}</strong>
                        
                        <span>Status: {trip.status ? "Disponível" : "Indisponível"}</span>
                        
                        <button type="button" onClick={() => handleAdd(trip)}>
                            <div>
                                <MdFlightTakeoff size={16} color="#FFF" />
                            </div>
                            
                            <span>Solicitar Reserva</span>
                        </button>
                    </li>
                ))}
            </Box>
        </main>
    );
}

export default Home;

const Box = styled.ul`
    display: flex;

    justify-content: space-between;

    font-weight: bold;

    li  {
        border-radius: 5px;

        color: #FFFFFF;

        display: flex;

        flex-direction: column;

        padding-top: 18px;
    }

    li img {
        border-radius: 5px;

        max-height: 220px;

        max-width: 300px;

        width: 100%;
    }

    li strong   {
        font-size: 16px;

        line-height: 20px;

        padding: 10px 0;
    }

    li button   {
        align-items: center;

        background-color: #217477;

        border: none;

        border-radius: 5px;

        color: #FFFFFF;

        cursor: pointer;

        display: flex;

        gap: 10px;

        justify-content: center;

        margin-top: 10px;

        padding: 10px;
    }

    li button:hover {
        background-color: #0F585A;
    }

    @media (max-width: 769px)   {
        align-items: center;

        flex-direction: column;
    }
`;