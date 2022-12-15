import Button from 'components/Button/Button'
import PropTypes from 'prop-types'
import { Audio } from 'react-loader-spinner'
import React, { Component } from 'react'
import Modal from './Modal/Modal'
export class ImageGallery extends Component {
    state ={
        img: [],
        page: 1,
        loading: false,
        isModal: '',
    }
    handelClick=()=>{
        this.setState({page: this.state.page + 1 })
      }
      componentDidUpdate(prevProps, prevState){
        const firstName = prevProps.name;
        const secondName = this.props.name;
        const page = this.state.page;
        const pageProp = prevState.page;
        if (firstName !== secondName || page !== pageProp) {
            this.setState({loading: true});
            const baseUrl = `https://pixabay.com/api/?q=${secondName}&page=${page}&key=27491785-4ed714c8d697aeb5a6480b366&image_type=photo&orientation=horizontal&per_page=12`;
            fetch(baseUrl).then(response =>{ 
                if (!response.ok) {
                throw new Error(response.status);
            }
                return response.json();
        }).then(({hits})=>{
        if (firstName === secondName) {
          return  this.setState(prev=>({img:[...prev.img, ...hits]}));
        }
        return this.setState({img:[...hits]});
    }).catch((err)=>console.log(err)).finally(()=> this.setState({loading: false}))
        }
      }
      togleModal=(src)=>{
        this.setState({isModal: src?src:''})
      }
  render() {
    const{img,isModal,loading} = this.state;
    return (
        <main>
            {loading && 
            <div style={{position: 'absolute',
             top:'50%',
             left:'50%',
              transform: 'translate(-50%,-50%)'
              }}>
              <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
                />  
            </div>
                
            }
             <ul className="ImageGallery">
            {img.length?img.map((m,i)=>(
                <li className='ImageGalleryItem' key={m.id}>
                    <img className='ImageGalleryItem-image' src={m.webformatURL} alt={m.tags} onClick={()=>this.togleModal(m.largeImageURL)}/>
                </li>
            )):""}
      </ul>
      {img.length?<Button click={this.handelClick}/>:""}
      {isModal && <Modal bigImage={isModal} togle={this.togleModal}/>}
        </main>
       
    )
  }
}
ImageGallery.propTypes={
  name: PropTypes.string.isRequired
}
export default ImageGallery;