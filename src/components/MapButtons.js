import React from 'react'
import 'animate.css'
import './MapButtons.css'
import { maxZoomOutFlagChange, leftBtnClicked, plusBtnClicked, minusBtnClicked } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';

function MapButtons() {
    const leftBarFlag = useSelector(state => state.leftBarFlag)
    const dispatch = useDispatch()
    const leftBtnClickeD = () => {
        dispatch(leftBtnClicked());
        // dispatch(maxZoomOutFlagChange());
    }
    const plusBtnClickeD = () => {
        dispatch(plusBtnClicked());
        dispatch(maxZoomOutFlagChange());
    }
    const minusBtnClickeD = () => {
        dispatch(minusBtnClicked());
        dispatch(maxZoomOutFlagChange());
    }
    return (
        <div className='MapButtons'>
            <div className={ leftBarFlag ? 'map-button slide-right' : 'map-button'} onClick={leftBtnClickeD}>
                <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.92695 6.15488H18.427V8.85488H4.92695V6.15488ZM0.876953 0.754883H22.477V3.45488H0.876953V0.754883ZM8.97695 11.5549H14.377V14.2549H8.97695V11.5549Z" fill={leftBarFlag? "#EEBC4E" : "#AAAAAA"} />
                </svg>
            </div>
            <div className={ leftBarFlag ? 'map-button slide-right' : 'map-button'} onClick={plusBtnClickeD}>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.664062 6.95496H16.6899V9.74205H0.664062V6.95496Z" fill="#AAAAAA"/>
                    <path d="M10.0703 0.335571L10.0703 16.3614L7.28322 16.3614L7.28322 0.335571L10.0703 0.335571Z" fill="#AAAAAA"/>
                </svg>
            </div>
            <div className={ leftBarFlag ? 'map-button slide-right' : 'map-button'} onClick={minusBtnClickeD}>
                <svg width="17" height="4" viewBox="0 0 17 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.664062 0.277344H16.6899V3.06444H0.664062V0.277344Z" fill="#4D4E4D" fillOpacity="0.5" />
                </svg>

            </div>
        </div>
    )
}

export default MapButtons