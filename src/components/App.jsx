import './styles.css'
import { Component } from "react";

import ImageGallery from './ImageGallery/ImageGallery';


class App extends Component{

  
 
  // handelClick=()=>{
  //   this.setState({page: this.state.page + 1 })
  // }
render(){
  return(
    <div className='App'>
     <ImageGallery  />
    </div>
  );
}
}
export default App;