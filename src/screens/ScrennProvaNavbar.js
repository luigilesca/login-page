import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/ui/navbar/Navbar'
import EntryApp from './EntryApp'

function ScrennProvaNavbar() {
    return (
        <div>
            <Navbar />
            {/* <EntryApp /> */ }

            <Outlet />
        </div>
    )
}

export default ScrennProvaNavbar