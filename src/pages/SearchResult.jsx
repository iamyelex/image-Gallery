import Header from "../components/Header";
import ImageCard from "../components/ImageCard";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import Search from "../components/Search";
import { ReactSortable } from "react-sortablejs";

const SearchResult = () => {
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
        <p className="text-lg font-bold underline px-4 lg:px-24 my-4">
          Your Search Results
        </p>
        {/* <Search /> */}

        <section className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 px-4 lg:px-24">
          <ReactSortable
            list={loadImages}
            setList={setLoadImages}
            disabled={disable}
          >
            {loadImages.slice(0, 15).map((image) => (
              //   <ul
              //     key={image.id}
              //     className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 px-4 lg:px-24"
              //   >
              <ImageCard
                key={image.id}
                image={image.webformatURL}
                id={image.id}
                title={image.tags}
              />
              //   </ul>
            ))}
          </ReactSortable>
        </section>
      </main>
    </>
  );
};

export default SearchResult;
