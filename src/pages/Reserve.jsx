import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { removeReserve, updateAmount } from '../store/modules/reserve/action';

import styled from 'styled-components';

import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md'

function Reserve(props) {
    const reserves = useSelector(state =>state.reserve);
    const dispatch = useDispatch();

    function handleRemove(id) {
        dispatch(removeReserve(id));
    }

    function decrementAmount(trip)  {
        // if(trip.amount === 1)   return;
        dispatch(updateAmount(trip.id, trip.amount - 1));
    }

    function incrementAmount(trip)  {
        dispatch(updateAmount(trip.id, trip.amount + 1))
    }

    return (
        <Container>
            {reserves.length > 0 ? <p>Você solicitou {reserves.length} reserva (s)</p> : <p>Cliente sem reservas!</p>}

            {reserves.map((reserve) => {
                return (
                    <div className="content" key={reserve.id}>
                        <img src={reserve.image} alt={reserve.title} />

                        <strong>{reserve.title}</strong>

                        <div className="quantidade">
                            <button type="button" onClick={() => decrementAmount(reserve)}>
                                <MdRemoveCircle size={20} color="#22C1C7" />
                            </button>

                            <span>Quantidade: <input type="text" readOnly value={reserve.amount} /></span>

                            <button type="button" onClick={() => incrementAmount(reserve)}>
                            <MdAddCircle size={20} color="#22C1C7" />
                            </button>
                        </div>

                        <button type="button" onClick={() => handleRemove(reserve.id)}>
                            <MdDelete size={20} color="#22C1C7" />
                        </button>
                    </div>
                )
            })}

            {reserves.length > 0 ? <button type="button"  className="confirmar">Confirmar reserva (s)</button> : ""}
        </Container>
    );
}

export default Reserve;

const Container = styled.div`
    margin-top: 15px;

    p   {
        color: #FFFFFF;

        font-size: 20px;

        font-weight: bold;

        text-align: center;
    }

    .content {
        align-items: center;

        background-color: #0F585A;

        border-radius: 3px;

        color: #FFFFFF;

        display: flex;

        font-size: 18px;

        justify-content: space-between;

        margin-top: 20px;
    
        padding: 15px;
    }

    .content img   {
        border-radius: 5px;

        height: 120px;

        width: 180px;
    }

    .content button   {
        background-color: #0F585A;

        border: none;

        cursor: pointer;

        display: flex;
    }

    .quantidade     {
        align-items: center;

        display: flex;

        gap: 5px;
    }

    .quantidade input   {
        border: none;

        border-radius: 3px;

        padding: 5px;

        width: 30px
    }

    .confirmar {
        background-color: #217477;

        border: none;

        border-radius: 5px;

        color: #FFFFFF;

        cursor: pointer;

        margin-top: 10px;

        padding: 10px;
    }

    .confirmar:hover {
        background-color: #0F585A;
    }

    @media (max-width: 768px)   {
        .content    {
            font-size: 20px;

            flex-direction: column;

            gap: 20px;
        }

        .content img    {
            height: 150px;

            width: 250px;
        }
    }

`;