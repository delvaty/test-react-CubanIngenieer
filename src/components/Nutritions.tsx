import { Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

const Nutritions = () => {
  const { Title, Text } = Typography;
  return (
    <div className="list-ingredients">
      <Title
        level={2}
        className="outfit-text-bold"
        style={{ color: "hsl(14, 45%, 36%)", marginTop: 20 }}
      >
        <strong>Nutrition</strong>
      </Title>
      <Paragraph>
        <Text className="outfit-text" style={{ fontSize: 15 }}>
          The table below shows nutritional values per serving without the
          additional fillings.
        </Text>
      </Paragraph>
      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <td>Calories</td>
              <td>
                <p>277kcal</p>
              </td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>
                <p>0g</p>
              </td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>
                <p>20g</p>
              </td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>
                <p>22g</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Nutritions;
