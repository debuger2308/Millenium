import Header from "./components/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainPage from "./pages/mainpage/mainPage"
import Footer from "./components/footer/Footer"
import Catalog from "./pages/catalog/Catalog"
import { Provider } from "react-redux"
import store from "./utils/reduxStore/store"
import products from "./utils/products.json"
import ProductPage from "./pages/productPage/ProductPage"
import Bag from "./pages/bag/Bag"
import ScrollToTop from "./utils/scrollToTop"
import Ordering from "./pages/ordering/Ordering"
import Payment from "./pages/payment/Payment"
import About from "./pages/about/About"
import Location from "./pages/location/Location"


function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Router>
          <Provider store={store}>
            <ScrollToTop />
            <Header />
            <Routes>
              {products.map((item) => {
                return <Route key={item.id} path={`/${item.id}`} element={<ProductPage product={item} />} />
              })}
              <Route path="/mainpage" element={<MainPage />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/bag" element={<Bag />} />
              <Route path="/ordering" element={<Ordering />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/about" element={<About />} />
              <Route path="/location" element={<Location />} />
            </Routes>
            <Footer />
          </Provider>
        </Router>
      </div>
    </div>
  )
}

export default App
