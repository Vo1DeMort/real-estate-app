import { listData } from "../../lib/dummmyData";
import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card.jsx";
import Map from "../../components/map/Map.jsx";
import { singlePostData } from "../../lib/dummmyData";

export default function ListPage() {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="mapContainer">
        {/* this single post data is just one and i am uisng map in map componnet */}
        <Map items={data} />
      </div>
    </div>
  );
}

// 1: 15
