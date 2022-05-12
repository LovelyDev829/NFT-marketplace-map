import React from 'react'
import './LeftBar.css'
import { useDispatch, useSelector } from 'react-redux';

function LeftBar() {
    const leftBarFlag = useSelector(state => state.leftBarFlag)
    return (
        <div className={ leftBarFlag ? 'LeftBar slide-right' : 'LeftBar'}>
            <p>MAPS</p>
            <div className='filter'>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.19983 7.2008L0.925167 13.4755C0.849475 13.5514 0.752972 13.6031 0.647872 13.6241C0.542773 13.6451 0.433801 13.6345 0.334749 13.5935C0.235697 13.5526 0.151019 13.4832 0.0914304 13.3941C0.031842 13.305 2.27661e-05 13.2002 0 13.0931V0.541552C2.27661e-05 0.434371 0.031842 0.329607 0.0914304 0.240519C0.151019 0.15143 0.235697 0.0820219 0.334749 0.041079C0.433801 0.000136073 0.542773 -0.0105006 0.647872 0.0105144C0.752972 0.0315294 0.849475 0.0832517 0.925167 0.159135L7.19983 6.4338C7.25028 6.48412 7.2903 6.54389 7.31761 6.6097C7.34491 6.67551 7.35897 6.74605 7.35897 6.8173C7.35897 6.88855 7.34491 6.9591 7.31761 7.0249C7.2903 7.09071 7.25028 7.15049 7.19983 7.2008Z" fill="#EEBC4E"/>
                </svg>
                <p>FILTER</p>
            </div>
            <div className='buttons'>
                <div className='button'>
                    <p>PREMIUM</p>
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.50004 0L1.99982 1.5L0.499956 0L0 0.5L1.49987 2L0 3.5L0.499956 4L1.99982 2.5L3.50004 4L4 3.5L2.50013 2L4 0.5L3.50004 0Z" fill="white"/>
                    </svg>
                </div>
                <div className='button'>
                    <p>3x3</p>
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.50004 0L1.99982 1.5L0.499956 0L0 0.5L1.49987 2L0 3.5L0.499956 4L1.99982 2.5L3.50004 4L4 3.5L2.50013 2L4 0.5L3.50004 0Z" fill="white"/>
                    </svg>
                </div>
            </div>
            <div className='selection-bar'>
                <p>DETAIL</p>
                <div className='selects'>
                    <div className='select'>
                        <div className='circle-out'></div>
                        <p>Sale</p>
                    </div>
                    <div className='select'>
                        <div className='circle-out'>
                            <div className='circle-in'></div>
                        </div>
                        <p>Premium</p>
                    </div>
                </div>
            </div>
            <div className='selection-bar'>
                <p>SIZE</p>
                <div className='selects'>
                    <div className='select'>
                        <div className='circle-out'></div>
                        <p>1 x 1</p>
                    </div>
                    <div className='select'>
                        <div className='circle-out'>
                            <div className='circle-in'></div>
                        </div>
                        <p>3 x 3</p>
                    </div>
                    <div className='select'>
                        <div className='circle-out'></div>
                        <p>6 x 6</p>
                    </div>
                    <div className='select'>
                        <div className='circle-out'></div>
                        <p>9 x 9</p>
                    </div>
                    <div className='select'>
                        <div className='circle-out'></div>
                        <p>12 x 12</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar