import { useState } from 'react';
import './Home.css';
import axios from 'axios';

export default function Home() {
    const [city, setCity] = useState('Pune');
    const [temperature, setTemperature] = useState(0);

    function loadWeather()
    {
        
    }

    return ( <
        div >
        <
        h1 className = 'app-title' > Weather App For { city } < /h1>  <
        input type = 'text'
        placeholder = 'Enter City'
        className = 'search-bar'
        value = { city }
        onChange = {
            (e) => {
                setCity(e.target.value);
            }
        }

        / > <
        h1 className = 'temperature-txt' > Temperature: { temperature }°
        C < /h1>

        <
        /
        div >
    )
}