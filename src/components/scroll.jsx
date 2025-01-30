import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        const handleScrollToTop = () => {
            try {
                // Try modern browsers first
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'instant'
                });
            } catch (error) {
                // Fallback for older browsers
                window.scrollTo(0, 0);
            }
        };

        handleScrollToTop();
    }, [location]); // Trigger on location change

    return null;
}

export default ScrollToTop;