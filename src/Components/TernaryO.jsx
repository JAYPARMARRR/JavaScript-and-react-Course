/* eslint-disable react/prop-types */


const TernaryO = ({isLoggedIn}) => {

  return (
    <div>
        <h1> Jayu  </h1>

        {isLoggedIn ? ( console.log(isLoggedIn) || <h1>Yooo loo</h1>):(<h1>Madarchod</h1>)}

        </div>
  )
}

export default TernaryO