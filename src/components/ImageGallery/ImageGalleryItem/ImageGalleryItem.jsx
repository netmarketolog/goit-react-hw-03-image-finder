import { Component } from 'react';
import { Modal } from './Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { webformatURL, largeImageURL, alt } = this.props;
    return (
    <>
    <div onClick={this.toggleModal}>
          <img src={webformatURL} alt={alt} />
        </div>
      {this.state.showModal && <Modal
        largeImageURL={largeImageURL}
        alt={alt}
        onClose={this.toggleModal}/>}
    </>
    )
  }
}
