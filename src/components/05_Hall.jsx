import Corridor from "./06_Corridor";
export default function Hall({question,answer}){
return(
    <div className = "flex flex-col justify-center items-center pt-10 bg-green-800 w-[90%]">
    <h1>Hall</h1>
          <p className = "text-purple-300">
      Message for Secret Room:{""}
      <span className="text-yellow-300">
        {question? ` ${question}` : "⏳Waiting for a message.."}
        </span>
    </p>
     <p className = "text-purple-300">
      Message for Secret Room:{""}
      <span className="text-yellow-300">
        {answer? ` ${answer}` : "⏳Waiting for a message.."}
        </span>
    </p>
    <Corridor/>
</div>


);
}