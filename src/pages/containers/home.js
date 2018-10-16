import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import Modal from '../../widgets/containers/modal';
import ModalContent from '../../widgets/components/modal-content';
import HandleError from '../../error/container/handle-error';
import Video from '../../players/containers/video-player'

class Home extends Component {

  state = {
    modalVisible: false,
  }

  handleOpenModal = () =>{
    this.setState({
      modalVisible:true,
    })
  }

  handleCloseModalClick = (event) => {
    this.setState({
      modalVisible: false,
    })
  }

  render() {
   
    return (
      <HandleError>
      <HomeLayout>
        <Related />
        <Video/>
        <Categories categories={this.props.data.categories} handleOpenModal={this.handleOpenModal} />
        {
          this.state.modalVisible &&

          <Modal>
            <ModalContent
              handleClick={this.handleCloseModalClick}
            >
            </ModalContent>
          </Modal>
        }
      </HomeLayout>
      </HandleError>
    )
  }
}

export default Home