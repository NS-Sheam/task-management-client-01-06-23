import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TaskUpdateForm = () => {
    const singleTask = useLoaderData();
    const { _id, title, description, status } = singleTask;
    const [complete, setComplete] = useState("Pending");
    // console.log(complete);
    const navigate = useNavigate();
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const status = complete;
        const updatedTask = {
            title,
            description,
            status
        };
        fetch(`https://task-management-server-beryl.vercel.app/updatetask/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Task Updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate("/");
                }

            })
    }


    return (
            <div className="w-11/12 lg:min-h-[calc(70vh)] flex items-center bg-primaryBg mx-auto py-8">
                <form onSubmit={handleUpdate} className="w-full">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-white">Title</span>
                        </label>
                        <input type="text" name="title" defaultValue={title} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-white">Description</span>
                        </label>
                        <textarea name="description" className="p-4 rounded-md border-none outline-none" defaultValue={description} placeholder="Description" id="" cols="30" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn bg-yellow-500 text-white px-3 py-2 my-2 mx-2">Update</button>
                    {
                        status === "Pending" ?
                            <button type="submit" onClick={() => setComplete("Completed")} className="btn bg-green-600 text-white px-3 py-2 my-2">{complete =="Pending" && "Complete task" }</button> : ""
                    }

                </form>
            </div>
    );
}



export default TaskUpdateForm;