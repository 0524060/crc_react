import { useEffect } from "react"
import PropTypes from "prop-types"
import Poptrox from "poptrox" // Assumes you have a React-compatible poptrox library or implementation


const Gallery = ({ images }) => {
  useEffect(() => {
    Poptrox({
      selector: ".work-item a.image",
      usePopupCaption: true,
      usePopupDefaultStyling: false,
      usePopupEasyClose: false,
      usePopupNav: true,
    })
  }, [])

  return (
    <section id="two">
      {images.map((image, index) => (
        <div key={index} className="work-item">
          <a href={image.src} className="image">
            <img src={image.thumbnail} alt={image.alt} />
          </a>
          <h3>{image.caption}</h3>
        </div>
      ))}
    </section>
  )
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Gallery
