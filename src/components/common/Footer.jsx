import Logo from "./Logo";

function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="footer__container">
                <div className="footer__brand">
                    <Logo />

                    <span className="footer__copyright">
                        2026 TrackFolio, All rights reserved.
                    </span>
                </div>

                <div className="footer__actions">
                    <a href="#" className="github">
                        Github
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
