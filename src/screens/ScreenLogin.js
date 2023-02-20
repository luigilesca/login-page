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
import "../styles/screenLogin/screenLogin.css"

class ScreenLogin extends Component {

        constructor(props) {
                super(props)

                this.isPasswordEmpty = true;
                this.isEmailEmpty = true;
                this.isEmailValid = true;
                // this.checkErrorPassword = true,
                //         this.checkErrorEmail = true,
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

                // this.checkErrorEmail = this.state.checkErrorEmail;
                // this.checkErrorPassword = this.state.checkErrorPassword;

                console.log("didUpdate");

                this.state.isPasswordVisible ? (this.typePasswordField = "text") : (this.typePasswordField = "password")

        }
        // controlla validità email
        checkValidityEmail(email) {
                //const validPassword = new RegExp("/^ [a - zA - Z0 -9._ % +-] +@[a - zA - Z0 - 9. -]+\.[a - zA - Z]{ 2,} $/");
                const validPassword = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
                if (!validPassword.test(email)) {
                        console.log("non valida");
                        return;
                }
                console.log("email valida");

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

                // this.checkErrorPassword = false;
                // this.checkErrorEmail = false;

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


        /*setVisibilityPassword2 = () => {
                let typePassword = null;
                this.state.isPasswordVisible ? typePassword = "text" : typePassword = "password"
                this.setState({
                        typePasswordField: typePassword
                })

        }*/


        componentWillUnmount() { }



        render() {
                return (
                        <div className='container'>
                                <div className='container__title'>
                                        <h1>Login to continue</h1>
                                </div>

                                <div className='container__input'>
                                        <NewInput
                                                label={ "" }
                                                callbackInput={ this.insertEmail }
                                                callbackInputClick={ this.inputClickEmail }
                                                styleNewInput={ "newinput" }
                                                placeholderInput={ "email" }
                                                typeInput={ "email" }
                                        />

                                        { this.state.isEmailEmpty && !this.state.checkErrorEmail && <p>Inserisci email</p> }
                                        <NewInput
                                                label={ "" }
                                                callbackInput={ this.checkEmptyPassword }
                                                callbackInputClick={ this.inputClickPassword }
                                                styleNewInput={ "newinput" }
                                                placeholderInput={ "password" }
                                                // typeInput={ this.state.typePasswordField }
                                                typeInput={ this.state.isPasswordVisible ? "text" : "password" }
                                        />
                                        <Button
                                                label={ "occhio" }
                                                callBackButton={ this.setVisibilityPassword }
                                        />
                                        { this.state.isPasswordEmpty && !this.state.checkErrorPassword && <p>Inserisci la password</p> }

                                        <NewInput
                                                label={ "" }
                                                callbackInput={ this.inputClickRememberMe }
                                                styleNewInput={ "newinput" }
                                                // placeholderInput={ "password" }
                                                typeInput={ "checkbox" }
                                        />
                                </div>

                                <Button
                                        label={ "Login in" }
                                        styleCss={ "btn" }
                                        callBackButton={ this.logIn }
                                />
                        </div>
                )
        }
}

export default ScreenLogin