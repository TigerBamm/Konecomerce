import React from "react";

export default function Men() {
  return (
    <div className="max-w-7xl mx-auto px-6" >
      {/* Banner */}
      <div className="bg-orange-200 rounded-lg p-16 text-center mb-10 mt-10">
        <h1 className="text-6xl font-bold text-orange-500">UP TO 30% OFF</h1>
        <p className="text-xl mt-4 text-orange-500">ON NEW ARRIVALS</p>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div key={item.id} className="group">
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[420px] object-cover group-hover:scale-105 transition"
              />
            </div>

            <h3 className="mt-3 font-medium">{item.name}</h3>
            <p className="text-gray-500">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const products = [
  {
    id: 1,
    name: "Graphic T-Shirt",
    price: 29,
    image: "https://images.unsplash.com/photo-1520975922327-5a7f2e5e7d7d",
    border: "border-2 border-gray-300",
  },
  {
    id: 2,
    name: "Formal Shirt",
    price: 45,
    image: "https://images.unsplash.com/photo-1593032465171-8e3a6f3b0f2d",
    border: "border-2 border-gray-300",
  },
  {
    id: 3,
    name: "Summer Shirt",
    price: 39,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    border: "border-2 border-gray-300",
  },
  {
    id: 4,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 5,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 6,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 7,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 8,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 9,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 10,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 11,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 12,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 13,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 14,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 15,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 16,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 17,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 18,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 19,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 20,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 21,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 22,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 23,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 24,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 25,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 26,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 27,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 28,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 29,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 30,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 31,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 32,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 33,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 34,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 35,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 36,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 37,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 38,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 39,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
  {
    id: 40,
    name: "Black Sweatshirt",
    price: 55,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    border: "border-2 border-gray-300",
  },
];
