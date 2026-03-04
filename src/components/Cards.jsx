import React from 'react'
import { useNavigate } from 'react-router-dom';

function Cards() {
  const navigate = useNavigate();
  const Products = [
    {
      id: 1,
      image: "https://i.pinimg.com/1200x/30/7c/62/307c62e7ffb9c4a998c6507d131753bc.jpg",
      Name: "jiiji",
      price: "$19.99",
    },
    {
      id: 2,
      image: "https://i.pinimg.com/1200x/06/53/6e/06536eb339d010899f05798ea6c9c9e4.jpg",
      Name: "Jiiji",
      price: "$29.99",
    },
    {
      id: 3,
      image: "https://i.pinimg.com/1200x/94/fd/bc/94fdbcc0feb2e319d81db0043a2c73f9.jpg",
      Name: "Jiiji",
      price: "$39.99",
     
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

  ]

  return (
    <div className='w-full h-full bg-mauve-200 grid grid-cols-4 gap-4 mt-3'>
      {Products.map((value) => (
        <div key={value.id} className="col-span-1 h-150 bg-gray-100 p-4 rounded-[10px] shadow">
          <img src={value.image} alt="cute" className="w-full h-3/4 rounded-[10px] object-cover " />
          <div className="h-1/4 w-full p-2 leading-12.5 mt-2">
            <p className="text-start text-bold text-2xl">Price: {value.price}</p>
            <p className="text-2xl font-bold text-start">Name: {value.Name}</p>
            <button onClick={()=>navigate(`/card-detail/${value.id}`)} className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold m-2 rounded" type='button'>Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards