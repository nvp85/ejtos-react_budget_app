import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

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
        <td>£{props.cost}</td>
        <td><button onClick={event=> changeAllocation(props.name, 'ADD_EXPENSE')}>+</button></td>
        <td><button onClick={event=> changeAllocation(props.name, 'RED_EXPENSE')}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
