import React from 'react'
import { listGame } from '../Api/RAWG_VG_Services'

const Searchbar = () => {
    return (
        <div>
            <form action="">
                <input type="text" placeholder="Search"/>
            </form>
                <button onClick={() =>  {
                    const data = listGame();
                    console.log(data);
                }} type="submit">Search</button>
    
        </div>
    )
}

export default Searchbar
