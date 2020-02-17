import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className="items">
                <img src={item.previewURL} alt='test' />
            </div>
        );
    }
};
