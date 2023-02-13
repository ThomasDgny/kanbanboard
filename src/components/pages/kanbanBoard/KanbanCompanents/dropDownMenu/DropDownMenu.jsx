import React, { useState, useRef, useEffect } from "react";
import OptionIcon from "../../../../../assets/icons/OptionsIcon";
import { RemoveTaskHandler } from "../../../../../repository/FirebaseRemoveTask";

const DropdownMenu = ({ defaultStatu, setStatus, cardDataid, userobj, RefId }) => {
    const [statusTask, setStatusTask] = useState(defaultStatu)

    const [showMenu, setShowMenu] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    useEffect(() => {
        setStatus(statusTask)
    }, [setStatus, statusTask])

    const removeHandler = (passedId) => {
        let text = "Are you sure about that";
        // eslint-disable-next-line no-restricted-globals
        if (confirm(text) === true) {
            RemoveTaskHandler(passedId, userobj, RefId)
        }
    }

    return (
        <div className="DropDownMen_CardOptions relative z-50">
            <div
                className="dropdown-icon cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
            >
                <OptionIcon />
            </div>


            {showMenu && (
                <ul
                    className="dropdown-menu absolute w-[15vh] bg-white rounded-xl shadow-lg mt-2"
                    ref={dropdownRef}

                >
                    <li value='todo' onClick={() => setStatusTask('todo')} className="dropdown-item cursor-pointer rounded-t-xl hover:bg-[#1DA1F2] px-3 py-[6px] text-[18px] hover:text-white">
                        Todo
                    </li>
                    <li onClick={() => setStatusTask('inProgress')} className="dropdown-item cursor-pointer  hover:bg-[#1DA1F2] px-3 py-[6px] text-[18px] hover:text-white">
                        In Progress
                    </li>
                    <li onClick={() => setStatusTask('done')} className="dropdown-item cursor-pointer  hover:bg-[#1DA1F2] px-3 py-[6px] text-[18px] hover:text-white">
                        Done
                    </li>

                    <li onClick={() => removeHandler(cardDataid)} className="dropdown-item cursor-pointer rounded-b-xl hover:bg-[#f53232] px-3 py-[6px] text-[#f53232] text-[18px] hover:text-white">
                        Delete
                    </li>
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
