import './FooterNavItem.css';

const FooterNavItem = (props) => {
    return (
        <li className="footer-list-item">
            <a href="#">{props.children}</a>
        </li>
    );
}

export default FooterNavItem;