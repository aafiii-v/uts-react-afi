import Footer from "./components/Footer";
import Header from "./components/Header";
import Cars from "./Pages/Cars";


function App() {

  const mobilList = [
    {
      id: 1,
      name: "Toyota Avanza",
      price: 230000000,
      color: "Silver",
      image: "https://i.pinimg.com/736x/3a/40/cb/3a40cb18444db6c981229d07072c479b.jpg"
    },
    {
      id: 2,
      name: "Honda Brio",
      price: 190000000,
      color: "Yellow",
      image: "https://i.pinimg.com/736x/12/35/85/12358545763237e19a0946f0cf2eb331.jpg"
    },
    {
      id: 3,
      name: "Mitsubishi Xpander",
      price: 270000000,
      color: "Black",
      image: "https://i.pinimg.com/736x/76/f8/19/76f8191668578b737ee73006cc8f005d.jpg"
    },
    {
      id: 4,
      name: "Suzuki Ertiga",
      price: 250000000,
      color: "Red",
      image: "https://i.pinimg.com/736x/aa/17/25/aa172501635c89205bef23e0f73f31ca.jpg"
    },
    {
      id: 5,
      name: "Daihatsu Terios",
      price: 260000000,
      color: "White",
      image: "https://i.pinimg.com/736x/9f/43/f5/9f43f529859b0ae18e444be55661c8d5.jpg"
    },
    {
      id: 6,
      name: "Wuling Almaz",
      price: 310000000,
      color: "Gray",
      image: "https://i.pinimg.com/736x/4b/e3/0e/4be30e1a6e9c4a75ae720e5edcc035cb.jpg"
    },
    {
      id: 7,
      name: "Hyundai Stargazer",
      price: 280000000,
      color: "White",
      image: "https://i.pinimg.com/736x/80/8c/05/808c050858d51a7541ff709298c9847c.jpg"
    },
    {
      id: 8,
      name: "Kia Seltos",
      price: 330000000,
      color: "Orange",
      image: "https://i.pinimg.com/736x/cf/96/58/cf965867d49a7d6177df4bc3f16405a5.jpg"
    },
    {
      id: 9,
      name: "Nissan Livina",
      price: 240000000,
      color: "Brown",
      image: "https://i.pinimg.com/736x/06/99/e1/0699e1c4b46825d7df4c3b482c67e03a.jpg"
    },
    {
      id: 10,
      name: "Toyota Fortuner",
      price: 550000000,
      color: "Dark Gray",
      image: "https://i.pinimg.com/736x/ff/4d/74/ff4d74cd05291bd441c5320469ba879e.jpg"
    }
  ];

  return (
    <>
      <Header />
      <Cars data={mobilList} />
      <Footer />
    </>
  )
}

export default App