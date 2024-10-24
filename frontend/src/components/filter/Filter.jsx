import "./filter.scss";

export default function Filter() {
  return (
    <div className="filter">
      <h1>
        Search result for <a href="#">london</a>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City location"
          />
        </div>
      </div>

      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="any">Any</option>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="any">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">land</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="city">Max Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">location</label>
          <input type="text" id="bedroom" name="bedroom" placeholder="any" />
        </div>
        <button>
          <img src="../../../public/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}
