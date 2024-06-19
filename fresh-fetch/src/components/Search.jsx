import searchIcon from "../images/search-icon.png";
import "../styles/Search.css"

export default function Search() {
    return (
       <>
        <button className="search">
            <p>Search</p>
            <img src={searchIcon} alt="Search Icon" />
        </button>
       </> 
    )
}