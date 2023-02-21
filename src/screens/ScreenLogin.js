// 1. STATI:
// - Occhio icona password(isPasswordVisible => boolean)
// - controllo email (isEmailValid => boolean)
// - isEmailEmpty, isEmailEmpty => boolean
// isRememberMe => salvare lo stato quando click login

// screen prinpipale è una classe

// COmponenti: 
//1- input (2 input)
// 2- bottone login - checkbox
// 3.container immagine sinistra
//4. container App destra
// 5. componente icone + link signin

// media queries:
// 575 => cambia margin e centraatura del contenuto
// 770 > c'è immagine
// l'iimagine si modifica rimpicciolendo lo schermo

// README da scrivere

import React, { Component } from 'react'
import NewInput from '../components/ui/input/NewInput'
import Button from "../components/ui/button/Button"
import { FaFacebookF } from "react-icons/fa"
import { IoLogoTwitter } from "react-icons/io"
import { TbExclamationMark } from "react-icons/tb"

import "../styles/screenLogin/screenLogin.css"

class ScreenLogin extends Component {

        constructor(props) {
                super(props)

                this.isPasswordEmpty = true;
                this.isEmailEmpty = true;
                this.isEmailValid = true;
                this.typePasswordField = "password"


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

        componentDidMount() {
                this.checkErrorPassword = true;
                this.checkErrorEmail = true;
        }

        componentDidUpdate() {
                console.log("didUpdate");

                this.state.isPasswordVisible ? (this.typePasswordField = "text") : (this.typePasswordField = "password")

        }
        // controlla validità email
        checkValidityEmail(email) {
                const validPassword = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
                if (!validPassword.test(email)) {
                        console.log("non valida");
                        this.isEmailValid = false;
                        return;
                }
                console.log("email valida");
                this.isEmailValid = true;
        }

        // controlla password input se è vuota
        checkEmptyPassword = (e) => {
                let passwordInput = e.target.value;
                passwordInput !== "" ? (this.isPasswordEmpty = false) : (this.isPasswordEmpty = true)
        }

        // controlla password input se è vuota
        checkEmptyEmail = (inputEmail) => {
                let emailInput = inputEmail;
                emailInput !== "" ? (this.isEmailEmpty = false) : (this.isEmailEmpty = true)
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
                        isPasswordEmpty: this.isPasswordEmpty,
                        isEmailEmpty: this.isEmailEmpty,
                        isEmailValid: this.isEmailValid,
                        checkErrorPassword: false,
                        checkErrorEmail: false,
                })
        }

        inputClickPassword = () => {
                console.log("abbiamo cliccato")
                this.setState({
                        checkErrorPassword: true
                })
        }

        inputClickEmail = () => {
                console.log("abbiamo cliccato")

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
                                                        typeInput={ "email" }
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
                                                                <dov className="alert__container">

                                                                        <p>Password Is Required</p>
                                                                        <span>
                                                                                <TbExclamationMark />
                                                                        </span>
                                                                </dov>
                                                        </div>
                                                }

                                                {
                                                        <div className='container__info'>
                                                                <div className='remember'>
                                                                        <NewInput
                                                                                callbackInput={ this.inputClickRememberMe }
                                                                                styleNewInput={ "checkbox" }
                                                                                typeInput={ "checkbox" }
                                                                        />
                                                                        <span>
                                                                                <a>Remember Me</a>
                                                                        </span>
                                                                </div>
                                                                <span>
                                                                        <a href='#'>Forgot Password?</a>
                                                                </span>
                                                        </div>
                                                }


                                                <Button
                                                        label={ "Login in" }
                                                        styleCss={ "btn" }
                                                        callBackButton={ this.logIn }
                                                />
                                                <div className='container__signup'>
                                                        <a href='#'>or sign up using</a>
                                                </div>
                                                <div className='container__social-link'>

                                                        <div className='social facebook'>
                                                                <i><FaFacebookF /></i>
                                                        </div>
                                                        <div className='social twitter'>
                                                                <i><IoLogoTwitter /></i>
                                                        </div>
                                                </div>
                                        </div>
                                </div>








                        </div>
                )
        }
}

export default ScreenLogin