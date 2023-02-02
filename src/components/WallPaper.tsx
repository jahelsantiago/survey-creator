import React from 'react'
import leftIcons from "../assest/br-fullcolor.png"
import rightIcons from "../assest/bl-fullcolor.png"
import leftNoIcons from "../assest/bl-noicons.png"
import rightNoIcons from "../assest/br-noicons.png"
import leftGray from "../assest/br-gray.png"
import rightGray from "../assest/bl-gray.png"

type background = 'icons' | 'noicons' | 'gray' | undefined

type Props = {
    children: React.ReactNode,
    background?: background
}

export default function WallPaper({children, background}: Props) {
    let left = leftIcons
    let right = rightIcons
    switch (background) {
        case 'icons':
            left = leftIcons
            right = rightIcons
            break;
        case 'noicons':
            left = leftNoIcons
            right = rightNoIcons
            break;
        case 'gray':
            left = leftGray
            right = rightGray
            break;
        default:
            break;
    }


  return (
    <div className='min-h-full min-w-full relative' >
        <img src={left} alt='wallpaper' className='absolute bottom-0 left-0 hidden xl:block z-20'/>
        <img src={right} alt='wallpaper' className='absolute bottom-0 right-0 h-2/6  z-20'/>
        <div className=''>
            {children}
        </div>
    </div>
  )
}