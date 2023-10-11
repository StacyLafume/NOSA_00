import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../AOTM_gallery.css"


const ArtistOfTheMonthImageGallery = ({images}) => {

  const formattedImages = images.map((el) => {
    return {"original": el["image"], "thumbnail": el["image"]}
  })
  console.log("Images", formattedImages)

  return <ImageGallery style={{width:"95vw", margin: "2rem", }} items={formattedImages} />;
}

export default ArtistOfTheMonthImageGallery