import React from "react";
import { useParams, Link } from "react-router-dom";

function CardDetail() {
  const { id } = useParams();

  const Products = [
    {
      id: 1,
      image: "https://i.pinimg.com/1200x/30/7c/62/307c62e7ffb9c4a998c6507d131753bc.jpg",
      Name: "Jiiji",
      price: "$19.99",
      description: "A minimalist approach to daily essentials. Crafted with sustainable materials and a focus on tactile ergonomics."
    },
    {
      id: 2,
      image: "https://i.pinimg.com/1200x/06/53/6e/06536eb339d010899f05798ea6c9c9e4.jpg",
      Name: "Jiiji",
      price: "$29.99",
      description: "Engineered for durability without the bulk. The Vortex series features a signature matte finish that resists fingerprints."
    },
    {
      id: 3,
      image: "https://i.pinimg.com/1200x/94/fd/bc/94fdbcc0feb2e319d81db0043a2c73f9.jpg",
      Name: "Jiiji",
      price: "$39.99",
      description: "Where high-fashion meets tech. The Neon Rift provides a striking aesthetic paired with industrial-grade protection."
    },
    {
      id: 4,
      image: "https://i.pinimg.com/1200x/4c/41/9b/4c419bac490c822fde72fa249cdcf34b.jpg",
      Name: "Jiiji",
      price: "$49.99",
    },
    {
      id: 5,
      image: "https://i.pinimg.com/736x/14/e7/1e/14e71e559754b20ed6fd0e65e3e7073e.jpg",
      Name: "Jiiji",
      price: "$.99",
    },
    {
      id: 6,
      image: "https://i.pinimg.com/736x/9c/f4/03/9cf403b21498b487d48ed06859f89901.jpg",
      Name: "Jiiji",
      price: "$59.99",
    },
    {
      id: 7,
      image: "https://i.pinimg.com/736x/ca/8c/0d/ca8c0de175388ad93de446efc303b497.jpg",
      Name: "Jiiji",
      price: "$59.99",
    },
    {
      id: 8,
      image: "https://i.pinimg.com/1200x/29/b4/fd/29b4fdc9ea4940c00007b1ef93a7af99.jpg",
      Name: "Jiiji",
      price: "$59.99",
    },
  ];

  const product = Products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center  bg-zinc-900 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4">Product not found</h2>
          <Link to="/" className="text-blue-400 underline">
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 bg-zinc-900/50 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
        <div className="relative group overflow-hidden rounded-2xl bg-zinc-800 flex justify-center items-center aspect-square">
          <img
            className="w-full h-full transition-transform duration-700 "
            src={product.image}
            alt={product.Name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        {/* Right Side: Clean Typography and Modern UI Elements */}
        <div className="flex flex-col justify-center">
          <nav className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
            Collection / {product.id < 4 ? "Premium" : "Standard"}
          </nav>

          <h1 className="text-5xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
            {product.Name}
          </h1>

          <p className="text-3xl font-light text-zinc-300 mb-6">
            {product.price}
          </p>

          <hr className="border-zinc-800 mb-6" />

          <div className="mb-8">
            <h3 className="text-sm font-semibold uppercase text-zinc-400 mb-2">
              Description
            </h3>
            <p className="text-zinc-400 leading-relaxed italic">
              {product.description ||
                "Designed for the modern professional. This piece combines aesthetic purity with functional excellence, ensuring you stand out while staying efficient."}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <button
              className="w-full py-4 bg-white text-black hover:bg-zinc-200 transition-colors duration-300 font-bold rounded-xl active:scale-[0.98]"
              type="button"
            >
              Add to Cart
            </button>

            <button
              className="w-full py-4 bg-transparent border border-zinc-700 hover:border-zinc-500 text-zinc-300 transition-all duration-300 font-medium rounded-xl"
              type="button"
            >
              Save to Wishlist
            </button>
          </div>

          <p className="mt-8 text-center text-[10px] text-zinc-600 tracking-widest uppercase">
            Free Shipping on orders over $100
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
