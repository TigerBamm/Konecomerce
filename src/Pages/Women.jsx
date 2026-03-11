import React from "react";
import { useNavigate } from "react-router-dom";

export default function Women() {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Banner */}
      <div className="bg-orange-200 rounded-lg p-16 text-center mb-10 mt-10">
        <h1 className="text-6xl font-bold text-orange-500">UP TO 70% OFF</h1>
        <p className="text-xl mt-4 text-orange-500">ON NEW ARRIVALS</p>
      </div>

      {/* Products */}
      <div className="w-full h-full bg-mauve-200 grid grid-cols-4 gap-4 mt-3">
        {Products.map((value) => (
          <div
            key={value.id}
            className="col-span-1 h-150 bg-gray-100 p-4 rounded-[10px] shadow"
          >
            <img
              src={value.image}
              alt="cute"
              className="w-full h-3/4 rounded-[10px] object-cover "
            />
            <div className="h-1/4 w-full p-2 leading-12.5 mt-2">
              <p className="text-start text-bold text-2xl">
                Price: {value.price}
              </p>
              <p className="text-2xl text-start">
                Name: {value.name}
              </p>
              <button
                onClick={() => navigate(`/card-detailwomen/${value.id}`)}
                className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold m-2 rounded"
                type="button"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Products = [
  {
    id: 1,
    name: "Graphic T-Shirt",
    price: "29.99$",
    image:
      "https://i.pinimg.com/1200x/30/7c/62/307c62e7ffb9c4a998c6507d131753bc.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 2,
    name: "Formal Shirt",
    price: "45.99$",
    image:
      "https://i.pinimg.com/1200x/06/53/6e/06536eb339d010899f05798ea6c9c9e4.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 3,
    name: "Summer Shirt",
    price: "39.99$",
    image:
      "https://i.pinimg.com/1200x/94/fd/bc/94fdbcc0feb2e319d81db0043a2c73f9.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 4,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/4c/41/9b/4c419bac490c822fde72fa249cdcf34b.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 5,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/14/e7/1e/14e71e559754b20ed6fd0e65e3e7073e.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 6,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/4c/41/9b/4c419bac490c822fde72fa249cdcf34b.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 7,
    name: "Girl's Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/60/ad/7e/60ad7edc6e39bc205f29af2aafab93d0.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 8,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/90/67/a3/9067a398cd89e3bea5a373c06d45d744.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 9,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/47/96/ba/4796babd867068256977d2e263f4b6fc.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 10,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/ac/10/3f/ac103fce5aaafdc26b50d73eb2a8092a.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 11,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/d2/07/6a/d2076a4ce267bcbfad8695370cd1b746.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 12,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/19/eb/55/19eb55a7e3e52669e2b655cbdcf70522.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 13,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/2d/9f/ae/2d9faed7cb3ed7f835a646c6deac3059.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 14,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/fe/ed/16/feed16872953ac00f627cf9edf82c75d.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 15,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/bd/d2/e7/bdd2e7458969cd21f4d94914366ef80e.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 16,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/14/27/a4/1427a4e7834296b49f085df7bad290b5.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 17,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/a8/4d/14/a84d1408d61906f3251711caaac54685.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 18,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/27/6c/25/276c258b9dd47b3e27d47d65f2eeb19f.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 19,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/98/bf/be/98bfbedfc3acb641af867ffb3cc7b920.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 20,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/ae/cb/38/aecb386c29700fd13c66c29a3cc47875.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 21,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/67/9a/fb/679afb32d14e01c21a0c540e546e09b1.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 22,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/25/3b/d8/253bd81930499334125b3535470c1710.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 23,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/47/0c/38/470c38da50ea957a2469e01c379a300d.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 24,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/f4/d8/07/f4d8070ba179314853037ec1927818f6.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 25,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/d0/28/e5/d028e5d061c364a814202c4c2323ed14.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 26,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/35/83/b0/3583b075bff6cf144f42020c826eb79b.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 27,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/66/fc/5a/66fc5a6cfd5dcccceaa814f4dd0f2fb7.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 28,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/20/9b/12/209b128e7e991d681d3a142338fc9569.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 29,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/4f/76/9a/4f769a236a9ac2f17e12724658140dcf.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 30,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/50/24/12/5024126dec95653432b6ee2e87450575.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 31,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/04/4e/50/044e501d334e932ccdbcc1d52c2aaf0b.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 32,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/25/8b/0a/258b0aedc5dafd260ca276bd37840e77.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 33,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/24/48/29/244829b10674b8931eb485848f3d5235.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 34,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/ac/1a/f7/ac1af7adf57488e0241d52ddb3d9d852.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 35,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/de/ea/f1/deeaf158126940d0d305aeaa0edbde3c.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 36,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/d4/b4/25/d4b425cbd2e849f9abe57cb97fc2ca7b.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 37,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/35/3d/04/353d041ba9f3637f6e59303ce1db2423.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 38,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/b3/3f/b9/b33fb97104fe57a9b2c093f6e0b857ec.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 39,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/3e/35/05/3e350584fd017b278fbdba947187ffff.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 40,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/df/05/db/df05db280d2dff24777019a2c74ac1a7.jpg",
    border: "border-2 border-gray-300",
  },
];
