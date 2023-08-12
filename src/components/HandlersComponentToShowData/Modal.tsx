import { ReactNode, useState } from 'react';

const Modal = ({ children, buttonTitle }: { children: ReactNode, buttonTitle: string }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    if (!isOpen) {
        return (
            <button
                className='m-1 px-2 py-1 rounded-xl border-teal-400 text-teal-600 border-y-2 border-x-2'
                onClick={() => setIsOpen(true)}
            >{buttonTitle}</button>
        )
    } else {
        return (
            <div className="modal">
                <div className="modal-content">
                    {children}
                    <button className="m-1 px-2 py-1 rounded-xl border-teal-400 text-teal-600 border-y-2 border-x-2" onClick={() => setIsOpen(false)}>Close</button>
                </div>
            </div>
        );

    }
};

export default Modal;
