import React from "react";
import LazyLoad from 'react-lazy-load';
import '../css/gallery.scss';
import imagesInfo from "./imagesInfo.js"

function Gallery(props) {
    const gallery = props.gallery;
    const GalleryImg = imagesInfo.filter((item)=> item.prof === gallery).map((e)=> e.gallery.map((e)=> e.src));
    const result = GalleryImg.map((e)=>
        e.map((t)=>{
            return(
                <LazyLoad key={t.id} >
                        <img src={require(`../img/items/${t}`)}/>
                </LazyLoad>
            )
        })
    );
    //(gallery === 'programmer' ? "img-item-site" : "img-item-game")
    return (
        <div className="slider">
            <h2>Items</h2>
            <div className="gallery">
                {result}
            </div>
        </div>
    );
}
export default Gallery;