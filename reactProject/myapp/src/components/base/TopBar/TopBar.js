import { useNavigate } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import Total from '../Total/Total';
import './TopBar.scss';

export function TopBar(props) {
  
    function onNavigate() {
        sessionStorage['edit-page'] = '';
        sessionStorage['data'] = ''
        props.navigate('/');
    }

    return (
        <div className="TopBar-wrapper">
            <Logo />
            <div className="flex" >
            <Total />
            </div>
            <button className="menuBtn" onClick={onNavigate}>
                Menu
            </button>
        </div>
    );
}

export function TopBarContainer() {
    const navigate = useNavigate();

    return <TopBar navigate={navigate} />;
}

export default TopBarContainer;
