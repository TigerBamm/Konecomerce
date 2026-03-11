import React from "react";
import { useParams, Link } from "react-router-dom";

function CardDetailmen() {
  const { id } = useParams();

  // const Products = [
  //   {
  //     id: 1,
  //     image: "https://i.pinimg.com/1200x/30/7c/62/307c62e7ffb9c4a998c6507d131753bc.jpg",
  //     Name: "Jiiji",
  //     price: "$19.99",
  //     description: "A minimalist approach to daily essentials. Crafted with sustainable materials and a focus on tactile ergonomics."
  //   },
  //   {
  //     id: 2,
  //     image: "https://i.pinimg.com/1200x/06/53/6e/06536eb339d010899f05798ea6c9c9e4.jpg",
  //     Name: "Jiiji",
  //     price: "$29.99",
  //     description: "Engineered for durability without the bulk. The Vortex series features a signature matte finish that resists fingerprints."
  //   },
  //   {
  //     id: 3,
  //     image: "https://i.pinimg.com/1200x/94/fd/bc/94fdbcc0feb2e319d81db0043a2c73f9.jpg",
  //     Name: "Jiiji",
  //     price: "$39.99",
  //     description: "Where high-fashion meets tech. The Neon Rift provides a striking aesthetic paired with industrial-grade protection."
  //   },
  //   {
  //     id: 4,
  //     image: "https://i.pinimg.com/1200x/4c/41/9b/4c419bac490c822fde72fa249cdcf34b.jpg",
  //     Name: "Jiiji",
  //     price: "$49.99",
  //   },
  //   {
  //     id: 5,
  //     image: "https://i.pinimg.com/736x/14/e7/1e/14e71e559754b20ed6fd0e65e3e7073e.jpg",
  //     Name: "Jiiji",
  //     price: "$.99",
  //   },
  //   {
  //     id: 6,
  //     image: "https://i.pinimg.com/736x/9c/f4/03/9cf403b21498b487d48ed06859f89901.jpg",
  //     Name: "Jiiji",
  //     price: "$59.99",
  //   },
  //   {
  //     id: 7,
  //     image: "https://i.pinimg.com/736x/ca/8c/0d/ca8c0de175388ad93de446efc303b497.jpg",
  //     Name: "Jiiji",
  //     price: "$59.99",
  //   },
  //   {
  //     id: 8,
  //     image: "https://i.pinimg.com/1200x/29/b4/fd/29b4fdc9ea4940c00007b1ef93a7af99.jpg",
  //     Name: "Jiiji",
  //     price: "$59.99",
  //   },
  // ];

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

export default CardDetailmen;
