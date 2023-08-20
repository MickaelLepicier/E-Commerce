import './MenuPage.scss';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/base/Card/Card';

function MenuPage() {
    const navigate = useNavigate();

    return (
        <div className="MenuPage-wrapper">
            <Card
                imageUrl="https://i0.wp.com/thatbricksite.com/wp-content/uploads/2022/01/Best-LEGO-Sets-of-2021-1.jpg?w=1200&ssl=1"
                title="Products"
                description="Browse products"
                onClick={() => navigate('/products')}
                backgroundColor = '#b296eb85'
            />
            <Card
                imageUrl="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F7cc6ce54-a217-11e3-87f6-00144feab7de?dpr=2&fit=scale-down&quality=medium&source=next&width=700"
                title="Customers"
                description="Browse customers"
                onClick={() => navigate('/customers')}
                backgroundColor = '#c0a20057'
                />
            <Card
                imageUrl="https://ae01.alicdn.com/kf/Hd90b3973f7754f59a9bd660506c7cd3aC/MOC-City-Bricks-Building-Blocks-Money-Coins-Cash-Dollar-Bill-Jewlery-Box-Gem-Precious-Stone-Diamonds.jpg"
                title="Purchases"
                description="Browse purchases"
                onClick={() => navigate('/purchases')}
                backgroundColor = '#ea00a047'
            />
        </div>
    );
}

export default MenuPage;
