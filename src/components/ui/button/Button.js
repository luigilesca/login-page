import React from 'react';
import PropTypes from 'prop-types';
import './button.css';



function Button(props) {
    function callback(e) {
        props.callBackButton(e);
    }

    return (
        <div
            initial={ props.initial }
            className={ props.styleCss }
            onClick={ callback }
            value={ props.text }
        >
            <div className={ props.styleIconContainer }>
                <span>
                    { props.icon }
                </span>
                { props.label }
            </div>
        </div>
    );
}

Button.defaultProps = {
    styleCss: "default-btn",
    label: "label",
    callBackButton: "",
    icon: "",
}

Button.propTypes = {
    styleCss: PropTypes.string,
    label: PropTypes.string
}

export default Button;


