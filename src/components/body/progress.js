import React, { Component } from 'react';


class Progress extends Component{
    render(){
        return (
            <div className="components-progress">
                { this.props.progress } s
            </div>
        );
    }
}

export default Progress;