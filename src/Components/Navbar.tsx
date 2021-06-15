import React from 'react'
import Searchbar from './Searchbar';

type NavbarProps = {
    searchRes: any
}

const Navbar = () => {
    return (
        <header>
            <h1>MyGames</h1>
            <Searchbar></Searchbar>
        </header>
    )
}

export default Navbar
