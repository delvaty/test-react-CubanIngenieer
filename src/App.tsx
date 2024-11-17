/* import './App.css' */
/* import { Typography } from "antd"; */
import { useState } from "react";
import "./app.scss";
import { Input, Button, Avatar } from "antd";
import addIcon from "./assets/icons/plus-square.svg";
import avatar from "./assets/icons/avatar.svg";
import open from "./assets/icons/arrows-angle-expand.svg";
import today from "./assets/icons/calendar.svg";
import publicIcon from "./assets/icons/unlock.svg";
import hightlight from "./assets/icons/sun.svg";
import estimation from "./assets/icons/0-circle.svg";
import linkIcon from './assets/icons/link.svg'
/* import { ReactComponent as DecorationIcons } from './assets/icons/decoration.svg'; */

interface Tag {
  type: string;
  text: string;
}

interface Task {
  id: number;
  texts: Tag[];
}

function App() {
  const [showOptions, setShowOptions] = useState(false);
  const [isTextEntered, setIsTextEntered] = useState(false);

  const [tasks, setTasks] = useState<Task[]>([]);

  const [text, setText] = useState("");

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

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value.trim());
    const hasText = e.target.value.trim() !== "";
    setIsTextEntered(hasText);
  };

  const handleOkClick = () => {
    if (!isTextEntered) {
      setShowOptions(false);
    } else {
      const tags: Task = { id: Math.random(), texts: [] };
      const words = text.split(" ");
      words.forEach((word) => {
        // Expresiones regulares para cada caso
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Correos electrónicos
        const urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/; // URLs

        let type = "text";

        if (word.charAt(0) == "@") {
          type = "mention";
        } else if (word.charAt(0) == "#") {
          type = "hashtag";
        } else if (emailRegex.test(word)) {
          type = "email";
        } else if (urlRegex.test(word)) {
          type = "url";
        }

        tags.texts.push({
          type: type,
          text: word,
        });
      });

      setTasks([...tasks, tags]);
      setText("");
    }
  };

  /* const { Title, Text } = Typography; */
  return (
    <>
      <div className="card-container">
        <div className={`input-container ${showOptions ? "with-shadow" : ""}`}>
          <img src={addIcon} alt="ícono de agregar" className="add-icon" />
          <Input placeholder="Type to add new task" variant="borderless" className="ant-input" onInput={handleInput} onFocus={handleFocus} onChange={handleChange} />
          {showOptions && <Avatar src={avatar} alt="avatar" className={`input-avatar ${isTextEntered ? "enabled-avatar" : ""}`} />}
        </div>
        <div className="task-list">
          {tasks.map((task: Task) => (
            <div className="task-text" key={task.id}>
              {task.texts.map((text) => {
                return (
                  <span className={text.type} key={text.text as string}>
                    {/* {text.text} */}
                    {text.type === "url" ? (
                    <>
                      <img src={linkIcon} alt="Link icon" style={{ marginRight: 4, width: 12 }} className="link-icon" />
                      <span>link</span>
                    </>
                  ) : (
                    text.text
                  )}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
        {showOptions && (
          <div className={`button-row ${showOptions ? "with-shadow" : ""}`}>
            <div className="button-open">
              <Button icon={<img src={open} alt="open" />} variant="filled" color="default" style={{ width: "auto", height: 40 }} disabled={!isTextEntered}>
                <span className="text">Open</span>
              </Button>
            </div>

            <div className="list-button">
              <Button icon={<img src={today} alt="today" />} style={{ width: "auto", height: 40 }} disabled={!isTextEntered}>
                <span className="text">Today</span>
              </Button>
              <Button icon={<img src={publicIcon} alt="public" />} style={{ width: "auto", height: 40 }} disabled={!isTextEntered}>
                <span className="text">Public</span>
              </Button>
              <Button icon={<img src={hightlight} alt="normal" />} style={{ width: "auto", height: 40 }} disabled={!isTextEntered}>
                <span className="text">Normal</span>
              </Button>
              <Button icon={<img src={estimation} alt="estimation" />} style={{ width: "auto", height: 40 }} disabled={!isTextEntered}>
                <span className="text">Estimation</span>
              </Button>
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
                {isTextEntered ? "Add" : "Ok"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
