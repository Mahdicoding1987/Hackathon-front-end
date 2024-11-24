import { useParams } from "react-router-dom";

const products = [
  {
    _id: "car",
    title: "car",
    description: "test prod's description",
    price: 100,
  },
  {
    _id: "dog",
    title: "dog",
    description: "test prod's description",
    price: 100,
  },
  {
    _id: "cat",
    title: "cat",
    description: "test prod's description",
    price: 100,
  },
  {
    _id: "pig",
    title: "pig",
    description: "test prod's description",
    price: 100,
  },
  {
    _id: "elephant",
    title: "elephant",
    description: "test prod's description",
    price: 100,
  },
  {
    _id: "zebra",
    title: "zebra",
    description: "test prod's description",
    price: 100,
  },
];

const Details = (product) => {
  return (
    <main>
      <h1>
        Hello, you are on the details page for {products[1].title}
        Name:{products[1].title}
        Description:{products[1].description}
        Price:{products[1].price}
      </h1>
      <button>Add to cart</button>
    </main>
  );
};

export default Details;
