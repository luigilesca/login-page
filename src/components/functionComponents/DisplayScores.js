import React from 'react'
import PropTypes from 'prop-types';

function DisplayScores(props) {
    return (
        <div className={ props.classNameDisplay }>
            <div className={ props.classNameDisplyItem }>
                <p>CPU:
                    <span>
                        { props.winsCpu }
                    </span>
                </p>
                <p>USER:
                    <span>
                        { props.winsUser }
                    </span>
                </p>
            </div>
        </div>

    )
}

DisplayScores.defaultProps = {
    winsCpu: 0,
    winsuser: 0,
    classNameDisplay: "container__score"
}

DisplayScores.propTypes = {
    winsCpu: PropTypes.number,
    winsUser: PropTypes.number,
    classNameDisplay: PropTypes.string
}


export default DisplayScores