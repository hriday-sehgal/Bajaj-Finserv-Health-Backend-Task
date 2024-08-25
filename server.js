const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

app.use(cors({
    origin: 'https://bajajfinservhealthhridaysehgal.onrender.com', // Allow requests only from the deployed frontend
    methods: 'GET,POST', // Allow these HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Allow these headers
    credentials: true // Allow credentials (if needed)
}));

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: 'Invalid input' });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item) && typeof item === 'string');

    const lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 
        ? [lowercaseAlphabets.sort().reverse()[0]] 
        : [];

    res.json({
        is_success: true,
        user_id: 'hriday_sehgal_01011999', 
        email: 'hriday.career@gmail.com',        
        roll_number: '21BHI10024',          
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
