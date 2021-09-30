import React, {useState} from "react"

const day = new Date();
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
const today = weekday[day.getDay()];

export const PropsAndState = ({ myUser }) => {
    let [countClicks, setCountClicks] = useState(0)

    const handleClick = () => {
      const newCountClicks = ++countClicks
      setCountClicks(newCountClicks)
    }

  return (
    <>
      <h3>Welcome, {myUser.name}, and {myUser.pet} </h3>
      <p>Today is {today}</p>

      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
    </>
  )
}