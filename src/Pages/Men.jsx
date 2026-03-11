import React from "react";
import { useNavigate } from "react-router-dom";

export default function Men() {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Banner */}
      <div className="bg-orange-200 rounded-lg p-16 text-center mb-10 mt-10">
        <h1 className="text-6xl font-bold text-orange-500">UP TO 30% OFF</h1>
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
              <p className="text-2xl  text-start">
                Name: {value.name}
              </p>
              <button
                onClick={() => navigate(`/card-detailmen/${value.id}`)}
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
      "https://i.pinimg.com/736x/b5/a8/17/b5a817bdec915aee05890c60b9312d92.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 2,
    name: "Formal Shirt",
    price: "45.99$",
    image:
      "https://i.pinimg.com/1200x/6e/9f/55/6e9f55957d5d1f1e091af2cf12bd3b8b.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 3,
    name: "Summer Shirt",
    price: "39.99$",
    image:
      "https://i.pinimg.com/1200x/f2/60/b7/f260b79d02a464d92323a5a4a11c9b23.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 4,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/d8/fe/49/d8fe49274ee8059af63d8564705be87e.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 5,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/89/b8/8a/89b88aeaa81dc6a790c35d5ad3c19d27.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 6,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/b5/09/de/b509def73a8fea65a8236f688833c241.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 7,
    name: "Girl's Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/a0/15/08/a015088f21ac63fd553e00395b3c6a0e.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 8,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/9e/f7/a9/9ef7a9f650d0010ca65bf5f2291fd92e.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 9,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/fd/43/66/fd4366dc7416c26e3200ba7238dc6d95.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 10,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/26/d7/b3/26d7b3ec1ff57419adb1a7ba71c3a4e7.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 11,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/00/55/96/005596842008bf9f6d9286a8dc8766db.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 12,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/2b/8f/a1/2b8fa1bdf3868ef335c55ff83e65d4a3.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 13,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/35/f9/25/35f9256eb6e2f7b9a09336d897ce7644.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 14,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/89/c2/d7/89c2d77e7c80e29967a3eac533801b49.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 15,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/fd/16/77/fd16779eff91ad766886e810c71c05f6.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 16,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/f1/e0/e5/f1e0e5344a5db2221c3c63e03ec0df88.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 17,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/f0/f7/2e/f0f72e4a684860515f66e932895a740e.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 18,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/82/88/c3/8288c3dd1c0c23615be1891e1e72b7f6.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 19,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/3c/c0/1e/3cc01e09676dd78497ef4db6f09a3e89.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 20,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/6a/af/83/6aaf8309928846fbef1f0d685d6e7dc8.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 21,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/2a/7d/43/2a7d436b6675cfe1b727d45be9e9a1dd.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 22,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/a9/e7/77/a9e77797b23016e62ffda45a23a2983d.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 23,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/13/0c/4e/130c4e61c2246458498dc5dc90ced156.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 24,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/21/93/8f/21938f04da48dad7b202996e6f46cf6c.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 25,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/e0/45/3b/e0453b42eaa8d79c746f8f0109cdcd90.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 26,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/f2/4f/19/f24f19036b899cbab644f55d4df9cbc9.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 27,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/57/a9/21/57a921f027cd99ddb5ef1b7cc4e715ec.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 28,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/82/27/3b/82273b2079180329ce2a7b67559e5649.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 29,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/aa/08/af/aa08afd50173f521f8a1cd2eeaa94f70.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 30,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/e7/91/82/e791828eae2444d0b22d53d7d77b3fc6.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 31,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/fc/74/3a/fc743afa9de0449509750a7eaea3703a.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 32,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/3c/05/11/3c05114f46887f3be1c7b62b43788f02.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 33,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/1200x/78/af/5d/78af5ddc996ed1df4c318cd4e64b2a82.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 34,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/e8/de/47/e8de4751f52df53a1be305fbbad4b86f.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 35,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/e4/5e/88/e45e881a1d1e48c408daf57f6f1b9fcf.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 36,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/67/ed/80/67ed80daf4b970acb7bc1890c2818306.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 37,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/08/c1/9c/08c19cdda79ffa83f3101e9f78c09761.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 38,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/7c/39/dd/7c39dd131d5d42b48fa21821ae0d4813.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 39,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/a3/e9/35/a3e935f1de2ed1e0f214eea250c414d2.jpg",
    border: "border-2 border-gray-300",
  },
  {
    id: 40,
    name: "Black Sweatshirt",
    price: "55.00$",
    image:
      "https://i.pinimg.com/736x/53/c3/55/53c35565c3004645cbed5b10b3a444af.jpg",
    border: "border-2 border-gray-300",
  },
];
