const express = require('express')
const app = express();
const PORT = 5050;

app.use(express.json());
app.use('/app', express.static('public'))
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/app`);
})

let data;

app.post('/data', (request, response) => {
    data = request.body;
    console.log(data);
    response.end();
})