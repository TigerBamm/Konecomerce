import React from "react";
import { useParams, Link } from "react-router-dom";

function CardDetailkid() {
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

export default CardDetailkid;
