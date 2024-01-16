import clientImage from "../../assests/image/ana.jpg";
import "./ClientReview.css";
const Reviews = () => {
  return (
    <>
      <div className="review_container">
        <div className="client_image">
          <div className="client_image_container">
            <img src={clientImage} alt="" />
          </div>
          <div className="client_name">
            <h3>sushma</h3>
            <div className="star_icons">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          fugiat. Officia, aliquam culpa voluptates harum dicta dolore libero
          magni maiores unde cum ratione pariatur non exercitationem eligendi
          consequatur necessitatibus eaque.
        </p>
      </div>
    </>
  );
};
export default Reviews;
