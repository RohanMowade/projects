import profilePic from './assets/pp.jpg'
function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Rohan Mowade</h2>
            <p className='card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis illum perferendis dolorem magnam necessitatibus accusantium exercitationem tempore sit quas, velit facilis earum rerum at tempora neque corrupti ipsam eaque rem?</p>
        </div>
    )
}
export default Card