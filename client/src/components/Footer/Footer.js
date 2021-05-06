import './Footer.css';
import './FooterNavItem/FooterNavItem.css'
import FooterNavItem from './FooterNavItem/FooterNavItem'
const Footer = () => {
    return (
        <footer className="footer">
            <ul>
                <FooterNavItem>Going to 1</FooterNavItem>
                <FooterNavItem>Going to 2</FooterNavItem>
                <FooterNavItem>Going to 3</FooterNavItem>
                <FooterNavItem>Going to 4</FooterNavItem>
                <FooterNavItem>Going to 5</FooterNavItem>
                <FooterNavItem>Going to 6</FooterNavItem>
                <FooterNavItem>Going to 7</FooterNavItem>
                <FooterNavItem>Going to 8</FooterNavItem>
                <FooterNavItem>Going to 9</FooterNavItem>
                <FooterNavItem>Going to 10</FooterNavItem>
                <li className="footer-list-item"><img src="blue-origami-bird.png" alt="blue-logo" className="footer-logo"/></li>
            </ul>
            <p>&copy; All rights reserved</p>
        </footer>
    );
}

export default Footer;