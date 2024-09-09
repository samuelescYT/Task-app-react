//Hooks
import { useState, useEffect } from "react"; 

//Components
import AddTask from "./components/addTask";
import Tasks from "./components/Tasks";

export const App = () => {
    const [tasks, setTasks] = useState([]);

    //Cuando se inicia el componente
    useEffect(() => {
        const tasksLocalStorage = localStorage.getItem('tasks');
        const tasksLocalStorageArray = JSON.parse(tasksLocalStorage);
        if(tasksLocalStorageArray.length > 0) {
            setTasks(JSON.parse(tasksLocalStorage));
        }
    }, []);

    //Cuando hay un cambio en las tareas
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return(
        <div className="min-h-screen flex justify-center items-center bg-slate-500 p-6">
            <div className="sm:w-4/5 md:w-3/5 lg:w-3/5 p-4 sm:p-2 md:p-4 lg:p-6 flex flex-col items-center gap-7 bg-slate-700 text-white rounded-md">
                <h1 className="text-5xl ">Task App with React</h1>
                <AddTask tasks={tasks} setTasks={setTasks}/>
                <Tasks tasks={tasks} setTasks={setTasks}/> 
            </div>
        </div>
    );
}