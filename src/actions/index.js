export const maxZoomOutFlagChange = () => {
    return {
        type: 'MAX_ZOOM_OUT_FLAG_CHANGE'
    }
}

export const rightBarClose = () => {
    return {
        type: 'RIGHT_BAR_CLOSE'
    }
}

export const rightBarOpen = () => {
    return {
        type: 'RIGHT_BAR_OPEN'
    }
}

export const leftBtnClicked = () => {
    return {
        type: 'LEFT_BTN_CLICKED'
    }
}

export const plusBtnClicked = () => {
    return {
        type: 'PLUS_BTN_CLICKED'
    }
}

export const minusBtnClicked = () => {
    return {
        type: 'MINUS_BTN_CLICKED'
    }
}

export const windowSizeChanged = (width, height) => {
    return {
        type: 'WINDOWS_SIZE_CHANGED',
        payload: {
            width: width,
            height: height
        }
    }
}

export const setMovement = (xx, yy) => {
    return {
        type: 'SET_MOVEMENT',
        payload: {
            xx: xx,
            yy: yy
        }
    }
}

export const setCurrentId = (id) => {
    return {
        type: 'SET_CURRENT_ID',
        payload: {
            id: id
        }
    }
}

export const addToMyLand = () => {
    return {
        type: 'ADD_TO_MY_LAND'
    }
}

export const viewItemSelected = (id) =>{
    return {
        type: 'VIEW_ITEM_SELECTED',
        payload: {
            id: id
        }
    }
}

export const setDefault = () => {
    return {
        type: 'SET_DEFAULT'
    }
}