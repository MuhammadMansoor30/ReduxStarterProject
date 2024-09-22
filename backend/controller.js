let tasks = [
    {id: 1, task: "Start Creating Redux Application", completed: true},
    {id: 2, task: "Design Redux Store", completed: true},
    {id: 3, task: "Define all Actions List", completed: false},
    {id: 4, task: "Create Reducer", completed: false},
    {id: 5, task: "Create Store using Reducer", completed: false},
];

const addTasks = (req, res) => {
    const {task} = req.body;
    const newTask = {id: tasks.length + 1, task, completed: false};

    tasks.push(newTask);
    console.log(tasks);

    res.status(201).json(tasks);
};

const getTasks = (req, res) => {
    res.status(200).json(tasks);
};

function updateTask(req, res){
    const id = parseInt(req.params.id);
    const {completed} = req.body;

    const index = tasks.findIndex((task) => task.id === id);
    tasks[index].completed = completed;

    console.log(tasks);
    res.status(200).json(tasks);

};

function deleteTask(req, res){
    const id = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== id);

    res.status(200).json(tasks);
};

exports.addTasks = addTasks;
exports.getTasks = getTasks;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;