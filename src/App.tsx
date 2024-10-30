/* import './App.css' */
/* import { Typography } from "antd"; */
import {  useState } from "react";
import "./app.scss";
import { Input, Button, Avatar } from "antd";
import addIcon from "./assets/icons/plus-square.svg";
import avatar from "./assets/icons/avatar.svg";
import open from "./assets/icons/open.svg";
import today from "./assets/icons/today.svg";
import publicIcon from "./assets/icons/public.svg";
import hightlight from "./assets/icons/highlight.svg";
import estimation from "./assets/icons/estimation.svg";
/* import { ReactComponent as DecorationIcons } from './assets/icons/decoration.svg'; */

function App() {
  const [showOptions, setShowOptions] = useState(false);
  const [isTextEntered, setIsTextEntered] = useState(false);
  

  const handleFocus = () => {
    setShowOptions(true);
  };
  /* const handleBlur = () => {
    if (!isTextEntered) {
      setShowOptions(false);
    }
  }; */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hasText = e.target.value.trim() !== "";
    setIsTextEntered(hasText);
  };

  const handleOkClick = () => {
    if (!isTextEntered) {
      setShowOptions(false);
    }
  };
  

  /* const { Title, Text } = Typography; */
  return (
    <>
      <div className="card-container">
        <div className={`input-container ${showOptions ? "with-shadow" : ""}`}>
          <img src={addIcon} alt="ícono de agregar" className="add-icon" />
          <Input
            placeholder="Type to add new task"
            variant="borderless"
            className="ant-input"
            onFocus={handleFocus}
            onChange={handleChange}
          />
          {showOptions && (
            <Avatar src={avatar} alt="avatar" className={`input-avatar ${isTextEntered ? "enabled-avatar" : ""}`}  />
          )}
        </div>
          {showOptions && (
            <div className={`button-row ${showOptions ? "with-shadow" : ""}`}>
            <div className="button-open">
              <Button
                icon={<img src={open} alt="open" />}
                variant="filled"
                color="default"
                style={{ width: "auto", height: 40 }}
                disabled={!isTextEntered}
              />
            </div>
  
            <div className="list-button">
              <Button
                icon={<img src={today} alt="today" />}
                style={{ width: "auto", height: 40 }} disabled={!isTextEntered}
              />
              <Button
                icon={<img src={publicIcon} alt="public" />}
                style={{ width: "auto", height: 40 }} disabled={!isTextEntered}
              />
              <Button
                icon={<img src={hightlight} alt="highlight" />}
                style={{ width: "auto", height: 40 }} disabled={!isTextEntered}
              />
              <Button
                icon={<img src={estimation} alt="estimation" />}
                style={{ width: "auto", height: 40 }} disabled={!isTextEntered}
              />
            </div>
  
            <div className="action-buttons">
              <Button
                style={{
                  backgroundColor: "#EAF0F5",
                  color: "#04142F",
                  fontSize: 14,
                  fontWeight: 500,
                  width: 95,
                  height: 40
                }}
              >
                Cancel
              </Button>
              <Button
                style={{
                  width: 66,
                  height: 40,
                  backgroundColor: "#0D55CF",
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontWeight: 500
                }}
                onClick={handleOkClick}
              >
                Ok
              </Button>
            </div>
          </div>
          )}
        
      </div>
    </>
  );
}

export default App;
