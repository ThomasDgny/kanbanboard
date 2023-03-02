import React from "react";

function LiveIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="11.5"
                stroke="#fff"
                strokeDasharray="5 5"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></circle>
            <circle cx="12" cy="12" r="8.5" stroke="#fff"></circle>
            <circle cx="12" cy="12" r="3" fill="#fff"></circle>
        </svg>
    );
}

export default LiveIcon;