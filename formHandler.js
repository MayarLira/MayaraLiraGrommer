const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    const nome = req.body.nome;
    const phone = req.body.phone;
    const assunto = req.body.assunto;
    const feedback = req.body.feedback;

    // Process the form data here
    console.log('Nome Completo:', nome);
    console.log('Telefone:', telefone);
    console.log('Assunto:', assunto);
    console.log('Observações sobre o pet:', feedback);

    res.send('Form submitted successfully!');
});

app.listen(5500, () => {
    console.log('Server is running on port 5500');
});