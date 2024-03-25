import React from "react";
import CatInfo from "./CatInfo";


const Container = ({handleClick, catInfo, imgInfo, handleBan}) => {
    return (
        <div className="discover-container">
            {
                imgInfo['url'] != "" && 
                <CatInfo catInfo={catInfo} imgInfo={imgInfo} handleBan={handleBan}/>
            }
            <button type="discover" 
                    className="discover-btn" 
                    onClick={handleClick}>
                        🔀 Discover!
            </button>
        </div>
    );
};

export default Container;