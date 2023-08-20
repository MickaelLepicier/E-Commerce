import './App.scss';
import { Route, Routes } from 'react-router-dom';
import TopBar from './components/base/TopBar/TopBar';
import CustomersPage from './pages/CustomersPage/CustomersPage';
import MenuPage from './pages/MenuPage/MenuPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import PurchasesPage from './pages/PurchasesPage/PurchasesPage';
import EditProductPageContainer from './pages/EditProductPage/EditProductPage';
import EditCustomerPageContainer from './pages/EditCustomerPage/EditCustomerPage';

function App() {
    return (
        <div>
            <TopBar />
            <Routes>
                <Route path="/" element={<MenuPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/customers" element={<CustomersPage />} />
                <Route path="/purchases" element={<PurchasesPage />} />
                <Route
                    path="/edit-product-page"
                    element={<EditProductPageContainer />}
                />
                <Route
                    path="/edit-customer-page"
                    element={<EditCustomerPageContainer />}
                />
            </Routes>
        </div>
    );
}

export default App;
