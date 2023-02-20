import React from 'react'
import PropTypes from 'prop-types';
import { motion } from "framer-motion"



function ContainerButtons(props) {
    return (
        <motion.div
            animate={ props.animate }
            initial={ props.initial }
            transition={ props.transition }
            duration={ props.duration }
            className={ props.containerButtonsStyle }>
            { props.children }
        </motion.div>

    )
}

ContainerButtons.defaultProps = {
    containerButtonsStyle: ""
}

ContainerButtons.propTypes = {
    containerButtonsStyle: PropTypes.string
}


export default ContainerButtons