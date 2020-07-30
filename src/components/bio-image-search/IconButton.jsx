import React from 'react';

class IconButton extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
        isCardView: false,
      }
    } 
    
    render() {
      return (
        <a className="outline" onClick={()=>this.setState({ isCardView: !this.state.isCardView })}>
          { this.state.isCardView
            ?   <img src="/img/unselected_circle.svg" width="40px" alt="" />
            :     <img src="/img/quickview.svg" width="40px" alt="" />
          }
         
        </a>
      );
    }
    
  }

  export default IconButton