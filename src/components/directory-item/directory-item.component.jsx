import { useNavigate } from "react-router-dom";

import "./directory-item.styles.scss";

const DirectoryItem = ({ category: { title, imageUrl } }) => {
  const navigate = useNavigate();

  const toCategory = () => {
    navigate(`shop/${title.toLowerCase()}`)
  }

  return (
    <div className="directory-item-container" onClick={toCategory}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
