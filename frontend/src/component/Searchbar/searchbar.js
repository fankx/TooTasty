import {Link} from "react-router-dom";

const Searchbar = () => {
    return(
        <>
            <div className="flex mb-4">
                <div className="row">
                    <div className="col-11">
                        <input className="form-control" type="text" placeholder="Search"/>
                    </div>
                    <div className="col-1">
                        <button type="button" className="btn btn-outline-primary hero-btn">Search</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Searchbar;