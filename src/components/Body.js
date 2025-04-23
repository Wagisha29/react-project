import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        //filter out the restaurants with rating less than 4.5
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => <RestaurantCard resData={restaurant} key={restaurant.info.id} />)
                }
            </div>
        </div>
    )
}

export default Body;

