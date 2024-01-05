import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect (()=>{
    fetchData()
  },[])

  const fetchData = async() =>{
    const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2124007&lng=78.1772053&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    console.log(json)
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, restaurants);
            // update the state of restaurants list
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
