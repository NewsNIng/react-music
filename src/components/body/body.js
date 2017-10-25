import React from 'react';
import './body.less';

import List from './list';

import Play from './play';


import Progress from './progress';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexMusic: {
                img: "",
                src: "",
                author: "",
                name: "",
                id: -1,
            },
            items: [],
            index: 0,
            type: 'go'
        };

        this.onDoubleClick = this.onDoubleClick.bind(this);
        this.onEnded = this.onEnded.bind(this);
    }

    getListData() {
        return new Promise((re, rj) => {
            let script = document.createElement('script');
            if (script.readyState) {
                script.onreadystatechange = function () {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        re(window.BList);
                    }
                };
            } else {
                script.onload = function () {
                    re(window.BList);
                };
            }
            script.src = "http://www.djye.com/kc/data.js";
            document.body.appendChild(script);
        });
        
    }

    async componentDidMount() {
        
        let list = await this.getListData(),
        urlHeader = "http://zj.djye.com/",
        items = list.map((item) => {
            return {
                img: "http://img.djye.com/sort/ecfe30d68bdccfbcfb148e07cce83c8a.jpg",
                src: urlHeader + item.u,
                author: 'DJ耶耶网',
                name: item.n,
                id: item.s
            }
        }),
        index = 0,// parseInt(items.length * Math.random()),
        indexMusic = items[index];
        this.setState({
            indexMusic,
            index,
            items
        });
    }

    onEnded(){
        this[this.state.type + 'Next']();
    }

    // 顺序下一曲
    goNext(){
        let {index, items} = this.state;
        let newIndex = index + 1;
        if(newIndex >= items.length){
            newIndex = 0;
        }
        this.setState({
            indexMusic: items[newIndex],
            index: newIndex
        });
    }

    // 随机下一曲
    randomNext(){
        let {index, items} = this.state,
        newIndex = (function getNewIndex(oldIndex, len, n){
            let newIndex = parseInt(len * Math.random());
            return (newIndex === oldIndex && n > 0 ) ? getNewIndex(oldIndex, len, n - 1): newIndex;
        }(index, items.length, 3));
        this.setState({
            indexMusic: items[newIndex],
            index: newIndex
        });
    }

    onDoubleClick(index){
        this.setState(_state => ({
           index,
           indexMusic: _state.items[index] 
        }));
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className='components-body'>
                <Play 
                    img={this.state.indexMusic.img} 
                    src={this.state.indexMusic.src} 
                    author={this.state.indexMusic.author} 
                    name={this.state.indexMusic.name}
                    onEnded={this.onEnded} />
                    
                <List items={this.state.items} onDoubleClick={this.onDoubleClick} />
            </div>
        );
    }
}

export default Body;