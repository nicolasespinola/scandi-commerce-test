import { graphql } from 'react-apollo';
import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import ProductSection from '../components/ProductSection';
import { getCategories } from '../queries/queries';
import Logo from '../assets/ui/logo-ui.svg';

const params = new URL(document.location).searchParams;
const name = params.get('id');

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: null,
            loading: true,
            product: null,
            id: name,
        };
    }
    componentWillMount() {
        const oneSecond = 2000;
        setInterval(() => {
            this.setState({ loading: false });
        }, oneSecond);
    }

    componentDidUpdate(prevProp, prevState) {
        if (prevProp.data.loading !== this.props.data.loading) {
            this.setState({ categories: this.props.data.categories });
            this.forceUpdate();
        }

        if (prevState.selected !== this.state.selected) {
            this.forceUpdate();
        }
    }

    render() {
        return (
            <div>
                {this.state.loading ? (
                    <div className="loader">
                        <img src={Logo} className="pulse" alt="Loading icon" />
                        <div style={{ height: '5px' }} />
                        <span className="label">Loading</span>
                    </div>
                ) : (
                    <div>
                        <NavBar
                            categories={this.state.categories}
                            selected={this.state.selected}
                        />
                        <ProductSection id={this.state.id} />
                    </div>
                )}
            </div>

            // {<div>
            //     {!this.state.loading ? (
            //         <div style={{ display: 'flex' }}>
            //             <div>
            //                 {this.props.gallery.map((img, index) => {
            //                     return (
            //                         <div>
            //                             <img
            //                                 src={img}
            //                                 alt={`image no. ${index}`}
            //                                 width="175px"
            //                                 height="86px"
            //                             />
            //                         </div>
            //                     );
            //                 })}
            //             </div>
            //         </div>
            //     ) : (
            //         <div className="loader">
            //             <img src={Logo} className="pulse" alt="Loading icon" />
            //             <div style={{ height: '5px' }} />
            //             <span className="label">Loading</span>
            //         </div>
            //     )}
            // </div>}
        );
    }
}
export default graphql(getCategories)(Product);
