import React from 'react'
import PropTypes from 'prop-types';
import { motion } from "framer-motion"


function WelcomeTitle(props) {
    return (
        <motion.div
            initial={ props.initial }
            animate={ props.animate }
            className={ props.classTitle }
            transition={ props.animate }
        >
            <h1>{ props.title }</h1>
            <h3>{ props.subTitle }</h3>
        </motion.div>
    )
}

WelcomeTitle.defaultProps = {
    classTitle: "",
    title: "title",
    subTitle: ""
}

WelcomeTitle.propTypes = {
    classTitle: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string
}

export default WelcomeTitle