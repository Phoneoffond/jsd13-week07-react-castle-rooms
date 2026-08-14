import {useState} from "react";
import Castle from "./components/01_Castle.jsx";
import Tower from "./components/02_Tower.jsx";
import Chamber from "./components/03_Chamber.jsx";
import Room from "./components/04_Room.jsx";
import Hall from "./components/05_Hall.jsx";
import Corridor from "./components/06_Corridor.jsx";
import Gallery from "./components/07_Gallery.jsx";
import Nook from "./components/08_Nook.jsx";
import SecretRoom from "./components/09_SecretRoom.jsx";


export default function App() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const handleQuestion = (e) => {
    console.log(e);
    setQuestion(e.target.value);

  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white pb-80 py-10 gap-y-4">
    <p className = "text-purple-300">
      Message for Secret Room:
      <span className="text-yellow-300">
        {question ? ` ${question}` : "⏳Waiting for a message.."}
        </span>
    </p>
    <textarea value={question} 
    onChange={handleQuestion}
    className = "bg-white text-black rounded px-2 py-1"
    placeholder="Type your message here..."
    />
          <Castle question = {question}/>
          {question}
          {answer}
      </div>
  );
}
