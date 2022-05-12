import React, { useState, useRef } from 'react'
import './App.css';
import FirstPage from './pages/FirstPage';
import { setMovement, setCurrentId } from './actions/index';
import { useDispatch, useSelector } from 'react-redux';
var downFlag = false;
function App() {
  const maxZoomOutFlag = useSelector(state => state.maxZoomOutFlag)
  const dispatch = useDispatch()
  const setMovemenT = (xx, yy) => {
    dispatch(setMovement(xx, yy));
  }
  const setCurrentID = (id) => {
    dispatch(setCurrentId(id));
  }
  return (
    <div className="App"  
    onMouseDown={()=>{
      downFlag = true;
    }}
    onMouseUp={()=>{
      downFlag = false
      const currentId = window.currentId
      // console.log("currentId--------------", currentId)
      setCurrentID(window.currentId)
    }}
    onMouseMove={(e)=>{
      if(downFlag && !maxZoomOutFlag){
        e.stopPropagation();
        setMovemenT(e.movementX, e.movementY)
      }
    }}>
      <FirstPage />
    </div>
  );
}

export default App;
