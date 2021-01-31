import React from "react";
import PropTypes from "prop-types";
import styles from "./imageGalleryItem.module.css";

function ImageGalleryItem({ images, onClick }) {
  return (
    <>
      {images.map((image) => {
        const { id, webformatURL, largeImageURL } = image;
        return (
          <li className={styles.ImageGalleryItem} key={id}>
            <img
              className={styles.ImageGalleryItem - image}
              src={webformatURL}
              alt=""
              onClick={() => onClick(largeImageURL)}
            />
          </li>
        );
      })}
    </>
  );
}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(Object),
  byClick: PropTypes.func,
};

export default ImageGalleryItem;
