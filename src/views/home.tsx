import { Link } from "react-router-dom";
import { twenty_five, fifty } from "../redux/action";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";

function Home() {
    const dispatch = useDispatch();
    const [is25Checked, set25Checked] = useState(true);
    const [is50Checked, set50Checked] = useState(false);
    useEffect(() => {
        if (is25Checked) {
            dispatch(twenty_five());
        } else {
            dispatch(fifty());
        }
    }, [is25Checked])

    function handleCheckboxChange() {
        set25Checked(!is25Checked);
        set50Checked(!is50Checked);
      }

    return(
        <div id="Home">
            <div className="config-Timer-content">

                <input type="checkbox" checked={is25Checked} onChange={handleCheckboxChange} name="25/5"/>
                <label htmlFor="25/5">25/5</label>

                <input checked={is50Checked} onChange={handleCheckboxChange} type="checkbox" name="50/10"/>
                <label htmlFor="50/10">50/10</label>

            </div>
            <Link to={`/timer`}>
                <button>Start</button>            
            </Link>
        </div>
    )
}

export default Home;