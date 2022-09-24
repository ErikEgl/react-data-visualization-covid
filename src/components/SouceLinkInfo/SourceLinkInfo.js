
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
  let currentTime = new Date();

  const updateDate = new Date(time.commit.author.date);
  const diffInMilliseconds = Math.abs(currentTime - updateDate);
  const totalMinutes = Math.floor((diffInMilliseconds / 1000) / 60)
  function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    if(padTo2Digits(hours) == 0) {
      return `${padTo2Digits(minutes)} minutes ago`;
    } else {
      return `${padTo2Digits(hours)} hours and ${padTo2Digits(minutes)} minutes ago`;
    }
   
  }

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
  updateText = `Updated ${toHoursAndMinutes(totalMinutes)}`
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