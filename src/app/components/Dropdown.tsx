import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface DropdownProps {
    buttonText: string;
    contents: string[];
    selected: string;
    onSelect: (item: string) => void;
}

export default function Dropdown({ buttonText, contents, selected, onSelect }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(buttonText);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item: string) => {
        onSelect(item);
        setSelectedItem(item);
        setIsOpen(false);
    };

    useEffect(() => {
        setSelectedItem(selected || buttonText);
    }, [selected, buttonText]);

    return (
        <div className="relative w-40 my-2">
            <DropdownButton buttonText={selectedItem} onClick={toggleDropdown} />
            <DropdownContent
                buttonText={buttonText}
                isOpen={isOpen}
                contents={contents}
                onItemClick={handleItemClick}
            />
        </div>
    );
}

interface DropdownButtonProps {
    buttonText: string;
    onClick: () => void;
}

function DropdownButton({ buttonText, onClick }: DropdownButtonProps) {
    return (
        <div
            className="flex justify-between w-full items-center rounded-lg border border-gray-300 bg-white shadow-md hover:bg-gray-50 transition-colors ease-in duration-200 px-4 py-2 cursor-pointer"
            onClick={onClick}
            aria-expanded={false}
            role="button"
            aria-haspopup="listbox"
        >
            <span className="font-semibold font-notothai text-gray-700">{buttonText}</span>
            <span>
                <FaChevronDown />
            </span>
        </div>
    );
}

interface DropdownContentProps {
    buttonText: string;
    isOpen: boolean;
    contents: string[];
    onItemClick: (item: string) => void;
}

function DropdownContent({ buttonText, isOpen, contents, onItemClick }: DropdownContentProps) {
    if (!contents.includes(buttonText)) {
        contents.unshift(buttonText);
    }

    return (
        <div
            className={`absolute z-30 w-full border border-gray-300 bg-white shadow-md rounded-lg transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden overflow-y-scroll mt-1`}
            role="listbox"
        >
            {contents.map((item, index) => (
                <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-center font-notothai font-semibold text-gray-700"
                    onClick={() => onItemClick(item)}
                    role="option"
                >
                    {item}
                </div>
            ))}
        </div>
    );
}