import React from "react";
import Details from "./Class";
import Detail from "./Function";
function Myfunction() {
    return (
        <div style={{ border: '10px solid' }}>
            <header style={{
                height: '100px', backgroundColor: 'salmon', marginBottom: '50px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'sans-serif', fontSize: '50px'
            }}>
                state and props use in class and functional component
            </header>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '50px' }}>
                <Details car="hyundai" truck="man" />
                <Detail cars="hyundai" trucks="man" />
            </div>
        </div>
    )
}

export default Myfunction;
