import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../assets/ui/logo-ui.svg';
import Cart from '../assets/ui/cart.svg';
import Dollar from '../assets/ui/dollar-sign.svg';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar-wrapper make-some-margin">
                <div className="navbar-wrapper w-navbar-wrapper">
                    {this.props.categories.map((category, index) => {
                        return (
                            <Link
                                to={`/selected=${index}`}
                                onClick={this.forceUpdate}
                            >
                                <a
                                    className={`${
                                        index !== this.props.selected
                                            ? 'label'
                                            : 'label-active c-primary'
                                    }`}
                                >
                                    {category.name}
                                </a>
                            </Link>
                        );
                    })}
                </div>
                <img src={Logo} alt="logo" />
                <div className="navbar-wrapper w-navbar-wrapper">
                    <div className="w-40p" />
                    <div className="w-40p" />
                    <img
                        src={Dollar}
                        alt="Current currency"
                        className="w-40p"
                    />
                    {JSON.parse(localStorage.getItem('cart')) ? (
                        <div>
                            <div className='cart-bobble c-white'>{JSON.parse(localStorage.getItem('cart')).length}</div>
                            <img src={Cart} alt="My cart" width={'25px'} />
                        </div>
                    ) : (
                        <img src={Cart} alt="My cart" width={'25px'} />
                    )}
                </div>
            </div>
        );
    }
}

export default NavBar;
