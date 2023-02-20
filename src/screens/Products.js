import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import mapList from '../utils/mapList'
import Navbar from '../components/ui/navbar/Navbar'
import NewInput from "../components/ui/input/NewInput"
import Form from "../components/functionComponents/Form"

function Products() {
    const location = useLocation()
    // console.log("location products", location);

    const [state, setState] = useState(location.state.wines)

    function handleInput(e) {
        let input = e.target.value

        let filteredWine = location.state.wines.filter((wine) => wine.name.toLowerCase().includes(input.toLowerCase()))
        // console.log("filtered Wine:", filteredWine);

        setState(filteredWine)
    }

    return (
        <div>

            <h1>Products Page</h1>

            <Form>
                <NewInput
                    label={ "search wine" }
                    styleLabel={ "label" }
                    styleNewInput={ "newinput" }
                    callbackInput={ handleInput }
                    placeholderInput={ "search wine" }
                />
            </Form>

            <div className='container'>
                { state.map(mapList) }
            </div>
        </div>
    )
}

export default Products