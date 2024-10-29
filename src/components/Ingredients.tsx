import { Divider, Typography } from "antd";

const Ingredients = () => {
  const { Title } = Typography;
  return (
    <div className="list-ingredients">
      <Title
        level={2}
        className="outfit-text-bold"
        style={{ color: "hsl(14, 45%, 36%)", marginTop: 20 }}
      >
        <strong>Ingredients</strong>
      </Title>
      <ul className="list-text-ingredients">
        <li> 2-3 large eggs</li>
        <li> Salt, to taste</li>
        <li> Pepper, to taste</li>
        <li> 1 tablespoon of butter or oil</li>
        <li>
          {" "}
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>
      <Divider />
    </div>
  );
};

export default Ingredients;
