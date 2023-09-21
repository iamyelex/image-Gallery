export const loadImages = async function () {
  const res = await fetch(
    "https://pixabay.com/api/?key=39555955-2d3914822d005a1315614c342"
  );
  const data = await res.json();
  return data;
};

export const loadSearch = async function ({ params }) {
  const res = await fetch(
    `https://pixabay.com/api/?key=39555955-2d3914822d005a1315614c342&q=${params.id}`
  );
  const data = await res.json();
  return data;
};
