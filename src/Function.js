import { useState } from "react";

function Details({ cars, trucks }) {
    const [fruit, setFruit] = useState("apple");
    const [flower] = useState("sunflower");
    const [bird, setBird] = useState("Peacock");
    const [animal] = useState("tiger");
    const [bike] = useState("honda");
    const [car, setCar] = useState("suzuki");
    const [bus] = useState("volvo");
    const [truck, setTruck] = useState("scania");

    const updateState = () => {
        setFruit("banana");
        setBird("Sparrow");
        setCar(cars);
        setTruck(trucks);
    }

    return (
        <div style={{
            border: '10px solid green', padding: '15px', width: '25%',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center'
        }}>
            Functional component
            <h3>About: fruit-flower-bird-animal</h3>

            <ol>
                <li style={{ color: 'green' }}>Fruit : {fruit} </li>
                <li>Flower : {flower} </li>
                <li style={{ color: 'red' }}>Bird : {bird} </li>
                <li>Animal : {animal} </li>
            </ol>

            <h3> Details: bike-car-bus-truck</h3>

            <ul>
                <li>Bike : {bike} </li>
                <li style={{ color: 'orange' }}>Car : {car} </li>
                <li>Bus : {bus} </li>
                <li style={{ color: 'blue' }}>Truck : {truck} </li>
            </ul>

            <button style={{ borderColor: 'red', borderRadius: '10px' }} onClick={updateState}>
                Click me!
            </button>
        </div>
    );
}

export default Details;