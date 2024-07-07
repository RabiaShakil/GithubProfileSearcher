import React from "react";
import  { useState } from "react";
import './GitHubProfileSearch.css';

function GitHubProfileSearch() {
  const [results, setResults] = useState([]);

  const SearchUserProfile =  async(e) => {
    var name = document.getElementById("inputName").value;
    const response = await fetch(`https://api.github.com/search/users?q=${name}`);
    const data = await response.json();
    setResults(data.items);
  };

  return (
    <div className="Container"> 
    <h1>GitHub Profile Search</h1>
      <input type="text" id="inputName"  />
      <button onClick={SearchUserProfile}>Search</button>
      <br></br> <br></br> <br></br>
      <ul> 
        {results.map((user) => (
          <li key={user.id}>
            <br></br>
            <img src={user.avatar_url} height="300px" width="300px" alt='No profile for Display' />
           
            <p>Link to Github Profile:</p>
            <a  href={user.html_url}>{user.html_url}</a>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GitHubProfileSearch;
