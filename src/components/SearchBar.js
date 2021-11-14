import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [mfLink, setMfLink] = useState("")
  
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    if (searchWord === "") {
      setFilteredData([]);
    }
  };

  const fetchSearchData = async () => {
        const response = await fetch(`https://api.mfapi.in/mf/search?q=${wordEntered}`)
        const data = await response.json()
        setFilteredData(data)
    }
    var fullLink=""
  useEffect(() => {
    fetchSearchData();
    }   , [wordEntered])
    useEffect(()=>{
        fullLink=`https://api.mfapi.in/mf/${mfLink}`
        console.log(fullLink)
    },[mfLink])
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    setMfLink("");
  };
  

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Enter Mutual Fund"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value) => {
            return (
              <a className="dataItem" onClick={(event)=>{ event.preventDefault();setMfLink(value.schemeCode); console.log(mfLink)}} >
                <p>{value.schemeName} </p>
              </a>
            );
          })}
        </div>
      )}
     
      {mfLink.length !==0 && (
        
        <ul>
          <li><span>MF API URL : </span> <a  href={`https://api.mfapi.in/mf/${mfLink}`} id="apiUrl">{`https://api.mfapi.in/mf/${mfLink}`}</a></li>
        </ul>
      )}
        
    </div>
  );
}

export default SearchBar;