import { BookmarkCheck } from "lucide-react";

function Logo() {
    return (
        <div className="logo__wrapper">
            <BookmarkCheck className="logo__icon" />
            <span className="logo__title">TrackFolio</span>
        </div>
    );
}

export default Logo;
