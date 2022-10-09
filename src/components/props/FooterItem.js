import './FooterItem.css';

function FooterItem(props) {
    return (
        <div className='foot__item'>
            <h4>{props.head}</h4>
            <p>{props.info}</p>
        </div>
    )
};

export default FooterItem;