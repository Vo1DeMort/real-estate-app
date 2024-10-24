import { useState } from "react";
import "./searchBar.scss";

const types = ["buy", "rent"];

export default function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {/* i will need a good explaination for this block */}
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="City location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="min price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="max price"
        />
        <button>
          <img src="../../../public/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}
