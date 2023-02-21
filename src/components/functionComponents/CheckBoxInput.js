import React from 'react'
import PropTypes from 'prop-types';
import "../ui/input/newinput.css"

function CheckBoxInput(props) {

    return (
        <div
            className={ props.styleNewInput }>

            <div className='wrapper'>
                <label>
                    <input
                        type={ props.typeInput }
                    />

                    <span className='border'></span>
                    <span className='label-input'>
                        { props.label }
                    </span>

                </label>
            </div>
        </div>
    )
}

CheckBoxInput.defaultProps = {
    styleNewInput: "",
    styleLabel: "",
    typeInput: "checkbox",
}

CheckBoxInput.propTypes = {
    styleNewInput: PropTypes.string,
    styleLabel: PropTypes.string,
    type: PropTypes.string,
}

export default CheckBoxInput