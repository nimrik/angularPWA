const express = require('express');
const app = express();

app.listen(8000, () => {
    console.log('Server started!')
});

app.route('/cats').get((req, res) => {
    res.send({
        cats: [{ name: 'lilly' }, { name: 'lucy' }],
    })
});