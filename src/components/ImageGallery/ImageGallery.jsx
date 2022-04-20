import React from 'react';
import ImageGalleryItem from "../ImageGalleryItem";
import s from './ImageGallery.module.css';
import PropTypes from "prop-types";

function ImageGallery({ pictures, open }) {
  return (
    <>
      <ul className={s.ImageGallery}>
        {pictures.map(({ webformatURL, tags, id }) => {
          return (
            <li key={id} className={s.ImageGalleryItem} onClick={open}>
              <ImageGalleryItem userImageURL={webformatURL} tags={tags} id={id} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  id: PropTypes.number,
};