import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import fetchValue from '../Api/Api';
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import Button from './Button/Button';
export class App extends Component {
  state = {
    inputValue: '',
    page: 1,
    status: 'idle',
    images: [],
    error: null,
    shpowModal: false,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { inputValue, page } = this.state;
    if (prevState.inputValue !== inputValue || prevState.page !== page) {
      this.setState({ status: 'loading' });

      fetchValue(inputValue, page)
        .then(res => {
          this.setState(prevState => ({
            images: [...prevState.images, ...res.hits],
            status: 'resolved',
          }));
        })
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
    }
  };

  handleFormSubmit = inputValue => {
    this.setState({ inputValue: inputValue, images: [], page: 1 });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    const { images, status } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images && <ImageGallery data={images} />}
        {status === 'loading' && <Loader />}
        {images.length > 12 && status === 'resolved' && (
          <Button onClick={this.loadMore} />
        )}
      </div>
    );
  }
}
