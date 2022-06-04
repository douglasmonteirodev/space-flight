import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
import "./SearchInput.css";

const SearchInput = ({ onChange }) => {
    return (
        <div className='submit--line'>
            <form>
                <input onChange={onChange} type='text' placeholder='Search' />
                {/* <button type='submit' className='submit--lente'>
                    <SearchIcon />
                </button> */}
            </form>
        </div>
    );
};

export default SearchInput;
