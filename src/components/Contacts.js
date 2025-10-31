import address from "../images/address.png";
import phone from "../images/phone.png";
import email from "../images/email.png";
import "../css/contacts.css";

const StaffDetails = () => {
  return (
    <div>
      <footer className="contact">
        <h2>Contact Us</h2>
        <div className="img-text">
          <div className="adrs-txt">
            <img className="adrs" src={address} alt="" />
            <h3> Address: AutoLab, Dhaka, BD</h3>
          </div>
          <div className="phn-txt">
            <img className="phn" src={phone} alt="" />
            <h3> Number: 01234-56789</h3>
          </div>
          <div className="eml-txt">
            <img className="email" src={email} alt="" />
            <h3> Email: autolab@gmail.com</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StaffDetails;
