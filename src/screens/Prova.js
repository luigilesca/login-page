import React, { Component } from 'react'

import Form from '../components/functionComponents/Form'
import NewInput from "../components/ui/input/NewInput"
import Button from "../components/ui/button/Button"


class Prova extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isEdit: null,
            users: []
        }

        this.input = ""
        this.editInput = ""

        if (!localStorage.getItem("users")) {
            localStorage.setItem("users", JSON.stringify(this.state))
        }
    }

    componentDidMount() {
        console.log("componentDidMount");

        this.getStorage = JSON.parse(localStorage.getItem("users"))
        console.log(this.getStorage);
        localStorage.setItem("users", JSON.stringify(this.getStorage))

        this.setState(this.getStorage)

    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
        localStorage.setItem("users", JSON.stringify(this.getStorage))
    }

    inputName = (e) => {
        this.input = e.target.value
    }

    handleForm = () => {
        this.getStorage = JSON.parse(localStorage.getItem("users"))
        let newObject = {
            name: this.input
        }

        this.getStorage.users.push(newObject)
        this.getStorage.isEdit = false

        console.log(this.getStorage);
        localStorage.setItem("users", JSON.stringify(this.getStorage))

        this.setState(this.getStorage)
    }

    inputEditName = (e) => {
        this.editInput = e.target.value
        console.log(this.editInput);
    }

    toggle = () => {
        this.setState({
            isEdit: true
        })
    }

    editName = (name) => (e) => {
        console.log("click");
        console.log();
        this.getStorage = JSON.parse(localStorage.getItem("users"))

        let copyObject = Object.assign({}, this.state)

        copyObject.isEdit = false

        let indexName = this.state.users.findIndex(user => user.name === name)

        let newName = {
            name: this.editInput
        }
        copyObject.users[indexName] = newName

        this.setState(
            {
                users: [
                    ...copyObject.users,
                ],
                isEdit: copyObject.isEdit
            },

        )
        this.getStorage = copyObject
        localStorage.setItem("users", JSON.stringify(this.state))

    }



    render() {
        return (
            <div>
                <Form
                    styleForm={ "form" }>
                    <h1>Form</h1>
                    <NewInput
                        label={ "Name" }
                        styleNewInput={ "newinput" }
                        callbackInput={ this.inputName }
                        value={ "text" }
                    />
                    { !this.state.edit && <Button
                        label={ "Submit" }
                        styleCss={ "btn" }
                        callBackButton={ this.handleForm }
                    /> }

                </Form>

                { <div>Name: { this.state.users.map((el) => {
                    return (
                        <div>
                            { el.name }
                            { <Button
                                label={ "Edit" }
                                styleCss={ "btn" }
                                callBackButton={ this.toggle }
                            /> }
                            { this.state.isEdit &&
                                <div>
                                    { el.name }
                                    <NewInput
                                        label={ "Edit name" }
                                        styleNewInput={ "newinput" }
                                        callbackInput={ this.inputEditName }
                                    />
                                    <Button
                                        label={ "modify" }
                                        styleCss={ "btn" }
                                        callBackButton={ this.editName(el.name) }
                                    />
                                </div>




                            }
                        </div>
                    )
                }) }</div> }
            </div>
        )
    }
}

export default Prova