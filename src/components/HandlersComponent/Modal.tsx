import { ReactNode, useState } from 'react';
import { FilterList, Close } from "@mui/icons-material";

const Modal = ({ children, buttonTitle }: { children: ReactNode, buttonTitle: string }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    if (!isOpen) {
        return (
            
            <button
                className='m-1 ml-4 w-1/4 md:w-1/12 md:m-auto flex justify-around items-center px-2 py-1 rounded-xl border-teal-400 text-teal-600 border-y-2 border-x-2'
                onClick={() => setIsOpen(true)}
            >
                <FilterList />
                { buttonTitle}</button>
        )
    } else {
        return (
            <div className="modal">
                <div className="modal-content">
                    {children}
                    <button className="m-1 w-1/4 flex justify-around items-center px-2 py-1 rounded-xl border-teal-400 text-teal-600 border-y-2 border-x-2" onClick={() => setIsOpen(false)}>
                    <Close />
                    Close
                    </button>
                </div>
            </div>
        );

    }
};

export default Modal;
