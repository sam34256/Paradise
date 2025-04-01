import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";

import snakeImg from "../assets/img/snake.png";
import monsteraImg from "../assets/img/monstera.png";
import cactusImg from "../assets/img/cactus.png";
import aloeVeraImg from "../assets/img/aloeVera.png";
import fiddleLeafImg from "../assets/img/fiddleLeaf.png";
import zzPlantImg from "../assets/img/zzplant.png";


const plants = [
  { id: 1, name: "Snake Plant", price: 25, category: "Low Maintenance", img: snakeImg },
  { id: 2, name: "Monstera", price: 40, category: "Tropical", img: monsteraImg },
  { id: 3, name: "Cactus", price: 15, category: "Desert Plants", img: cactusImg },
  { id: 4, name: "Aloe Vera", price: 20, category: "Healing Plants", img: aloeVeraImg },
  { id: 5, name: "Fiddle Leaf Fig", price: 50, category: "Large Plants", img: fiddleLeafImg },
  { id: 6, name: "ZZ Plant", price: 30, category: "Low Maintenance", img: zzPlantImg },
];

const ProductListing = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [query, setQuery] = useState("");

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase() || query.toLowerCase())
  );

  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-3 has-text-centered">Our Houseplants</h2>

        {/* Search Bar */}
        <div className="field has-addons has-text-centered mb-5">
          <div className="control is-expanded">
            <input
              type="text"
              className="input is-rounded"
              placeholder="Search for plants..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="control">
            <button className="button is-info is-rounded">Search</button>
          </div>
        </div>

        {/* Plant Grid */}
        <div className="columns is-multiline">
          {filteredPlants.map((plant) => {
            const cartItem = cartItems.find((item) => item.id === plant.id);
            return (
              <div key={plant.id} className="column is-one-third">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={plant.img} alt={plant.name} />
                    </figure>
                  </div>
                  <div className="card-content has-text-centered">
                    <h3 className="title is-5">{plant.name}</h3>
                    <p className="subtitle is-6">${plant.price}</p>

                    {/* Cart Actions */}
                    <div className="buttons is-centered">
                      {cartItem ? (
                        <div className="has-text-centered">
                          <button
                            className="button is-danger is-small"
                            onClick={() => dispatch(removeFromCart(plant))}
                          >
                            −
                          </button>
                          <span className="mx-2">{cartItem.quantity}</span>
                          <button
                            className="button is-success is-small"
                            onClick={() => dispatch(addToCart(plant))}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          className="button is-success is-rounded is-fullwidth custom-btn"
                          onClick={() => dispatch(addToCart(plant))}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
};

export default ProductListing;
