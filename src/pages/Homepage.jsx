import { useState } from "react";
import Header from "../components/Header";
import ImageCard from "../components/ImageCard";
import Search from "../components/Search";
import { useLoaderData } from "react-router-dom";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";

const Homepage = () => {
  const images = useLoaderData();

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
        <Search />

        <section className=" mt-8 px-4 lg:px-24 ">
          <GridContextProvider onChange={handlerOnChange}>
            <GridDropZone
              id="images"
              boxesPerRow={1}
              rowHeight={350}
              style={{ height: 280 * Math.ceil(loadImages.length / 5) }}
            >
              {/* <ul className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mt-8 px-4 lg:px-24"> */}
              {loadImages.slice(0, 15).map((image) => (
                <GridItem key={image.id} className="">
                  <div className="w-full h-full">
                    <ImageCard
                      // key={image.id}
                      image={image.webformatURL}
                      id={image.id}
                      title={image.tags}
                    />
                  </div>
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

export default Homepage;
