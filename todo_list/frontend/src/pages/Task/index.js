import React, { useState, useEffect } from 'react';
import './styles.css';
import { FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

export default function Task(){
    const [task, setTasks] = useState([]);

    useEffect(() => {
        api.get('tasks', {
        }).then(response => {
            setTasks(response.data);
        })
    }, []);

    async function handleDelete(id){
        try{
            await api.delete(`tasks/${id}`,{

            });
            setTasks(task.filter(task => task.id !== id));
        } catch(err){
            alert('Erro ao deletar caso, tente novamente.');
        }
    }
   
    
    return(
       
        <div className="list-container">
        <section className="container flex">
            <ul>
            {task.map(tasks => (
                <li key={tasks.id}>
                    <strong>Nome:</strong>
                    <p>{tasks.name}</p>
                    <strong>Descrição:</strong>
                    <p>{tasks.description}</p>
                        <button onClick={() => handleDelete(tasks.id)} type="button">
                    <FiTrash2 size={20} color="#f80000"/>
                    </button>
                </li>
            ))}
            </ul>
        </section>
    </div>
       /* <div className="list-container">
            <section className="container flex">
                <ul>
                    {task.map(tasks => (
                        <li key={tasks.id}>
                            <strong>nome</strong>
                            <p>{tasks.name}</p>
                            <strong>description</strong>
                            <p>{tasks.description}</p>
                             <button type="button">
                            <FiTrash2 size={20} color="#f80000"/>
                            </button>
                        </li>
                    ))} 
                </ul>
            </section>
        </div>*/
    );
};