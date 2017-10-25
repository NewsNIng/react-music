import React from 'react';
import './list.less';

class ItemBox extends React.Component {
    

    render() {
        return (
            <ul className='box'>
                {this.props.items.map((item, index) => (
                    <li key={item.id} onDoubleClick={this.props.doubleClick.bind(null,index)}>{index + 1 + ": " + item.name}</li>
                ))}
            </ul>
        );
    }
}


class List extends React.Component {
    constructor(porps) {
        super(porps);
        this.state = {items: []};
    }


    render() {
        return (
            <div className='components-body-list'>
                <h3>List</h3>
                <ItemBox items={this.props.items} doubleClick={this.props.onDoubleClick}/>
            </div>
        );
    }
}

export default List;

