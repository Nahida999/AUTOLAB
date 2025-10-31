import engine from "../images/engine.png";
import electric from "../images/electric.png";
import paint from "../images/paint.png";
import oil from "../images/oil.png";
import tier from "../images/tier.png";
import wash from "../images/wash.png";
import "../css/services.css";

const Services = () => {
  return (
    <div className="container">
      <h1 className="head" style={{ marginTop: "40px" }}>
        Our Services
      </h1>
      <p style={{ marginBottom: "40px", marginLeft: "10px" }}>
        We understand that your car is an important investment, and we take
        pride in providing our customers with the best possible services &
        pricing. When you bring your car to AutoLab, you can be confident that
        it will be in good Hands. AutoLab is a family-owned and operated auto
        repair shop that has been serving community over 12 years. We are
        commited to providing our customers with the highest quality car repair
        maintenance services with compititive prices.Our team of experienced and
        certified technicians are dedicated to keeping your car running smoothly
        and safely for years to come.We can handle everythign from routine
        check-ups to major repairs, using the latest technology to keep your car
        running safely.
      </p>
      <div className="service">
        <img className="resize-img" src={engine} alt=" " />

        <h2 style={{ marginTop: "30px" }}>Engine Works</h2>
        <p style={{ marginTop: "25px" }}>
          Car engine services include regular maintenance like air filter
          replacement, and spark plug changes, cooling system flushes, and
          timing belt replacement.
        </p>
      </div>
      <div className="service">
        <img className="resize-img-electric" src={electric} alt=" " />

        <h2>Car Electric Works</h2>
        <p>
          Electrical services like battery services, electical systems, power
          accessories, wiring & fuses, lighting & signals, etc are offered here.
        </p>
      </div>
      <div className="service">
        <img className="resize-img-paint" src={paint} alt=" " />
        <div style={{ marginTop: "14px" }}>
          <h2 style={{ marginTop: "30px" }}>Paint Repair </h2>
          <p>
            We can color your car with the new trend making it look like a new
            car.Our car.Our car paint options include various finishes.
          </p>
        </div>
      </div>
      <div className="service">
        <img className="resize-img-oil" src={oil} alt=" " />
        <div className="oil-text">
          <h2 style={{ marginTop: "50px" }}>Oil Change </h2>
          <p>
            Engine oil lubricates your engine's moving parts to reduce the
            damaging friction that reduces performance. Increasing the lifespan
            of car.
          </p>
        </div>
      </div>
      <div className="service">
        <img className="resize-img-tier" src={tier} alt=" " />

        <h2>Tier Services</h2>
        <p>
          we have services like installation,repair, rotation, balancing, and
          replacement, wheel alignment, seasonal tire service etc.
        </p>
      </div>
      <div className="service">
        <img className="resize-img-wash" src={wash} alt=" " />

        <h2 style={{ marginTop: "32px" }}>Car Wash </h2>
        <p>
          Make cars crystal clear with all the new technologies we have.We offer
          basic wash, full-service car wash and detailing services.
        </p>
      </div>
    </div>
  );
};

export default Services;
