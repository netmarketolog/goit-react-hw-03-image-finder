export default function fetchValue(inputValue, page) {
  const PARAMS = `q=${inputValue}&key=29904639-b03e054f5aedc60df22d30ccb&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;
  const URL = `https://pixabay.com/api/?${PARAMS}`;

  return fetch(URL).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error());
  });
}

// import { Component } from 'react';

// export class Api extends Component {
//   state = {
//     q: null,
//   };
//   async componentDidMount() {
//     fetch(
//       'https://pixabay.com/api/?q=cat&key=29904639-b03e054f5aedc60df22d30ccb'
//     )
  //       .then(res => res.json())
  //       .then(q => this.setState({ q }));
  //   }
  //   render() {
  //     return (
  //       <div style={{ maxWidth: 320, margin: 'o auto', padding: 20 }}>
  //         {this.state.q && <div>Запрос</div>}
  //       </div>
  //     );
  //   }
  // }
