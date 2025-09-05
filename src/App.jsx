import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './Components/Layout/UserLayout.jsx';
import Home from './Pages/Home.jsx';
import { Toaster } from 'sonner';
import LogIn from './Pages/LogIn.jsx';
import Register from './Pages/Register.jsx';
import Profile from './Pages/Profile.jsx';
import CollectionPage from './Pages/CollectionPage.jsx';
import ProductDetails from './Components/Products/ProductDetails.jsx';
import Checkout from './Components/Cart/Checkout.jsx';
import OrderConformation from './Components/Layout/OrderConformation.jsx';
import OrderDetail from './Pages/OrderDetail.jsx';
import MyOrdersPage from './Pages/MyOrdersPage.jsx';
import AdminLayout from './Components/Admin/AdminLayout.jsx';
import AdminHomePage from './Pages/AdminHomePage.jsx';
import UserManagement from './Components/Admin/UserManagement.jsx';
import ProductMangement from './Components/Admin/ProductMangement.jsx';
import EditProductPage from './Components/Admin/EditProductPage.jsx';
import OrderManagement from './Components/Admin/OrderManagement.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position='top-right' />
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<LogIn />} />
          <Route path='register' element={<Register />} />
          <Route path='profile' element={<Profile />} />
          <Route path='collections/:collection' element={<CollectionPage />} />
          <Route path='product/:id' element={<ProductDetails />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='order-conformation' element={<OrderConformation />} />
          <Route path='order/:id' element={<OrderDetail />} />
          <Route path='my-orders' element={<MyOrdersPage />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AdminHomePage />} />
          <Route path='users' element={<UserManagement />} />
          <Route path='products' element={<ProductMangement />} />
          <Route path='products/:id/edit' element={<EditProductPage />} />
          <Route path='orders' element={<OrderManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
