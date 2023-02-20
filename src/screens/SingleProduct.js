import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/ui/navbar/Navbar';
import Button from '../components/ui/button/Button';
import NewInput from '../components/ui/input/NewInput';

function SingleProduct() {
    const location = useLocation()
    // console.log("location", location);

    const [state, setState] = useState(
        {
            toggle: false,
            input: "",
            wines: [
                {
                    name: location.state.name,
                    type: location.state.type,
                    id: location.state.id,
                }
            ]
        },

    )

    let inputName = ""


    const navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }

    function handleButton() {
        setState({
            ...state,
            toggle: !state.toggle
        })
    }

    function editName(e) {
        inputName = e.target.value.toLowerCase()
        // console.log(inputName);
    }

    function saveChange() {

        console.log(state.wines);
        setState(
            {
                wines: [
                    {
                        ...state.wines[0],
                        name: inputName
                    }
                ]
            }
        )
    }

    function mapWines(data) {
        console.log("data", data);
        return (
            <div key={ data.id }>
                <h3>
                    { data.name }
                </h3>
            </div>
        )
    }



    return (
        <>

            <div className='container'>
                <div>
                    <Button
                        label="go back"
                        callBackButton={ goBack }
                        styleCss={ "btn" }
                    />
                </div>
                <div className='container'>

                    {
                        <div>
                            { state?.wines?.map(mapWines) }
                        </div>
                    }

                    {/* { state.wines.name } */ }

                    <Button
                        label={ "edit" }
                        styleCss={ "btn" }
                        callBackButton={ handleButton }
                    />
                </div>
            </div>

            { state.toggle &&
                <div
                    className='container'>
                    <NewInput
                        label={ "edit name" }
                        styleNewInput={ "newinput" }
                        styleLabel={ "label" }
                        callbackInput={ editName }
                    />
                    <Button
                        label={ "save" }
                        styleCss={ "btn" }
                        callBackButton={ saveChange }
                    />
                </div> }
        </>
    )
}

export default SingleProduct