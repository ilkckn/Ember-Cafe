import "./Story.css";
import Community from "./Community";
import FirstEmber from "./FirstEmber";
import Philosophy from "./Philosophy";
import JoinOurTable from "./JoinOurTable";

const Story = () => {
  const scrollToRoast = () => {
    document.getElementById("roast-section")?.scrollIntoView({
      behavior: "smooth"
    });
  }
  
  return (
    <section className="story-container">
      <div className="container">
        <div className="hero">
          <div className="content">
            <p>Est.1994</p>
            <h1>Our Story</h1>
            <p>
              Born from a passion for the perfect roast, since 1994. We believe
              in the quiet magic of a shared cup and the warmth of a community
              hearth.
            </p>
            <button onClick={scrollToRoast}>explore the roast</button>
          </div>
        </div>
      </div>
      
      <div className="first-ember">
        <FirstEmber />
      </div>
      <div className="philosophy" id="roast-section">
        <Philosophy />
      </div>
      <div className="community">
        <Community />
      </div>
      <div className="join-our-table">
        <JoinOurTable />
      </div>
    </section>
  );
};

export default Story;
