import { useState } from 'react';

const useOutside = (modal: any, open: boolean) => {

    const [showModal, setShowModal] = useState(false);

    document.addEventListener('mousedown', handleClickOutside);


    function handleClickOutside(event:Event) {

        if (modal.current && !modal.current.contains(event.target)) {

            if (open) {

                setShowModal(true);
            
            }

            document.removeEventListener('mousedown', handleClickOutside);

        }

    }
    
    return { showModal, setShowModal };

};

export default useOutside;