import { useEffect, useState } from "react";
import Header from "../components/Header";
import ImageCard from "../components/ImageCard";
import Search from "../components/Search";
import { useLoaderData } from "react-router-dom";
import { ReactSortable } from "react-sortablejs";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Homepage = () => {
  const images = useLoaderData();

  const [loadImages, setLoadImages] = useState(images.hits);
  const [disable, setDisable] = useState();

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setDisable(false);
      if (!user) setDisable(true);
    });
  }, [auth]);

  return (
    <>
      <header className="relative flex items-center justify-between bg-[#F5F9FC] py-2 px-2 lg:px-8">
        <Header />
      </header>

      <main className="mb-24">
        <Search />

        <section className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mt-8 px-4 lg:px-24 w-full">
          <ReactSortable
            list={loadImages}
            setList={setLoadImages}
            disabled={disable}
            // draggable="item"
          >
            {/* <ul className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mt-8 px-4 lg:px-24 w-full"> */}
            {loadImages.slice(0, 15).map((image) => (
              <ImageCard
                key={image.id}
                image={image.webformatURL}
                id={image.id}
                title={image.tags}
              />
            ))}
            {/* </ul> */}
          </ReactSortable>
        </section>
      </main>
    </>
  );
};

export default Homepage;
