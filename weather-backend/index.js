const express = require('express');
const cors = require('cors');
require('dotenv').config(); 
const axios = require('axios');
const app = express();
const os = require('os');

const frontendHost = process.env.FRONTEND_HOST;
const corsOptions = {
    origin: [frontendHost, 'http://localhost:5173'], 
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions)); 

app.get('/city/:cityName/forecast', async (req, res) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
            params: {
                q: req.params.cityName,
                appid: process.env.VITE_API_KEY,
                units: 'metric',
            },
        });

        res.send({ response: response.data });
    } catch (error) {
        res.status(error.response?.status || 500).json({
            message: error.response?.data?.message || "Something went wrong while fetching the forecast data.",
        });
    }
});


app.get('/city/:cityName', async (req, res) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
            params: {
                q: req.params.cityName,
                appid: process.env.VITE_API_KEY, 
                units: 'metric',
            },
        });
        res.send({ response: response.data });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong on the server." });
    }
});

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server is running on http://${os.hostname()}:${PORT}`);
});