import Reviews from "./Reviews";
import "../css/customerreviews.css";

const CustomerReviews = () => {
  const allReviews = Reviews.map((review) => (
    <li key={review.id}>
      <div className="reviews-bg">
        <p>{review.rating} </p>
        <p>
          <h5>"{review.Comment}"</h5>
        </p>
        <div>
          <p>
            <strong style={{ marginTop: "5px" }}>{review.name} </strong>
          </p>
        </div>
        <p className="time">{review.time}</p>
        <br />
        <br />
      </div>
    </li>
  ));

  return (
    <main className="review-hd">
      <h1 style={{ textAlign: "center", color: "white" }}>
        What Our Customers Say
      </h1>
      <div
        style={{
          padding: "0",
          margin: "0",
        }}
      >
        {allReviews}
      </div>
    </main>
  );
};

export default CustomerReviews;
