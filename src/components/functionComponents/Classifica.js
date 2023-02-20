import React from 'react'
import PropTypes from 'prop-types';
import { motion } from "framer-motion"
import { FaWineGlass } from "react-icons/fa"


function Classifica(props) {
    return (
        <motion.div
            whileHover={ props.whileHover }
            initial={ props.initial }
            animate={ props.animate }
            transition={ props.transition }
            className={ props.styleClassifica }
        >

            <div className='classifica__users'>
                <div className='classifica__card'>
                    <span>
                        <FaWineGlass />
                    </span>
                    <p>N.{ props.index }</p>
                    <h3> { props.name } </h3>
                    <div className='calssifica__pti'>
                        <h3>Pti:
                            <span>
                                { props.result }
                            </span>
                        </h3>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

Classifica.defaultProps = {
    styleClassifica: "classifica",
    name: "name",
    index: 0
}

Classifica.propTypes = {
    styleNewInput: PropTypes.string,
    index: PropTypes.number,
    name: PropTypes.string
}

export default Classifica