import './Json.scss';
import { useNavigate } from 'react-router-dom';

const renderEditPage = (key, value, onChange, index) => {
    const inputType = key === 'price' || key === 'quantity' ? 'number' : 'text';

    if (key === 'img') {
        return (
            <div key={index} className="field-edit">
                <img key={index} src={value} className="edit-img" />
            </div>
        );
    }

    return (
        <div key={index} className="field-edit">
            {key}:{' '}
            <input
                type={inputType}
                name={key}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export const Json = (props) => {
    const { data, onChange } = props;
    const navigate = useNavigate();

    function onNavigate(navigateLink) {
        sessionStorage['data'] = data.customerId ? data.customerId : data.id;
        navigate(navigateLink);
    }

    function renderName(key, value, navigateLink, index) {
        return (
            <div key={index} className="field">
                <button
                    className="btn-navigate"
                    onClick={() => onNavigate(navigateLink)}
                >
                    <strong>{value}</strong>
                </button>
            </div>
        );
    }

    function renderField(key, value, index) {
        if (key === 'id' || key === 'customerId') return;

        if (sessionStorage['edit-page']) {
            return renderEditPage(key, value, onChange, index);
        }

        if (key === 'img') {
            return (
                <div key={index} className="field">
                    <img key={index} src={value} />
                </div>
            );
        }

        if (key === 'name' || key === 'customerName') {
            const navigateLink =
                key === 'name' ? '/edit-product-page' : '/edit-customer-page';

            return renderName(key, value, navigateLink, index);
        }

        if (key === 'price') {
            return (
                <div key={index} className="field">
                    {key}: <strong> {value}$</strong>{' '}
                </div>
            );
        }

        if (key === 'quantity') {
            return (
                <div key={index} className="field">
                    Items left: <strong> {value}</strong>
                </div>
            );
        }

        return;
    }

    function renderFields() {
        return Object.keys(data).map((key, index) =>
            renderField(key, data[key], index)
        );
    }

    return <div className="Json-wrapper">{renderFields()}</div>;
};
