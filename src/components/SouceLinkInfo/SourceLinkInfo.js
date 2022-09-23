
import { useEffect, useState } from "react"
function SourceLinkInfo() {
const API_URL = "https://api.github.com/repos/owid/covid-19-data/commits";
const [commits, setCommits] = useState(null)

useEffect(() => {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => setCommits(data));
}, []);
let time;
let updateText = '';
if(commits) { 
  time = commits.find(commit => commit.commit.message === "data(megafile): automated update") 
  console.log(time.commit.author.date);
  let currentTime = new Date();

  const updateDate = new Date(time.commit.author.date);
  const diffInMilliseconds = Math.abs(currentTime - updateDate);
  const minutes = Math.floor((diffInMilliseconds / 1000) / 60)
  updateText = `Updated ${minutes} minutes ago`
}

  return (
    <>
    <small className="d-block my-2">
        Data on COVID-19 (coronavirus) <a href="https://github.com/owid/covid-19-data/tree/master/public/data">by Our World in Data</a>
        <span> · </span>
        {updateText}
    </small> 
    </>
  );
}
export default SourceLinkInfo;



// import { useContext } from "react";
// import { UserContext } from "../../utils/useContext";
//   const { covidData } = useContext(UserContext);