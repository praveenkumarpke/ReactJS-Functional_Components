import { Component } from 'react';

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fruit: "apple",
            flower: "sunflower",
            bird: "Peacock",
            animal: "tiger",
            bike: "honda",
            car: "suzuki",
            bus: "volvo",
            truck: "scania"
        }
    }

    updateState = () => {
        this.setState(
            {
                fruit: "banana",
                bird: "Sparrow",
                car: this.props.car,
                truck: this.props.truck
            }
        );
    }

    render() {
        return (
            <div style={{
                border: '10px solid blue', padding: '15px', width: '25%',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center'
            }}>
                class component
                <h3>About: fruit-flower-bird-animal</h3>

                <ol>
                    <li style={{ color: 'red' }}>Fruit : {this.state.fruit}</li>
                    <li>Flower : {this.state.flower}</li>
                    <li style={{ color: 'green' }}>Bird : {this.state.bird}</li>
                    <li>Animal : {this.state.animal}</li>
                </ol>

                <h3> Details: bike-car-bus-truck</h3>

                <ul>
                    <li>Bike : {this.state.bike}</li>
                    <li style={{ color: 'blue' }}>Car : {this.state.car}</li>
                    <li>Bus : {this.state.bus}</li>
                    <li style={{ color: 'orange' }}>Truck : {this.state.truck}</li>
                </ul>

                <button style={{ borderColor: 'blue', borderRadius: '10px' }} onClick={this.updateState}>
                    Click me!
                </button>
            </div>
        );
    };
}

export default Detail;