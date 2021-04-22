import React, { Component } from 'react';
import ReactPlayer from 'react-player/youtube'

class Overlay extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: props,
         active: false
      };
   }


   render() {
      

      return (
         <div className={this.props.class+' Overlay'}>
            <div className="CloseBtn" onClick={() => { this.props.close() }}>
               <i className="fa fa-window-close"></i>
               
               
            </div>
            <div className="VidPlayer">
                  <ReactPlayer controls='true' width='100%' height="100%" url={this.props.url} />
            </div>
         </div>
      );
   }
}

export default Overlay;