import { useState, useRef } from "react";

const Tasks = ({ tasks, setTasks }) => {
    const deleteTask = (index) => {
        setTasks(tasks.filter((task) => tasks.indexOf(task) !== index));
    };

    const editTask = (index, text) => {
        const newTasks = [...tasks];
        newTasks[index] = text;
        setTasks(newTasks);
    };

    return (
        <ul className="flex justify-start flex-col w-full px-1 md:px-4 lg:px-6">
            {tasks.map((task, index) => {
                return (
                    <Task
                        text={task}
                        key={index}
                        index={index}
                        deleteTask={deleteTask}
                        editTask={editTask}
                    />
                );
            })}
        </ul>
    );
};

const Task = ({ text, index, deleteTask, editTask }) => {
    const [editing, setEditing] = useState(false);
    const [edit, setEdit] = useState("");

    const editTaskChild = () => {
        if (editing) {
            if (edit) {
                editTask(index, edit);
                setEdit("");
                setEditing(false);
            } else {
                alert("Please edit the task");
            }
        } else {
            setEditing(true);
            setEdit(text);
        }
    };

    const deleteTaskChild = () => {
        if (editing) {
            alert("End editing before deleting");
        } else {
            deleteTask(index);
        }
    };

    return (
        <li className="flex items-center bg-slate-600 text-white p-4 rounded-md mb-2 gap-3">
            <div className="flex gap-1 flex-1">
                {index + 1}.
                {editing ? (
                    <input
                        className="bg-transparent text-white outline-none border-b border-white w-full"
                        type="text"
                        value={edit}
                        onChange={(e) => setEdit(e.target.value)}
                    />
                ) : (
                    <p>{text}</p>
                )}
            </div>

            <div className="flex gap-4">
                <button
                    onClick={editTaskChild}
                    className="px-4 py-2 bg-slate-500 text-white rounded-full"
                >
                    {editing ? "Save" : "Edit"}
                </button>
                <button
                    onClick={deleteTaskChild}
                    className="px-4 py-2 bg-slate-500 text-white rounded-full"
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default Tasks;
