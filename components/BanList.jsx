import React from "react";

const BanList = ({bans, handleClick}) => {
    return (
        <div className="sideNav">
            <h2>Ban List</h2>
            <h4>Select an attribute in your listing to ban it</h4>
            {
                bans.length != 0 &&
                bans.map((value, index) => (
                    <button type="banned item" 
                            className="banned-buttons"
                            key={index}
                            onClick={() => handleClick(value)}>
                        {value}
                    </button>
                ))
            }
        </div>
    );
};


export default BanList;