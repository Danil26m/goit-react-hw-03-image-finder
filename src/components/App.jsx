import './styles.css'
import { Component } from "react";
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';


class App extends Component{
  state={
    filter: ''
  }
  handelForm=(event)=>{
    event.preventDefault();
    const filter = event.target.lastChild.value;
    this.setState({ filter });
  }
 
  
render(){
  return(
    <div className='App'>
      <Searchbar submit={this.handelForm}/>
      <ImageGallery name={this.state.filter} />
    </div>
  );
}
}
export default App;