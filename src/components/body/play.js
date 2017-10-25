import React from 'react';
import './play.less';


class Avatar extends React.Component {
    render() {
        return (
            <div className="avatar">
                <img src={this.props.src} />
            </div>
        );
    }
}




class Pro extends React.Component {
    render() {
        return (
            <div className="pro" style={{ width: this.props.pro + "%" }}></div>
        );
    }
}
class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <div>L</div>
                <div>S</div>
                <div>R</div>
            </div>
        );
    }
}
class Control extends React.Component {
    render() {
        return (
            <div className="control">
                <div className='name'>{this.props.name}</div>
                <div className='author'>{this.props.author}</div>
                <Menu />
                <Pro pro={this.props.pro} />
            </div>
        );
    }
}





class Play extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.state = {
            progress: 0
        };
        this.timeUpdate = this.timeUpdate.bind(this);
        this.onEnded = this.onEnded.bind(this);
    }


    
    componentDidMount() {
        this.player = this.refs.player;
        // const AudioContext = window.AudioContext || window.webkitAudioContext;
        // const context = new AudioContext();

        // const audioSrc = context.createMediaElementSource(this.player);
        // this.analyser = context.createAnalyser();

        // audioSrc.connect(this.analyser);

        // this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);

    }




    timeUpdate() {
        let duration = this.duration;
        if (!duration || duration !== duration) {
            duration = this.player.duration;
            this.duration = duration;
        }
        let currentTime = this.player.currentTime,
            progress = currentTime / duration * 100;
        this.setState(_state => ({
            progress
        }));
        //console.log(this.analyser.getByteFrequencyData(this.frequencyData));
        //crossOrigin="anonymous"
        
    }
    onEnded(){
        this.duration = 0;
        this.props.onEnded();
    }



    render() {
        return (
            <div className='components-play'>
                <Avatar src={this.props.img} />
                <Control name={this.props.name} author={this.props.author} pro={this.state.progress} />
                <audio  ref="player"  src={this.props.src} autoPlay onTimeUpdate={this.timeUpdate} onEnded={this.onEnded}></audio>
            </div>
        );
    }
}

export default Play;