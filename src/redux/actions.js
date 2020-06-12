export const ImageCaptured = 'ImageCaptured'

export const imageCaptured = () =>{
    return {
        type:ImageCaptured
    }
}

export const SaveImage = 'SaveImage'

export const saveImageUrl = (url) =>{
    console.log('request coming in save immage')
    return{
        type:SaveImage,
        url
    }
}