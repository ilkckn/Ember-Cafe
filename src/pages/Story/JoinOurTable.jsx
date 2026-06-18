import { useNavigate } from "react-router-dom";
import "./JoinOurTable.css";

const JoinOurTable = () => {
  const navigate = useNavigate();

  return (
    <section className="join-our-table-container">
      <div className="shape">
        <svg
          viewBox="0 0 1280 462"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,482 C0,300 100,80 500,80 C700,80 900,150 1280,460 C1450,400 1500,500 1100,602 Z"
            fill="var(--secondary-t20)"
            opacity="0.3"
          />
        </svg>
      </div>
      <h1>join our table</h1>
      <p>
        Experience the warmth of the hearth. Whether you're here for a quick
        espresso or a long afternoon of dreaming, there's a seat waiting for
        you.
      </p>
      <div className="btns">
        <button onClick={() => navigate("/menu")}>view the menu</button>
        <button onClick={() => navigate("/find-your-cafe")}>find a cafe</button>
      </div>
    </section>
  );
};

export default JoinOurTable;
