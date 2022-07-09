let initState = {
    maxZoomOutFlag: true,
    windowWidth: 0,
    windowHeight: 0,
    mapWidth: 591,
    mapHeight: 631,
    mapPosTop: 20,
    mapPosLeft: -296,
    zoom : 0,
    leftBarFlag: false,
    rightBarFlag: false,
    smoothZoomFlag: true,
    currentId: '',
    myLandIds: [],
    viewSelection: 0
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'MAX_ZOOM_OUT_FLAG_CHANGE': {
            return {
                ...state,
                maxZoomOutFlag: false
            }
        }
        case 'RIGHT_BAR_CLOSE': {
            window.rightBarFlag = false
            return {
                ...state,
                rightBarFlag: false
            }
        }
        case 'RIGHT_BAR_OPEN': {
            window.rightBarFlag = true
            return {
                ...state,
                rightBarFlag: true
            }
        }
        case 'LEFT_BTN_CLICKED': {
            return {
                ...state,
                leftBarFlag: !state.leftBarFlag
            }
        }
        case 'WINDOWS_SIZE_CHANGED': {
            // console.log("Windows Size Changed: ", action.payload.width, action.payload.height)
            
            return {
                ...state,
                windowWidth: action.payload.width,
                windowHeight: action.payload.height
            }
        }
        case 'PLUS_BTN_CLICKED': {
            // console.log("PLUS_BTN_CLICKED")
            if(state.zoom>=5) return {...state}
            return {
                ...state,
                mapPosTop: state.mapPosTop - state.mapHeight/4,
                mapPosLeft: state.mapPosLeft*2,
                mapWidth: state.mapWidth * 2,
                mapHeight: state.mapHeight * 2,
                zoom: state.zoom+1,
                smoothZoomFlag: true,
            }
        }
        case 'MINUS_BTN_CLICKED': {
            // console.log('MINUS_BTN_CLICKED')
            if(state.zoom<=-1) return {...state}
            return {
                ...state,
                mapPosTop: state.mapPosTop + state.mapHeight/8,
                mapPosLeft: state.mapPosLeft/2,
                mapWidth: state.mapWidth * 0.5,
                mapHeight: state.mapHeight * 0.5,
                zoom: state.zoom-1,
                smoothZoomFlag: true,
            }
        }
        case 'SET_MOVEMENT': {
            return {
                ...state,
                mapPosTop: state.mapPosTop + action.payload.yy,
                mapPosLeft: state.mapPosLeft + action.payload.xx,
                smoothZoomFlag: false,
            }
        }
        case 'SET_CURRENT_ID': {
            return {
                ...state,
                currentId: action.payload.id
            }
        }
        case 'ADD_TO_MY_LAND': {
            // console.log("ADD_TO_MY_LAND")
            var tempMyLandIds = state.myLandIds
            tempMyLandIds.forEach((item)=>{
                // console.log(item)
                if(item === state.currentId) return{...state}
            })
            tempMyLandIds.push(state.currentId)
            window.myLandIds = tempMyLandIds
            window.turnToRed = true
            return{
                ...state,
                myLandIds: tempMyLandIds
            }
        }
        case 'VIEW_ITEM_SELECTED': {
            var tempID =action.payload.id === state.viewSelection? 0 : action.payload.id
            window.viewSelection = tempID
            return {
                ...state,
                viewSelection: tempID,
                rightBarFlag: false
            }
        }
        case 'SET_DEFAULT': {
            console.log(`Setting default`);
            state = initState;
            return { ...state }
        }
        default: return state
    }

}

export default reducer;