import {useState, useEffect} from 'react'
import { FaAngleDoubleUp, } from "react-icons/fa"


const ScrollToTop = () => {
    const [showBackToTop, setBackToTop] = useState(false);


    useEffect(() => {
    window.addEventListener('scroll',() => {
        if (window.scrollY > 300) { 
            setBackToTop(true)
        } else {
            setBackToTop(false)
        }
    })   
    }, []);

    const scrollTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
         })
        }
    
    return (
        <div>
            {showBackToTop && <FaAngleDoubleUp className='top-btn-style'onClick={scrollTop}/>}
        </div>
    )
}

export default ScrollToTop
