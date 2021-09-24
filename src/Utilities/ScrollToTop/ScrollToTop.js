import React,{useState,useEffect} from 'react';
import {useWindowScroll} from 'react-use';
import {FaChevronUp} from 'react-icons/fa';


const ScrollToTop= ()=> {
    const {y:pageYOffset} =useWindowScroll();
    const [visible,setVisiblity]=useState(false);

    useEffect(() => {
        if(pageYOffset>400){
            setVisiblity(true);
        }
        else{
            setVisiblity(false);
        }
    },[pageYOffset]);

    const scrollToTo=()=>window.scrollTo({top:0,behavior:"smooth"})

    if(!visible){
        return false;
    }

        return (
            <div className="scroll-to-top" onClick={()=>scrollToTo()} >
                <i><FaChevronUp/></i>
            </div>
        )
}

export default ScrollToTop
