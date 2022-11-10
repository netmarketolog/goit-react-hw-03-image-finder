import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";


export default function ImageGallery({ data }) {
  return (
    <div>
      {data.map(item => (
        <ImageGalleryItem
          key={item.id}
          webformatURL={item.webformatURL}
          largeImageURL={item.largeImageURL}
          alt={item.tags}
        />
      ))}
    </div>
  );
}