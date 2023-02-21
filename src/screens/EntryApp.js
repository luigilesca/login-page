import React, { Component } from 'react'
import NewInput from '../components/ui/input/NewInput'
import Button from "../components/ui/button/Button"
import CheckBoxInput from '../components/functionComponents/CheckBoxInput'
import { FaFacebookF } from "react-icons/fa"
import { IoLogoTwitter } from "react-icons/io"
import { TbExclamationMark } from "react-icons/tb"
import "../styles/entryApp/entryApp.css"

class EntryApp extends Component {
    constructor(props) {
        super(props)
        this.varPasswordEmpty = true;
        this.varEmailEmpty = true;
        this.varEmailValid = true;
        this.varTypePasswordField = "password"

        this.state = {
            email: "",
            password: "",
            isPasswordVisible: false,
            isEmailValid: false,
            isEmailEmpty: true,
            isPasswordEmpty: true,
            rememberMe: false,
            checkErrorPassword: true,
            checkErrorEmail: true,
            typePasswordField: "password"
        }
    }

    componentDidMount() { }

    componentDidUpdate() {
        this.state.isPasswordVisible ? (this.varTypePasswordField = "text") : (this.varTypePasswordField = "password")
    }

    // controlla validità email
    checkValidityEmail(email) {
        const validPassword = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        if (!validPassword.test(email)) {
            console.log("non valida");
            this.varEmailValid = false;
            return;
        }
        console.log("email valida");
        this.varEmailValid = true;
    }

    // controlla password input se è vuota
    checkEmptyPassword = (e) => {
        let passwordInput = e.target.value;
        passwordInput !== "" ? (this.varPasswordEmpty = false) : (this.varPasswordEmpty = true)
    }

    // controlla password input se è vuota
    checkEmptyEmail = (inputEmail) => {
        let emailInput = inputEmail;
        emailInput !== "" ? (this.varEmailEmpty = false) : (this.varEmailEmpty = true)
    }

    // controlla input email
    insertEmail = (e) => {
        let inputEmail = e.target.value
        this.checkEmptyEmail(inputEmail)
        this.checkValidityEmail(inputEmail)
    }

    // controlla bottone login e fa i diversi check
    logIn = () => {
        this.setState({
            isPasswordEmpty: this.varPasswordEmpty,
            isEmailEmpty: this.varEmailEmpty,
            isEmailValid: this.varEmailValid,
            checkErrorPassword: false,
            checkErrorEmail: false,
        })
    }

    inputClickPassword = () => {
        this.setState({
            checkErrorPassword: true
        })
    }

    inputClickEmail = () => {
        this.setState({
            checkErrorEmail: true
        })
    }

    inputClickRememberMe = () => {
        let rememberMe = this.state.rememberMe
        this.setState({
            rememberMe: !rememberMe
        })
    }

    setVisibilityPassword = () => {
        let passwordVisible = null;
        this.state.isPasswordVisible ? passwordVisible = false : passwordVisible = true
        this.setState({
            isPasswordVisible: passwordVisible
        })
    }

    componentWillUnmount() { }


    render() {
        return (
            <div className='section'>


                <div className='container__image'>
                    <img src='https://colorlib.com/etc/lf/Login_v18/images/bg-01.jpg' />
                </div>


                <div className='container__login'>
                    <div className='container__title'>
                        <h1>Login to continue</h1>
                    </div>

                    <div className='container__input'>
                        <NewInput
                            callbackInput={ this.insertEmail }
                            callbackInputClick={ this.inputClickEmail }
                            styleNewInput={ "input__container" }
                            placeholderInput={ "" }
                            typeInput={ "text" }
                            label={ "Email" }
                        />
                        {
                            ((this.state.isEmailEmpty && !this.state.checkErrorEmail) ||
                                (!this.state.isEmailValid && !this.state.checkErrorEmail)) &&
                            <div className='alert__email'>
                                <div className="alert__container">

                                    <p>Valid email is required: ex@abc.xyz</p>
                                    <span>
                                        <TbExclamationMark />
                                    </span>
                                </div>
                            </div>
                        }

                        <NewInput
                            callbackInput={ this.checkEmptyPassword }
                            callbackInputClick={ this.inputClickPassword }
                            callbackIconClick={ this.setVisibilityPassword }
                            styleNewInput={ "input__container" }
                            styleIcon={ 'input__icona' }
                            placeholderInput={ "" }
                            label={ "Password" }
                            typeInput={ this.state.isPasswordVisible ? "text" : "password" }
                            typeIcon={ this.state.isPasswordVisible }
                        />

                        {
                            this.state.isPasswordEmpty && !this.state.checkErrorPassword &&
                            <div className='alert__password'>
                                <div className="alert__container">

                                    <p>Password Is Required</p>
                                    <span>
                                        <TbExclamationMark />
                                    </span>
                                </div>
                            </div>
                        }

                        {
                            <div className='container__info'>
                                <div className='remember'>
                                    { <CheckBoxInput
                                        // callbackInput={ this.inputClickRememberMe }
                                        styleNewInput={ "checkbox" }
                                        typeInput={ "checkbox" }
                                    /> }

                                    {/* <input
                                        className='checkbox'
                                        type="checkbox"
                                        onClick={ this.inputClickRememberMe }
                                    /> */}

                                    <span className='remember__link'>
                                        <a>Remember me</a>
                                    </span>
                                </div>
                                <span>
                                    <a href='#'>Forgot Password?</a>
                                </span>
                            </div>
                        }

                        <Button
                            label={ "Login" }
                            styleCss={ "btn" }
                            callBackButton={ this.logIn }
                        />
                        <div className='container__signup'>
                            <a href='#'>or sign up using</a>
                        </div>

                        <div className='container__social-link'>

                            <div className='social facebook'>
                                <i>
                                    <FaFacebookF />
                                </i>
                            </div>
                            <div className='social twitter'>
                                <i>
                                    <IoLogoTwitter />
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}






export default EntryApp