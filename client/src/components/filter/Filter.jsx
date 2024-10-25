import './filter.scss'
function Filter(){
    return(
        <div className="filter">
            <h1>
                Search Result for <b>Lucknow</b>
            </h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type="text" id='city' placeholder='City Location'/>
                </div>
            </div>
            <div className="bottom">
            <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>

                    </select>
                </div>
                <div className="item">
                    <label htmlFor="property">Property</label>
                   <select name="property" id="property">
                   <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="conda">Conda</option>
                    <option value="land">Land</option>
                   </select>
                </div>
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type="text" id='city' placeholder='City Location'/>
                </div>
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type="text" id='city' placeholder='City Location'/>
                </div>
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type="text" id='city' placeholder='City Location'/>
                </div>
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Filter