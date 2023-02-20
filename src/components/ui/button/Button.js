import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './button.css';
import { motion } from "framer-motion"


function Button(props) {
    function callback(e, param) {
        props.callBackButton(e, param);
    }

    return (
        <motion.div
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
        </motion.div>
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


