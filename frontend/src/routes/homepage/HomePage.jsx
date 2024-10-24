import "./homePage.scss";
import SearchBar from "../../components/searchBar/SearchBar";

export default function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate and get you DREAM PLACE</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum odio
            fugiat tempora praesentium est repellendus unde, commodi iste, nobis
            culpa, eius dolor obcaecati. Doloremque ab ad facilis, ipsum
            assumenda ducimus!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of experience</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Award gains</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="../../../public/bg.png" alt="" />
      </div>
    </div>
  );
}
