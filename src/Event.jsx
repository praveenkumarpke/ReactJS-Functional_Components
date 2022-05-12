import { useState } from "react";

function Event() {
    const [name, setName] = useState(" ");
    const [inputs, setInputs] = useState(" ");

    const [name_, setName_] = useState("");
    const [age, setAge] = useState("");

    const fruits = ["apple, banana, grapes, orange, mango"]

    const carInfo = [{
        type: 'four wheel',
        brand: 'suzuki',
        model: 'aulto 800',
        price: 100000,
        fuelCapacity: "12-ltr"
    }];

    const event = () => {
        alert("Hello");
    }

    const Arguments = (argument) => {
        alert(argument);
    }

    const Events = (a, b) => {
        alert(b.type);
    }

    const Conditional = (parameter) => {
        // if (parameter == "hello") {
        //     alert("Display Content Successfully")
        // }
        // else {
        //     alert("Give proper input")
        // }
        { parameter === "hello" ? alert("Display Content Successfully") : alert("Give proper input") }
    }

    const handleSubmit = (e) => {
        alert(`name : ${name}`);
    }

    const handle_Change = (e) => {
        const name = e.target.name;
        console.log(name);
        const value = e.target.value;
        console.log(value);

        setInputs(values => ({ ...values, [name]: value }))
    }

    const handle_Submit = () => {
        alert(`username : ${inputs.username} || age: ${inputs.age}`);
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', border: '10px solid blue' }}>
            <div>
                <b>React Js Event</b> <br /><br />
                <button onClick={event}>Click me!</button> <br /> <br />
                <button onClick={() => Arguments("JavaScript Event")}>arguments</button> <br /><br />
                <button onClick={(e) => Events("hi", e)}>event</button> <br /> <br />
                <button onClick={() => Conditional("hello")}>Conditional</button> <br /><br />
                <b>Array map method</b>
                {fruits.map((k) => <p>{k}</p>)}
                {carInfo.map((i) =>
                    <>
                        <h2>type : {i.type}</h2>
                        <h2>brand : {i.brand}</h2>
                        <h2>model : {i.model}</h2>
                        <h2>price : {i.price}</h2>
                        <h2>fuelCapacity : {i.fuelCapacity}</h2>
                    </>
                )}
            </div>
            <div style={{ border: '15px solid red', padding: '20px' }}>
                <b>form</b> <br /><br />
                <form action="" onSubmit={handleSubmit}> Enter your name :  {" "}
                    <label htmlFor="">
                        <input type="text" id="" placeholder="ex: john" value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </label> {" "}
                    <label htmlFor="">Enter your age : {" "}
                        <input type="number" id="" placeholder="ex: 23" />
                    </label> {" "}
                    <label htmlFor="">
                        <input type="submit" value="submit" />
                    </label>
                </form>

                <br /><br />
                <form onSubmit={handle_Submit}>
                    <label>Enter your name:
                        <input
                            type="text"
                            name="username"
                            value={inputs.username}
                            onChange={handle_Change}
                        />
                    </label>
                    <label>Enter your age:
                        <input
                            type="number"
                            name="age"
                            value={inputs.age}
                            onChange={handle_Change}
                        />
                    </label>
                    <input type="submit" />
                </form>
                <br /> <br />

                <br /><br />
                <form>
                    <label>Enter your name:
                        <input
                            type="text"
                            value={name_} placeholder="ex : john"
                            onChange={(e) => setName_(e.target.value)}
                        />
                    </label>
                    <label>Enter your age:
                        <input
                            type="number"
                            value={age} placeholder="ex : 23"
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </label>
                    <p>{name_}</p>
                    <p>{age}</p>
                </form>
                <br /> <br />
            </div>
        </div>
    );
}
export default Event;