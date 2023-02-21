const PORT = 3000;
const express = require('express');

const userRoutes = require('./routes/users')

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello")
})

app.use('/users', userRoutes)


app.listen(PORT, () => {
    console.log('app started at port', PORT);
})