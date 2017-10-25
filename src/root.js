import React, {Component} from 'react';
import Header from './components/header';

import Body from './components/body/body';
import Footer from './components/footer/footer';
import "./root.css";


class Root extends Component{

    constructor(props){
        super(props);
    }

    

    render(){
        return (
            <div className='warp'>
                <Header />
                <Body />
                <Footer />
            </div>
          
            
        ); 
    }
}

export default Root;