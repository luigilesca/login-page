import React from 'react'
import { Routes, Route } from "react-router-dom"
import EntryApp from '../screens/EntryApp'
import SingleProduct from '../screens/SingleProduct'
import Products from '../screens/Products'
import ScrennProvaNavbar from "../screens/ScrennProvaNavbar"
import Entry from '../components/classComponents/Entry'

function Rounting(props) {
    return (
        <Routes>
            <Route path='/' element={ <ScrennProvaNavbar /> }>

                <Route path="/entry" element={ <Entry /> } />

                {/* <Route path='/' element={ < EntryApp /> } /> */ }
                <Route path='/products' element={ <Products /> } />
                <Route path='/product/:id' element={ <SingleProduct /> } />
            </Route>
        </Routes>
    )
}

export default Rounting

