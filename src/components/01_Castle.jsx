import Tower from "./02_Tower";
export default function Castle(banana){
return(

    <div className = "flex flex-col justify-center items-center pt-10 bg-red-500 w-full">
    <h1>Castle</h1>
     <p className = "text-purple-300">
      Message for Secret Room:{""}
      <span className="text-yellow-300">
        {banana.answer
         ? ` ${banana.answer}` 
         : "⏳Waiting for a message.."}
        </span>
    </p>
            <Tower/>
</div>

);

}