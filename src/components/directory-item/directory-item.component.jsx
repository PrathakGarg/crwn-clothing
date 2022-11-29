import { useNavigate } from "react-router-dom";

import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();

  const toCategory = () => {
    navigate(`shop/${title.toLowerCase()}`)
  }

  return (
    <DirectoryItemContainer onClick={toCategory}>
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;