import React from "react";
import "./FilterDatas.css";

const FilterDatas = ({ datefrom, dateTo, onChangeFrom, onChangeTo }) => {
    return (
        <div className='container-datas'>
            <span>From</span>
            <input
                onChange={onChangeFrom}
                type='date'
                name='from'
                value={datefrom}
            />
            <br />
            <span>To</span>
            <input type='date' onChange={onChangeTo} value={dateTo} name='to' />
            <br />
        </div>
    );
};

export default FilterDatas;
