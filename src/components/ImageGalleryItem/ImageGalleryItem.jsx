import React from 'react';
import PropTypes from "prop-types";
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ userImageURL, tags, id }) {
  return (
    <div id={id}>
      <img
        className={s.ImageGalleryItemImage}
        src={userImageURL}
        alt={tags}
      />
    </div>
  );
}
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  userImageURL: PropTypes.string,
  tags: PropTypes.string,
};