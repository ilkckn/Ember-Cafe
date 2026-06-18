import { useNavigate } from "react-router-dom";
import "./FindYourTable.css"

const FindYourTable = () => {
  const navigate = useNavigate();
  
  return (
    <section className="find-your-table-container">
      <p>visit us</p>
      <h1>Find Your Table at the Hearth</h1>
      <span>Open daily from 7:00 AM — 8:00 PM.</span>
      <span>123 Artisan Alley, Roasted District.</span>
      <div className="btns">
        <button onClick={() => navigate("/find-your-cafe")}>get directions</button>
        <button onClick={() => navigate("/menu")}>see full menu</button>
      </div>
    </section>
  )
}

export default FindYourTable