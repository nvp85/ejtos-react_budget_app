import React, { useContext } from 'react';
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };


    const changeAllocation = (name, type) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: type,
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FaPlusCircle size='1.5em' color='green' onClick={event=> changeAllocation(props.name, 'ADD_EXPENSE')}></FaPlusCircle></td>
        <td><FaMinusCircle size='1.5em' color='red' onClick={event=> changeAllocation(props.name, 'RED_EXPENSE')}></FaMinusCircle></td>
        <td><FaTimesCircle size='1.5em' onClick={handleDeleteExpense}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;
