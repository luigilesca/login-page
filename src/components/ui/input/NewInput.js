import React from 'react'
import PropTypes from 'prop-types';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import "./newinput.css"

function NewInput(props) {

    function callback(e) {
        props.callbackInput(e)
    }

    function callbackClick(e) {
        props.callbackInputClick(e)
    }

    function callbackIcon(e) {
        props.callbackIconClick(e)
    }

    return (
        <div
            className={ props.styleNewInput }>

            <div className='wrapper'>
                <label>
                    <input
                        required

                        type={ props.typeInput }
                        name={ props.nameInput }
                        value={ props.valueInput }
                        id={ props.idInput }
                        min={ props.minInput }
                        max={ props.maxInput }
                        placeholder={ props.placeholderInput }
                        onChange={ callback }
                        onClick={ callbackClick }
                    />
                    <span className='border'></span>
                    <span className='label-input'>
                        { props.label }
                    </span>

                </label>
            </div>

            { props.styleIcon &&
                <span className={ props.styleIcon }>
                    <div className='icon' onClick={ callbackIcon }>
                        { props.typeIcon ?
                            <AiOutlineEye /> : <AiOutlineEyeInvisible /> }
                    </div>
                </span> }


        </div>
    )
}

NewInput.defaultProps = {
    styleNewInput: "",
    styleLabel: "",
    label: "",
    typeInput: "text",
    id: "id-name",
    min: -100,
    max: 100,
    placeholderInput: "",
}

NewInput.propTypes = {
    styleNewInput: PropTypes.string,
    styleLabel: PropTypes.string,
    callbackInput: PropTypes.func.isRequired,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
}

export default NewInput