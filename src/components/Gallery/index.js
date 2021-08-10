import { useState, useEffect } from 'react';
import imageJSON from './gallery';
import './style.css';

function Gallery() {
    console.log('imageJSON: ', + imageJSON);

    const [imageArr, setImageArr] = useState(imageJSON.images);

    // useEffect(() => {
    //     console.log('imageJSON: ', + imageJSON);
    //     setImageArr(imageJSON);
    //     console.log(imageJSON)
    // }, [])

    return (
        <main>
            <div className='container images-wrapper'>
                <div className='row'>
                    {imageArr.imageArray.map(image => {
                        console.log(image);
                        return (
                            <div className='col-12 col-md-3 individual-wrapper'>
                                <img className='image' src={'./images/' + image.image} alt='poorly-described-pic' />
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </main>
    )
}

export default Gallery;