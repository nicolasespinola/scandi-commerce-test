import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getProduct } from '../queries/queries';

class productSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPic: 0,
        };
    }
    displayProduct() {
        const { product } = this.props.data;
        console.log(product);
        if (product) {
            return (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '100vh',
                    }}
                >
                    <div className="product-images">
                        {product.gallery.map((picture, index) => {
                            return index === this.state.selectedPic ? (
                                <div
                                    style={{
                                        overflow: 'hidden',
                                        paddingBottom: '5px',
                                        paddingLeft: '5px',
                                    }}
                                >
                                    <img
                                        src={picture}
                                        alt={`image no. ${index + 1}`}
                                        width="80px"
                                        height="80px"
                                        style={{
                                            objectFit: 'cover',
                                            borderStyle: 'solid',
                                            borderWidth: '2px',
                                            borderColor: '#5ECE7B',
                                        }}
                                    />
                                </div>
                            ) : (
                                <div
                                    style={{
                                        overflow: 'hidden',
                                        paddingBottom: '5px',
                                        paddingLeft: '5px',
                                    }}
                                    onClick={() => {
                                        this.setState({ selectedPic: index });
                                    }}
                                >
                                    <img
                                        src={picture}
                                        alt={`image no. ${index + 1}`}
                                        width="80px"
                                        height="80px"
                                        style={{
                                            objectFit: 'cover',
                                            transition: '300ms',
                                        }}
                                        className="image-hover"
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        <img
                            src={product.gallery[this.state.selectedPic]}
                            className="product-preview"
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            height: '100%',
                        }}
                    >
                        <h1>{product.name}</h1>
                        <h3>{product.category}</h3>
                        {product.attributes.length > 0
                            ? product.attributes.map((attrib) => {
                                  return (
                                      <div>
                                          <h4 className="product-span">
                                              {attrib.name}
                                          </h4>
                                          {attrib.type === 'text' ? (
                                              <div className="product-attributes">
                                                  {attrib.items.map((item) => {
                                                      return (
                                                          <div className="product-attribute-text">
                                                              {
                                                                  item.displayValue
                                                              }
                                                          </div>
                                                      );
                                                  })}
                                              </div>
                                          ) : (
                                              <div className="product-attributes">
                                                  {attrib.items.map((item) => {
                                                      return (
                                                          <div className="product-attribute-swatch" style={{backgroundColor:item.value}}>
                                                          </div>
                                                      );
                                                  })}
                                              </div>
                                          )}
                                      </div>
                                  );
                              })
                            : null}
                    </div>
                </div>
            );
        }
    }
    render() {
        return <div className="make-some-margin">{this.displayProduct()}</div>;
    }
}

export default graphql(getProduct, {
    options: (props) => {
        return {
            variables: {
                id: props.id,
            },
        };
    },
})(productSection);
