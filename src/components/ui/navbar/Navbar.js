import React from 'react'
import { FaReact, FaTimes } from "react-icons/fa"
import { HiMenu } from "react-icons/hi"
import { menuData } from '../../../utils/menuData'
import "./navbar.css"

import { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggle: false
        }
    }



    handleClick = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    mapMenuList = (data) => {
        return (
            <li key={ data.id }>
                <Link to={ data.link } state={ data.obj }
                    className='nav-links'>
                    <i>
                        { data.icon }
                    </i>
                    { data.title }
                </Link>
            </li>
        )
    }


    render() {
        return (
            <div className='container__navbar'>
                <nav className='navbar__items'>
                    <Link className='no-text-decoration'
                        to={ "/" }>
                        <h1 className='logo'>
                            React
                            <i className='fa-react'>
                                <FaReact />
                            </i>
                        </h1>
                    </Link>

                    <div
                        onClick={ this.handleClick }
                        className='menu__icons'>
                        {
                            this.state.toggle ?
                                <i>
                                    <FaTimes />
                                </i>
                                :
                                <i>
                                    <HiMenu />
                                </i>
                        }
                    </div>

                    <ul className={ this.state.toggle ? "navbar__menu active" : "navbar__menu" }>
                        { menuData.map(this.mapMenuList) }
                    </ul>
                </nav>

            </div>

        )
    }
}

export default Navbar