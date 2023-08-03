import express from 'express';
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        console.log('Conectado ao banco de dados');
        const app = express();
        const port = 3001;
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(() => console.log('Erro ao conectar ao mongodb'));


