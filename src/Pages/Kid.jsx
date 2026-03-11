import React from "react";
import { useNavigate } from "react-router-dom";

export default function Kid() {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Banner */}
      <div className="bg-orange-200 rounded-lg p-16 text-center mb-10 mt-10">
        <h1 className="text-6xl font-bold text-orange-500">UP TO 50% OFF</h1>
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
                Name: {value.Name}
              </p>
              <button
                onClick={() => navigate(`/card-detailkid/${value.id}`)}
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
      "https://i.pinimg.com/1200x/0f/5b/31/0f5b310256dbaf39a7011e4f8b130735.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 2,
    name: "Formal Shirt",
    price: "45.99$",
    image:
      "https://i.pinimg.com/1200x/86/da/f7/86daf7f726782865f5cd85b48285c8c6.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 3,
    name: "Summer Shirt",
    price: "39.99$",
    image:
      "https://i.pinimg.com/736x/56/4b/4a/564b4a7735822ad46782efbca12bdca7.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 4,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/8c/8d/75/8c8d75934f6994e910c49ca311e27e48.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 5,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/55/f2/e6/55f2e6258d4667236a0efe5a67fef7e2.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 6,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/43/88/47/43884788e862a26d794b516155c96c72.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 7,
    name: "Girl's Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/fc/4d/69/fc4d69d2e58160a8d8d296b4105c9449.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 8,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/ee/7f/e5/ee7fe5b01177cb26b928ba99e8544f28.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 9,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/a2/2f/38/a22f3898c0f2190d805c139f3457f4ed.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 10,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/e9/ff/81/e9ff8144e3d0c02975bd4412e1d94ba3.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 11,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/ec/af/ef/ecafef7cdde66cf56e132967ba67bd1d.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 12,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/30/c1/e5/30c1e59d320f84f383894acc1aaadcac.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 13,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/05/cf/63/05cf63bb45b3259922a277ec38852b51.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 14,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/33/95/c3/3395c32d9a8cfb30fc33ad2b3c0b75d5.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 15,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/e2/69/c4/e269c4e056d92c5bb2aecb25a85b5e42.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 16,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/31/2c/20/312c20c960c6443e1b05c57e41fe2ea3.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 17,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/97/1c/b5/971cb57b06a3d45a1ccfe4d4afda876a.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 18,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/c6/51/31/c65131e99ca835135c192555d1880a74.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 19,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/3a/a3/36/3aa3365a6a7b42bb8b343685df40054b.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 20,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/3c/a4/fe/3ca4fec47baa01b0b7a281f0e56784bc.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 21,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/ff/d0/59/ffd0597d607cf648e4d9777929913039.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 22,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/83/0d/38/830d386b5a28902ec66188b010d905a9.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 23,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/96/e5/ae/96e5ae7d415c74bd31b970ab6964e044.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 24,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/ad/2d/99/ad2d999834e47c31095362613d82d166.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 25,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/f4/2b/b8/f42bb84b087855351146c1d360b0ee85.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 26,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/0b/9a/73/0b9a730af38397b6610e0606d6322bd9.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 27,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/e1/ca/4e/e1ca4ecce2b5caedb42587bae8498384.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 28,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/55/98/01/559801e0d6afe1f4ecd98dad40c80a30.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 29,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/ba/dc/9a/badc9a47bb3396640caa775aee566fa8.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 30,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/ed/3d/46/ed3d4640477b5c1d70db4cd68cfce148.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 31,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/f4/1c/9a/f41c9a95a6c138c2efc094b3707bc326.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 32,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/e0/db/0a/e0db0ab3ee6ad217c3b34ab800897397.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 33,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/4a/70/45/4a7045e566958d3b7c5578e915aa2da8.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 34,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/5d/a1/9a/5da19a568c2c9510a7c91a18318182c8.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 35,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/2a/70/a7/2a70a7b623ccc6bd7b8d50a3c04f11ff.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 36,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/e5/e9/4a/e5e94a0b05f40cfa76dedd4c5b82d80a.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 37,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/18/ca/82/18ca824a77bf4bd43a03ffe8e8610c4c.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 38,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/f9/30/e6/f930e65e13b0215b3693daba9a923515.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 39,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/fe/03/15/fe03158b8bc458add238909c2f58c55f.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 40,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/ea/32/03/ea3203e67b80a83ebc124db7fc466e9e.jpg",
    border: "border-2 border-gray-300",
  },
];
