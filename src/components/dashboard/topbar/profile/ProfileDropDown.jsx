import { LogOut, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

function ProfileDropDown({ onLogout, onClose }) {
    return (
        <div className="profile__dropdown">
            <Link
                to="/profile"
                className="profile__dropdown-item"
                onClick={onClose}
            >
                <User size={18} />
                <span className="profile__dropdown-item__title">
                    My Profile
                </span>
            </Link>

            <Link
                to="/settings"
                className="profile__dropdown-item"
                onClick={onClose}
            >
                <Settings size={18} />
                <span className="profile__dropdown-item__title">Settings</span>
            </Link>

            <button
                className="profile__dropdown-item profile__dropdown-item--logout"
                onClick={onLogout}
            >
                <LogOut size={18} />
                <span className="profile__dropdown-item__title">Logout</span>
            </button>
        </div>
    );
}

export default ProfileDropDown;
