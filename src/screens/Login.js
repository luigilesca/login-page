import React from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Button from '../components/ui/button/Button'

function Login() {

    const navigate = useNavigate()

    const location = useLocation()
    console.log("location", location);

    const [searchParams] = useSearchParams()
    // console.log(searchParams.get("name"));

    const params = useParams()
    console.log(params);


    function returnHome() {
        navigate("/")
    }

    return (
        <div>
            <h2>Login Page</h2>
            <Button
                label={ "Home" }
                callBackButton={ returnHome }
                styleCss={ "btn" }
            />
            <p>Id: { params?.id }</p>
        </div>
    )
}

export default Login