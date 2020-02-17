import React, { Component } from 'react';
import Item from './Item';
export default class Body extends Component {

    render() {
        console.log(this.props.resultado);
        const searched_style = {
            color: 'red'
        };
        return (
            <main role="main" className="container" id="main_body">
                <h1 className="mt-5">Item searcher</h1>
                <div>
                    {
                        this.props.item ? <p>Your item to search is:<span style={searched_style}> {this.props.item}</span></p> : <p>Please, enter an item to search.</p>
                    }

                </div>
                <div className="container">
                    <div className="row">
                        {
                            this.props.resultado.map(e => <Item key={e.id} item={e} />)
                        }
                    </div>
                </div>

            </main>
        );
    }
}
