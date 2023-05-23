import { Link } from "react-router-dom";
import { twenty_five, fifty } from "../redux/action";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { handle25Change, handle50change } from "../controllers/controllers";

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


    return(
        <div id="Home">
            <div className="config-Timer-content">

                <input type="radio" checked={is25Checked} onChange={() => handle25Change({is25Checked, is50Checked, set25Checked, set50Checked})} name="25/5"/>
                <label htmlFor="25/5">25/5</label>

                <input checked={is50Checked} onChange={() => handle50change({is25Checked, is50Checked, set25Checked, set50Checked})} type="radio" name="50/10"/>
                <label htmlFor="50/10">50/10</label>

            </div>
            <Link to={`/timer`}>
                <button>Start</button>            
            </Link>
        </div>
    )
}

export default Home;