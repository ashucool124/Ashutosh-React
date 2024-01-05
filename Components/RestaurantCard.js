import { IMG_CDN_URL } from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = (props) => {
  const {resData} =props
  const {name,cuisines,avgRating,costForTwo,cloudinaryImageId,sla} = resData?.info
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <span>
        <h4
          style={
            avgRating < 4 ? { backgroundColor: "red" } : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{costForTwo}</h4>
      </span>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
