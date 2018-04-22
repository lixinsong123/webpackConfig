
import React from "react";
import Loadable from 'react-loadable';
function MyLoadingComponent({ error }) {
  if (error) {
      console.log(error);
    return <div>Error!</div>;
  } else {
    return <div>Loading...</div>;
  }
}
  
  const LoadableAnotherComponent = Loadable({
    loader: () => import('./bar'),
    loading: MyLoadingComponent
  });
  console.log(LoadableAnotherComponent.preload);
  class MyComponent extends React.Component {
    render() {
      return <LoadableAnotherComponent/>;
    }
  }
  

 export default List;




