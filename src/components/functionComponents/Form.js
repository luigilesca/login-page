import React from 'react'
import "./form.css"

function Form(props) {
    return (
        <div className={ props.styleForm }>
            { props.children }
        </div>
    )
}

Form.defaultProps = {
    styleForm: "form"
}

export default Form