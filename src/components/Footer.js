import { ReactComponent as Linkedinicon } from "../icons/linkedin.svg"
import { ReactComponent as Emailicon } from "../icons/email.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div>© 2026 Nandan</div>
            <div className="footer-links">
                <a href="mailto:nandan.sabu@gmail.com"><Emailicon /></a>
                <a href="https://www.linkedin.com/in/nandan-sabu-9053ab353/" target="_blank" rel="noreferrer"><Linkedinicon /></a>
            </div>
        </footer>
    );
}

export default Footer;
