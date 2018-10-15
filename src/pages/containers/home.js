import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import Modal from '../../widgets/containers/modal';
import ModalContent from '../../widgets/components/modal-content';

class Home extends Component {

  state = {
    modalVisible: true,
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
      <HomeLayout>
        <Related />
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
    )
  }
}

export default Home