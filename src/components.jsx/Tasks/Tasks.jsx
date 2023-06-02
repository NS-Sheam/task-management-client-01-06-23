import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import Swal from "sweetalert2";

const Tasks = () => {
    const [task, setTask] = useState([]);
    useEffect(() => {
        fetch("https://task-management-server-beryl.vercel.app/alltask")
            .then(res => res.json())
            .then(data => {
                setTask(data);
                // console.log(completeTask);
            })
    }, [])
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://task-management-server-beryl.vercel.app/delete/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            const remainingTask = task.filter(task => task._id !== id)
                            setTask(remainingTask)
                        }

                    })
            }
        })

    }
    return (
        <div className="grid grid-cols-2 text-white justify-center items-start gap-8 w-full px-6">
            {
                task.map(singleTask => <TaskCard
                    key={singleTask._id}
                    task={singleTask}
                    handleDelete={handleDelete}
                ></TaskCard>)
            }
        </div>

    );
};

export default Tasks;