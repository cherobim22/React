import React, {useState} from 'react';
import './styles.css';
import api from '../../services/api';
//import {FiSend} from 'react-icons/fi';

export default function Header(){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
   

  async function handleRegister(e) {
        e.preventDefault();
        const data = {
            name, description,
        };
        try {
            const response = await api.post('tasks', data);
            alert (`Seu Id de acesso: ${response.data.id}` )
            window.location.reload(false);
        }catch(err){
            alert('Erroouu');
        }
     
    }

    return(
        <div className="input-task">
            <section className="container-header">
                <h1>Lista de Tarefas</h1>
            </section>
            <section className="container-input row">
                <div className="input">
                    <form onSubmit={handleRegister}>
                        <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>
                        <textarea type="text" placeholder="Sobre a tarefa" value={description} onChange={e => setDescription(e.target.value)}/>
                        <button className="button-save" type="submit" >Salvar</button>
                    </form>
                </div>
            </section>
        </div>
    );
};