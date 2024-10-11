import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss';
function HomePage(){
    return(
     <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
            <h1 className='title'>
                Find Real Estate & Get Your Dream Place.
            </h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus molestias animi voluptatibus sapiente obcaecati veniam quos cumque omnis? Error animi quo eligendi voluptas saepe harum, amet corrupti ipsam dolore optio doloremque ipsum voluptates impedit itaque atque? Aperiam quas repellendus sapiente?
            </p>
            <SearchBar/>

            <div className="boxes">
                <div className="box">
                    <h1>21+</h1>
                    <h2>Year of Experience</h2>
                </div>
                <div className="box">
                    <h1>200</h1>
                    <h2>Awards Gaines</h2>
                </div>
                <div className="box">
                    <h1>1200+</h1>
                    <h2>Property Ready</h2>
                </div>
            </div>

            </div>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
     </div>
    )
}

export default HomePage