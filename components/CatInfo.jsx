import React from "react";

const CatInfo = ({catInfo, imgInfo, handleBan}) => {
    return (
        <div className="listing-container">
            <h2>{catInfo.name}</h2>
            <div className="buttons">
                {
                    Object.entries(catInfo).map(([key, value], index) => {
                        // name is used for header
                        if (key != "name") {
                            return (
                                <button type="attribute" 
                                        className="attribute-btn"
                                        key={index}
                                        onClick={() => handleBan(value)}>
                                    {value}
                                </button>
                            )
                        }
                    })
                }
            </div>
            <img 
                src={imgInfo.url} 
                className="cat-pic"
                alt="random image from Cat API"
            />
        </div>
    )
};


export default CatInfo;