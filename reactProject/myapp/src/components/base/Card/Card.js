import './Card.scss';

export const Card = (props) => {
    const { imageUrl, title,backgroundColor } = props;

    const style = {
        backgroundImage: `url(${imageUrl})`,
    };

    return (
        <div className="Card-wrapper" onClick={props.onClick}>
            <div className="image" style={style}></div>
            <div className="details" style={{backgroundColor:backgroundColor}}>
                <div className="title">{title}</div>
            </div>
        </div>
    );
};
