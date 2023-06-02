import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddTask = () => {
    const navigate = useNavigate();
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const status = "Pending";
        const addedTask = {
            title,
            description,
            status
        };
        fetch(`https://task-management-server-beryl.vercel.app/addtask`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addedTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Toy Added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate("/")
                }

            })
    }
    return (
        <div className="w-11/12 lg:h-[calc(70vh)] flex items-center bg-primaryBg mx-auto">
                <form onSubmit={handleUpdate} className="w-full">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-white">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Title" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-white">Description</span>
                        </label>
                        <textarea name="description" className="p-4 rounded-md border-none outline-none" placeholder="Description" id="" cols="30" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn bg-green-500 text-white px-3 py-2 my-2 mx-2">Add</button>
                </form>
            </div>
    );
};

export default AddTask;