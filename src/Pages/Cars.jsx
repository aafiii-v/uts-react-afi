import { useState, useEffect } from "react";
import { ShoppingCart } from 'lucide-react';

const Cars = ({ data }) => {
  const [cars, setCars] = useState(data);
  const [selectedCar, setSelectedCar] = useState(null);
  const [commentCar, setCommentCar] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [cart, setCart] = useState([]);
  const [dataCars, setDataCars] = useState(data);
  const [sortOption, setSortOption] = useState('');

  const handleInfoClick = (car) => {
    setSelectedCar(car);
  };

  const handleCommentClick = (car) => {
    setCommentCar(car);
    setCommentText(car.comment || "");
  };

  const handleCommentSubmit = () => {
    const updatedCars = cars.map((car) =>
      car.id === commentCar.id ? { ...car, comment: commentText } : car
    );
    setCars(updatedCars);
    setCommentCar(null);
    setCommentText("");
  };

  const handleAddToCart = (car) => {
    setCart((prev) => [...prev, car]);
  };

  const handleRemoveFromCart = (car) => {
    const index = cart.findIndex((item) => item.id === car.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const handleChange = (e) => {
    const keyword = e;
    const filteredData = cars.filter(car => car.name.toLowerCase()
      .includes(keyword.toLowerCase()) ||
      car.color.toLowerCase().includes(keyword.toLowerCase()) ||
      car.price.toString().includes(keyword) ||
      car.name.toString().includes(keyword.toLowerCase())
    );
    setDataCars(filteredData);
  }

  const sortData = (option, data) => {
    const sorted = [...data];
    if (option === 'name-asc') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === 'name-desc') {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else if (option === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (option === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  };

  useEffect(() => {
    setDataCars(prev => sortData(sortOption, prev));
  }, [sortOption]);

  const totalHarga = cart.reduce((sum, car) => sum + car.price, 0);

  return (
    <>
      <div className="flex justify-end p-4 relative">
        <ShoppingCart className="w-10 h-10 text-gray-700" />
        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {cart.length}
        </span>
      </div>
      <div className="flex items-center justify-center gap-5">
        <input type="text"
          className="w-6xl py-2 px-4 rounded-md border border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Cari Mobil Impian Anda....."
        />

        <select
          onChange={(e) => setSortOption(e.target.value)}
          className="py-2 px-3 rounded-md border border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" hidden>Sort By</option>
          <option value="name-asc">Name A-Z</option>
          <option value="name-desc">Name Z-A</option>
          <option value="price-asc">Price Low to High</option>
          <option value="price-desc">Price High to Low</option>
        </select>

      </div>
      <h1 className="select-none text-3xl font-bold text-center my-6">🚗 Daftar Mobil</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {dataCars.map((car) => (
          <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{car.name}</h2>
              <p className="text-blue-600 text-lg font-bold">Rp {car.price.toLocaleString('id-ID')}</p>
              <p className="text-gray-600">Color: {car.color}</p>

              {car.comment && (
                <div className="mt-2 p-2 bg-gray-100 text-sm rounded-md text-gray-700">
                  <span className="font-medium">Comment:</span><br />
                  <em>"{car.comment}"</em>
                </div>
              )}

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleInfoClick(car)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                >
                  Info
                </button>
                <button
                  onClick={() => handleCommentClick(car)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
                >
                  Comment
                </button>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <button
                  className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                  onClick={() => handleAddToCart(car)}
                >
                  Add to Cart
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleRemoveFromCart(car)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Info */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
            <button
              className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 rounded-full w-8 h-8 text-black text-lg"
              onClick={() => setSelectedCar(null)}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedCar.name}</h2>
            <img src={selectedCar.image} alt={selectedCar.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <p><span className="font-semibold">Price:</span> Rp {selectedCar.price.toLocaleString('id-ID')}</p>
            <p><span className="font-semibold">Color:</span> {selectedCar.color}</p>
            {selectedCar.comment && (
              <p className="mt-2 text-sm text-gray-700 italic">
                "<span className="font-medium">Comment:</span> {selectedCar.comment}"
              </p>
            )}
          </div>
        </div>
      )}

      {/* Modal Comment */}
      {commentCar && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
            <button
              className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 rounded-full w-8 h-8 text-black text-lg"
              onClick={() => setCommentCar(null)}
            >
              ✗
            </button>
            <h2 className="text-xl font-bold mb-4">Comment for {commentCar.name}</h2>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 text-sm"
              rows="5"
              placeholder="Tulis komentar Anda..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
            <button
              className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              onClick={handleCommentSubmit}
            >
              Submit Comment
            </button>
          </div>
        </div>
      )}

      {/* Ringkasan keranjang */}
      <div className="bg-blue-500 p-6 mt-8 rounded-xl shadow-lg mx-4 mb-10">
        <h2 className="text-xl font-bold mb-4">🛒 Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Keranjang kosong.</p>
        ) : (
          <>
            <ul className="space-y-2">
              {cart.map((item, index) => (
                <li key={index} className="text-gray-800">
                  {item.name} - Rp {item.price.toLocaleString('id-ID')}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-semibold text-gray-900">
              Total: Rp {totalHarga.toLocaleString('id-ID')}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Cars;
