import { useEffect, useRef, useState } from 'react';


export const useShowModal = () => {

    const [show, setShow] = useState<any>(false);
    const dropDownRef: { current: { contains: Function} | undefined } = useRef();

    const handler = (event:Event): null | void => {

        if (!dropDownRef.current?.contains(event.target)) {

            if (show) {

                setShow(false);

            } else
                return null;

        }
    
    };

    useEffect(() => {

        window.addEventListener('click', handler);

        return () => {

            window.removeEventListener('click', handler);
        
        };

    }, [show]);

    return [show, setShow, dropDownRef];

};

