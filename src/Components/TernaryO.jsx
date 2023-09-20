/* eslint-disable react/prop-types */

import { useContext } from "react"
import "../Styles/TernaryO.css"
import { AppContext } from "../Pages/context"


const TernaryO = ({isLoggedIn}) => {
const JJ = isLoggedIn ? "AJ" : "AJJ"

// const DisplayName= isLoggedIn || "Nullish Coalescing Operator (??) che "
// console.log("DisplayName >>>" ,DisplayName);

 const Try = useContext(AppContext)
  return (
    <div>
        <h1>{Try}</h1>
  <h1 className={JJ}> YOOO</h1>
        {isLoggedIn ? ( <h1>Yooo loo </h1>):(<h1>Madarchod</h1>)}

        </div>
  )
}

export default TernaryO 