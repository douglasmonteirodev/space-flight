import React from "react";
import "./SelectArt.css";

const SelectArt = ({ onChange }) => {
    return (
        <div className='select--area'>
            <select onChange={onChange}>
                <option value='10'>10 Articles</option>
                <option value='25'>25 Articles</option>
                <option value='50'>50 Articles</option>
                <option value='100'>100 Articles</option>
            </select>
        </div>
    );
};

export default SelectArt;
