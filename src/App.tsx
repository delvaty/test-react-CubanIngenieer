/* import './App.css' */
/* import { Typography } from "antd"; */
import { useState } from "react";
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
  const [inputValue, setInputValue] = useState("");
  const [formattedContent, setFormattedContent] = useState<React.ReactNode[]>(
    []
  );

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
    const text = e.target.value;
    setInputValue(text);
    setIsTextEntered(hasText);
    setFormattedContent(processText(text));
  };

  const handleOkClick = () => {
    if (!isTextEntered) {
      setShowOptions(false);
    }
  };

  const processText = (text: string) => {
    const words = text.split(/\s+/);
    const formattedWords = words.map((word, index) => {
      // Patrón para correos electrónicos
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      // Patrón para URLs
      const urlPattern =
        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

      if (word.startsWith("@")) {
        return (
          <span key={index} style={{ color: "green" }}>
            {word}{" "}
          </span>
        );
      } else if (word.startsWith("#")) {
        return (
          <span key={index} style={{ color: "purple" }}>
            {word}{" "}
          </span>
        );
      } else if (emailPattern.test(word)) {
        return (
          <span key={index} style={{ color: "orange" }}>
            {word}{" "}
          </span>
        );
      } else if (urlPattern.test(word)) {
        return (
          <span key={index} style={{ color: "blue" }}>
            {word}{" "}
          </span>
        );
      }
      return (
        <span key={index} style={{ color: "black" }}>
          {word}{" "}
        </span>
      );
    });

    return formattedWords;
  };

  /* const { Title, Text } = Typography; */
  return (
    <>
      <div className="card-container">
        <div className={`input-container ${showOptions ? "with-shadow" : ""}`}>
          <img src={addIcon} alt="ícono de agregar" className="add-icon" />
          <div style={{ position: "relative", width: "100%", padding: 5 }}>
            <Input
              placeholder="Type to add new task"
              variant="borderless"
              className="ant-input"
              style={{
                opacity: 0,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 2,
              }}
              onFocus={handleFocus}
              onChange={handleChange}
              value={inputValue}
            />
            <div>
              {formattedContent.length > 0 ? (
                formattedContent
              ) : (
                <span style={{ color: "#00000040" }}>Type to add new task</span>
              )}
            </div>

            {/* <div
              style={{
                padding: "4px 11px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                minHeight: "32px",
                border: "1px solid transparent",
                zIndex: 1,
                background: "white",
              }}
            >
              {formattedContent.length > 0 ? (
                formattedContent
              ) : (
                <span style={{ color: "#00000040" }}>Type to add new task</span>
              )}
            </div> */}
          </div>

          {showOptions && (
            <Avatar
              src={avatar}
              alt="avatar"
              className={`input-avatar ${
                isTextEntered ? "enabled-avatar" : ""
              }`}
            />
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
                style={{ width: "auto", height: 40 }}
                disabled={!isTextEntered}
              />
              <Button
                icon={<img src={publicIcon} alt="public" />}
                style={{ width: "auto", height: 40 }}
                disabled={!isTextEntered}
              />
              <Button
                icon={<img src={hightlight} alt="highlight" />}
                style={{ width: "auto", height: 40 }}
                disabled={!isTextEntered}
              />
              <Button
                icon={<img src={estimation} alt="estimation" />}
                style={{ width: "auto", height: 40 }}
                disabled={!isTextEntered}
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
                  height: 40,
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
                  fontWeight: 500,
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
