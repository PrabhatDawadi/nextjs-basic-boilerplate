import { useEffect, useRef } from 'react';

export const useOutsideClick = ({ state, callBack }) => {

    const node = useRef();
    useEffect(() => {
        if (state) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [state]);

    const handleOutsideClick = (e) => {
        if (node.current && node.current.contains(e.target)) {
            return;
        }
        callBack(false);
    };

    return [node];
};