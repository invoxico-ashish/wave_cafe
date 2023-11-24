import React, { createContext, useContext, useEffect, useState } from 'react'
import { icedCoffee } from "../config/apiUrl";
import CafeMenu from '../Compoents/CafeMenu';
import axios from "axios"

const coffeeContext = createContext();

export function useCoffeeContext() {
    return useContext(coffeeContext);
}

export function CoffeeContextTwo({ children }) {
    const [coffeeData, setCoffeeData] = useState([]);

    const coffeeDetails = async () => {
        try {
            const response = await axios.get(icedCoffee);

            setCoffeeData(response.data);
            console.log(coffeeData, "dqwF");  // Log the data here
        } catch (error) {
            console.error('Error fetching coffee details:', error);
        }
    };
    // useEffect(() => {
    //     coffeeDetails()
    //     // console.log(coffeeData)
    // }, [])
    return (
        <coffeeContext.Provider value={{ coffeeDetails }}>
            {children}
        </coffeeContext.Provider>
    )
}

// export default CoffeeContextTwo