import cubeOne from '../resources/intro-cube1.png'
import introStairsOne from '../resources/intro-stairs1.png'
import './Images.css'

function Images() {
    return (
        <>
        <div className="image-container">
            <img className="cube-1" src={cubeOne} alt="cube1" />
            <img className="stairs-1" src={introStairsOne} alt="stairs1" />
        </div> 
        </>
    )
}

export default Images;