import { ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProfileDropDown from "./ProfileDropDown";

function ProfileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const menuRef = useRef(null);

    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        navigate("/login");
    };

    useEffect(() => {
        function handleOutsideClick(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        }

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div ref={menuRef} className="profile">
            <button
                type="button"
                className="profile__button"
                onClick={toggleMenu}
            >
                <div className="profile__avatar">AK</div>

                <ChevronDown
                    size={18}
                    className={`profile__chevron ${
                        isOpen ? "profile__chevron--open" : ""
                    }`}
                />
            </button>

            {isOpen && (
                <ProfileDropDown onLogout={handleLogout} onClose={closeMenu} />
            )}
        </div>
    );
}

export default ProfileMenu;
