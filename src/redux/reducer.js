import { ImageCaptured, SaveImage } from "./actions"

const initialState = {
    data : [],
    isCaptureDone:false,
    capturedUrl:''
}

const reducer = (state = initialState, action) =>{
            console.log(state.isCaptureDone)
            switch(action.type){
                // case ImageCaptured:
                //     return {
                //         ...state,
                //         isCaptureDone:!state.isCaptureDone
                //     }
                case SaveImage:
                    console.log('request coming in reducer')
                    return {
                        ...state,
                        isCaptureDone:!state.isCaptureDone,
                        capturedUrl:action.url
                    }
                default:
                    return {
                        ...state
                    }
            }
        }

export default reducer