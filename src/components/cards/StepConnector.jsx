import { ChevronRight } from "lucide-react";

function StepConnector() {
    return (
        <div className="steps__connector">
            <span className="steps__line"></span>

            <div className="steps__arrow">
                <ChevronRight size={24} />
            </div>

            <span className="steps__line"></span>
        </div>
    );
}

export default StepConnector;
