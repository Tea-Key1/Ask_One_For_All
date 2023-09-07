import { useScroll } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";

export default function ScrollManager(props){
    const { section, setSection } = props;
    const data = useScroll();
    const lastScroll = useRef(0)
    const isAnimating = useRef(false)
    data.fill.classList.add("top-0");
    data.fill.classList.add("absolute")

    useEffect(()=>{
        gsap.to(data.el,{
            duration:1,
            scrollTop: section * data.el.clientHeight,
            onStart: ()=>{
                isAnimating.current = true;
            },
            onComplete: ()=>{
                isAnimating.current = false
            },
        })
    },[section])

    useFrame(()=>{
        if(isAnimating.current){
            lastScroll.current = data.scroll.current;
            return;
        }
    })
    return null;
}