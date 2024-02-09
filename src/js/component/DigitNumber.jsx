import React from "react";

export const DigitNumber = ({digit}) => {
    return <>
        <div className="card text-center bg-dark text-light border">
            <div className="card-body">
                <p className="card-text" style={{fontSize:100}}>{digit}</p>
            </div>
        </div>	
    </>
}