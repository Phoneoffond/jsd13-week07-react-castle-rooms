import Hall from "./05_Hall";

export default function Room({question,answer}){
return(

    <div className = "flex flex-col justify-center items-center pt-10 bg-green-300 w-[90%]">
    <h1>Room</h1>
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
    <Hall/>
</div>

);
}
