const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    
    async create (request, response) {
        const {name, description} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('tasks').insert({
            id, name, description,
        })
        return response.json({id});
    },

    async index (request, response) {
     

        const [count] = await connection('tasks').count();

        const tasks = await connection('tasks').select('*');

        response.header('X-total_Count', count['count(*)']);
        return response.json(tasks);
    },

    async delete (request, response) {
        const {id} = request.params;

        const tasks = await connection('tasks').where('id', id).first();
         if(!tasks){
             return response.status(404).json({error: 'Not permitted' });
            }

        await connection('tasks').where('id', id).delete();

        return response.status(204).send();

    }

};