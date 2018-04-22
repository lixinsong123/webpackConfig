
import React from "react";
import Loadable from 'react-loadable';
function MyLoadingComponent({ error,pastDelay  }) {
  if (error) {
      console.log(error);
    return <div>Error!</div>;
  } else if(pastDelay) {
    return <div>Loading...</div>;
  } else{
      return null;
  }
}
  
  const LoadableAnotherComponent = Loadable({
    loader: () => import('./bar'),
    loading: MyLoadingComponent,
    //默认式200ms-----只有在真正用到的组件花了比设定的 delay更长的时间加载的时候，它的值才会是 true
    delay: 300
  });
  class MyComponent extends React.Component {
    render() {
      return <LoadableAnotherComponent/>;
    }
  }
  

 export default MyComponent;




