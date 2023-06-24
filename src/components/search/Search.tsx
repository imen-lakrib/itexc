import "./search.css";
import Button from "../../theme/button/Button";
import StarRating from "../../theme/rating/StarRating";
const Search = () => {
  return (
    <div className="search-container">
      <img className="img" src="/hosp.png" alt="hospital" />
      <div className="search-description">
        <h2>Search the Nearest hospital from you</h2>
        <p>
          Rumah sakit adalah bagian integral dari suatu organisasi sosial dan
          kesehatan dengan fungsi menyediakan pelayanan paripurna
          (komprehensif).
        </p>
        <Button link="/" text="Search "></Button>
      </div>
      <div className="search-rating">
        <img src="/care.png" alt="care" />
        <div className="search-ranting-title">
          <h3>Quality over Quantity</h3>
          <StarRating rating={4.9} />


        </div>
      </div>
    </div>
  );
};

export default Search;
