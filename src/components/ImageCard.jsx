// import { GridItem } from "react-grid-dnd";

/* eslint-disable react/prop-types */
const ImageCard = ({ image, title }) => {
  return (
    // <GridItem>
    <div className="lg:h-80 bg-[#F5F9FC] rounded-xl space-y-3 lg:space-y-5 m-2">
      <img
        src={image}
        alt={title}
        className="w-full h-60 lg:h-40 rounded-t-lg"
      />

      <p className=" text-center font-medium capitalize h-16">{title}</p>
      <div>
        <h4>Size</h4>
        <p>256mb</p>
      </div>
    </div>
    // </GridItem>
  );
};

export default ImageCard;
