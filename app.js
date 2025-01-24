const express = require('express');
const connectDB = require('./config/database.js');
const bookRoutes = require('./routes/bookRoutes');

const app = express();  
const PORT = process.env.PORT || 7000;   

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');    
});  

app.use('/books', bookRoutes);

app.listen(PORT,async() => {
    try {
        await connectDB();
        console.log(`Server is running on port ${PORT}`);
        
    } catch (error) {
        console.error(error.message);
    }
})