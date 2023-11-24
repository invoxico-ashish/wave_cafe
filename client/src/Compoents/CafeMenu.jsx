import React, { useEffect, useState } from 'react'
import IcedCoffee from "./Coffee/IcedCoffee";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { icedCoffee } from "../config/apiUrl"
import axios from "axios"
import { hotCoffeeFun, fruitJuiceFun } from "../Global/listingFunctions"



function CafeMenu() {
    const [originalarr, setOriginalArr] = useState([])
    const [icedCoff, setIcedCoff] = useState([])
    const coffeeDetails = async () => {
        try {
            const res = await axios(icedCoffee)
            setOriginalArr(res.data)
            const iceCof = res.data;
            const iceCoffee = iceCof.slice(0, 4);
            setIcedCoff(iceCoffee)
        } catch (error) { console.log(error) }
    };

    const hotCoffeeClick = async () => {
        try {
            const updatedIcedCoff = await hotCoffeeFun(originalarr);
            setIcedCoff(updatedIcedCoff);
        } catch (error) { console.error('Error updating icedCoff:', error); }
    }

    const fruitClick = async () => {
        try {
            const updateFruitJuice = await fruitJuiceFun(originalarr);
            setIcedCoff(updateFruitJuice);
        } catch (error) { console.log(error) }
    }
    useEffect(() => {
        coffeeDetails();
    }, [setIcedCoff])

    return (
        <>

            <div className="tm-right">
                <main className="tm-main">
                    <div id="drink" className="tm-page-content">
                        <Nav className="tm-black-bg tm-drinks-nav"
                        >
                            <ul>
                                <li>
                                    <Nav.Link
                                        onClick={coffeeDetails}
                                        className="tm-tab-link active" >
                                        Iced Coffee</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link
                                        onClick={hotCoffeeClick}
                                        classNameName="tm-tab-link active"
                                    >
                                        Hot Coffee</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link
                                        onClick={fruitClick}
                                        classNameName="tm-tab-link active"
                                    >
                                        Fruit Juice</Nav.Link>
                                </li>
                            </ul>
                        </Nav>
                        <IcedCoffee coffee={icedCoff} />
                    </div>

                </main >
            </div >
        </>

    )
}

export default CafeMenu