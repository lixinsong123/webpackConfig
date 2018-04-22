
import React from "react";
import ReactDOM from "react-dom";


import LoadableBar from "./print"
class MyComponent extends React.Component {
   constructor(arg){
        super(arg);
        this.state=({ showBar: false});
   }
  
    onClick(){
      this.setState({ showBar: true });
    }
  
    onMouseOver(){
        //提前加载组件
        /**
         * const LoadableComponent = Loadable({...});
            LoadableComponent.preload();
         */
        //LoadableBar.preload();
    }
  
    render() {
      return (
        <div>
          <button
            onClick={this.onClick.bind(this)}
            onMouseOver={this.onMouseOver}
         >
            Show Bar
          </button>
          {this.state.showBar && <LoadableBar/>}
        </div>
      )
    }
  }

ReactDOM.render(
    <div>
        <MyComponent />
    </div>,
    document.getElementById("root")
);
