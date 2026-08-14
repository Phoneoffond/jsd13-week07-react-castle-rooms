import Nook from "./08_Nook";
export default function Gallery({question,answer}){
return(
    <div className = "flex flex-col justify-center items-center pt-10 bg-purple-900 w-[90%]">
    <h1>Gallery</h1>
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
    <Nook/>
</div>


);
}