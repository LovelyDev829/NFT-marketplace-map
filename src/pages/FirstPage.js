import React, { useEffect } from 'react'
import './FirstPage.css'
import Header from '../components/Header'
import MapButtons from '../components/MapButtons'
import FirstMap from '../assets/Land-green.png'
import LeftBar from '../components/LeftBar'
import { windowSizeChanged, rightBarOpen } from '../actions/index';

//import SS from './svg';


import { useSelector, useDispatch } from 'react-redux';
import RightBar from '../components/RightBar'
function FirstPage() {
    const maxZoomOutFlag = useSelector(state => state.maxZoomOutFlag)
    const mapWidth = useSelector(state => state.mapWidth)
    // const mapHeight = useSelector(state => state.mapHeight)
    const zoom = useSelector(state => state.zoom)
    const mapPosTop = useSelector(state => state.mapPosTop)
    const mapPosLeft = useSelector(state => state.mapPosLeft)
    const smoothZoomFlag = useSelector(state => state.smoothZoomFlag)
    const dispatch = useDispatch()
    const windowSizeChangeD = (width, height) => {
        dispatch(windowSizeChanged(width, height));
    }
    const rightBarOpeN = () => {
        dispatch(rightBarOpen());
    }
    useEffect(() => {
        var tempWindowWidth = window.innerWidth
        var tempWindowHeight = window.innerHeight
        windowSizeChangeD(tempWindowWidth, tempWindowHeight - 98)
    })
    // console.log("FirstPage-Refresh-----------------")
    return (
        <div className='FirstPage' >
            <Header />
            <div className='Body'>
                <MapButtons />
                <LeftBar />
                <RightBar />
                <div className='map' id='map'>
                    <div className='relative'>
                        <div className={zoom>=3 ? (smoothZoomFlag? 'smooth-zoom': '') : 'hidden'} id='svgContainer'
                            onClick={rightBarOpeN}
                            style={{ width: mapWidth, position: 'absolute', top: mapPosTop, left: mapPosLeft, zIndex:5 }}></div>
                        <img className={zoom>=3 ? 'hidden' : (smoothZoomFlag? 'smooth-zoom': '')} src={FirstMap} alt="AltImg"
                            style={{ width: mapWidth, position: 'absolute', top: mapPosTop, left: mapPosLeft, zIndex:4, pointerEvents: 'none'}}/>
                        <div className='pointing-notes'>
                            <div className={maxZoomOutFlag ? 'point-tr' : 'hidden'}>
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4" cy="4" r="4" fill="#1CC298" />
                                </svg>
                                <svg width="96" height="2" viewBox="0 0 96 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M96 1.00001L0 1" stroke="#1CC298" />
                                </svg>
                                <div className='point-text'>
                                    <p>GREEN ZONE</p>
                                    <p>DESCRIPTION</p>
                                </div>
                            </div>
                            <div className={maxZoomOutFlag ? 'point-tl' : 'hidden'}>
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4" cy="4" r="4" fill="#A2A2A2" />
                                </svg>
                                <svg width="2" height="57" viewBox="0 0 2 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 57V0" stroke="#A1A1A1" />
                                </svg>
                                <div className='point-text'>
                                    <p>COMING SOON</p>
                                    <p>PURPLE ZONE</p>
                                </div>
                            </div>
                            <div className={maxZoomOutFlag ? 'point-bl' : 'hidden'}>
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4" cy="4" r="4" fill="#A2A2A2" />
                                </svg>
                                <svg width="116" height="2" viewBox="0 0 116 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 1H116" stroke="#A1A1A1" />
                                </svg>
                                <div className='point-text'>
                                    <p>COMING SOON</p>
                                    <p>PURPLE ZONE</p>
                                </div>
                            </div>
                            <div className={maxZoomOutFlag ? 'point-br' : 'hidden'}>
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4" cy="4" r="4" fill="#A2A2A2" />
                                </svg>
                                <svg width="2" height="79" viewBox="0 0 2 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 0V79" stroke="#A1A1A1" />
                                </svg>
                                <svg width="146" height="2" viewBox="0 0 146 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M146 1.00001L0 1" stroke="#A1A1A1" />
                                </svg>
                                <div className='point-text'>
                                    <p>COMING SOON</p>
                                    <p>PURPLE ZONE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstPage