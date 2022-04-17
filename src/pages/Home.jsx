import { graphql } from 'react-apollo';
import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import { getCategories } from '../queries/queries';
import Logo from '../assets/ui/logo-ui.svg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: null,
            loading: true,
            selected: this.props.selected,

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

        if(prevState.selected!==this.state.selected) {
            this.forceUpdate();
        }
    }
    render() {
        return (
            <div style={{height:'2390px'}}>
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
                        ></NavBar>
                        <h2 className='make-some-margin'>
                            {this.state.categories[this.state.selected].name}
                        </h2>
                        <div className='product-grid'>
                            {this.state.categories[this.state.selected].products.map((product) => {
                                return (
                                    <ProductCard
                                        name={product.name}
                                        cover={product.gallery}
                                        inStock={product.inStock}
                                        price={product.prices[0]}
                                    />
                                );
                            })}
                        </div>
                        
                    </div>
                )}
            </div>
        );
    }
}

export default graphql(getCategories)(Home);
