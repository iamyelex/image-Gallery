import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";
import Header from "../components/Header";
import ImageCard from "../components/ImageCard";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const SearchResult = () => {
  const images = useLoaderData();
  //   const navigate = useNavigate();

  const [loadImages, setLoadImages] = useState(images.hits);

  const handlerOnChange = function (sourceId, sourceIndex, targetIndex) {
    const nextState = swap(loadImages, sourceIndex, targetIndex);
    setLoadImages(nextState);
  };

  return (
    <>
      <header className="relative flex items-center justify-between bg-[#F5F9FC] py-2 px-2 lg:px-8">
        <Header />
      </header>

      <main className="mb-24">
        <div className="flex items-center justify-between px-4 lg:px-24 my-4">
          <p className="text-xl font-bold underline">Your Search Results</p>

          {/* <button
            className="font-bold border px-4 rounded-lg hover:text-white hover:bg-black"
            onClick={navigate(-1)}
          >
            Back
          </button> */}
        </div>

        <section className=" px-4 lg:px-24 ">
          <GridContextProvider onChange={handlerOnChange}>
            <GridDropZone
              id="images"
              boxesPerRow={5}
              rowHeight={350}
              style={{ height: 280 * Math.ceil(loadImages.length / 5) }}
            >
              {/* <ul className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mt-8 px-4 lg:px-24"> */}
              {loadImages.slice(0, 15).map((image) => (
                <GridItem key={image.id} className="grid w-full">
                  <ImageCard
                    // key={image.id}
                    image={image.webformatURL}
                    id={image.id}
                    title={image.tags}
                  />
                </GridItem>
              ))}
              {/* </ul> */}
            </GridDropZone>
          </GridContextProvider>
        </section>
      </main>
    </>
  );
};

export default SearchResult;
