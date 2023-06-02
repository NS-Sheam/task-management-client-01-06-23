import { Link } from "react-router-dom";

const TaskCard = ({task, handleDelete}) => {
    const {_id, title, description, status} = task;
    return (
        <div className="card w-full bg-base-100 shadow-xl my-6 text-primaryBg h-full">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className={`btn btn-xs text-white ${status === "Pending"? "bg-yellow-500": "bg-green-800"}`}>{status}</button>
             
            <Link to={`/taskform/${_id}`}>
            <button className={`btn btn-xs text-white bg-orange-950`}>Edit</button>
            </Link>
            <button onClick={()=> handleDelete(_id)} className={`btn btn-xs text-white bg-error`}>delete</button>
          </div>
        </div>
        
      </div>
    );
};

export default TaskCard;