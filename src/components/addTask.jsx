import { useState } from "react";

const AddTask = ({ tasks, setTasks }) => {
    const [text, setText] = useState("");

    const addTask = () => {
        if (text) {
            setTasks([...tasks, text]);
            setText("");
        } else {
            alert("Please write a task");
        }
    };

    return (
        <div className="flex w-full gap-4 items-center">
            <input
                type="text"
                placeholder="Write your task here"
                className="border px-4 py-2 border-white bg-transparent outline-none rounded-full w-full"
                onChange={(e) => {
                    setText(e.target.value);
                }}
                value={text}
            />
            <button className="px-4 py-2 bg-slate-500 text-white rounded-full" onClick={addTask}>
                Add
            </button>
        </div>
    );
};

export default AddTask;
