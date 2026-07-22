import { BookmarkCheck } from "lucide-react";

function Logo() {
    return (
        <div className="logo">
            <BookmarkCheck className="logo__icon" aria-hidden="true" />
            <span className="logo__text">TrackFolio</span>
        </div>
    );
}

export default Logo;
