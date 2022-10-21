var express = require("express");
var bodyParser = require("body-parser");
var moment = require('moment');
var db = require('./db.json');

var app = new express();
var counter = 100;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* API */
app.get('/api/users', (req, res) => {
    let users = db.users.filter(user => user.name.toLowerCase().indexOf(req.query.q) > -1);
    setTimeout(() => res.send(users), 3000);
})

app.get('/api/projects', (req, res) => {
    let projects = db.projects.map(project => {
        return {
            id: project.id,
            name: project.name,
            type: project.type,
            progress: project.progress,
        }
    })
        .sort((x, y) => y.id - x.id);

    setTimeout(() => res.send(projects), 3000);

})

app.get('/api/projects/:id', (req, res) => {
    let project = db.projects.find(project => project.id === +req.params.id);
    setTimeout(() => res.send(project), 3000);
})

app.post('/api/projects', (req, res) => {
    let project = {
        ...req.body,
        id: db.projects[db.projects.length - 1].id + 1,
        progress: 0,
        workItems: []
    };
    db.projects.push(project);
    setTimeout(() => res.send(project), 3000);
})

app.post('/api/projects/:projectId/workitems', (req, res) => {
    let project = db.projects.find(project => project.id === +req.params.projectId);
    let workItem = { ...req.body, workItems: [], id: counter++ };
    project.workItems.unshift(workItem);
    setTimeout(() => res.send(workItem), 3000);
})

app.put('/api/projects/:projectId/workitems/:itemId', (req, res) => {
    let project = db.projects.find(project => project.id === +req.params.projectId);
    let i = project.workItems.findIndex(item => item.id === +req.params.itemId);
    project.workItems[i] = { ...project.workItems[i], ...req.body };
    setTimeout(() => res.send(project.workItems[i]), 3000);
})


app.post('/api/projects/:projectId/workitems/:itemId/todos', (req, res) => {
    let project = db.projects.find(project => project.id === +req.params.projectId);
    let workItem = project.workItems.find(item => item.id === +req.params.itemId);
    let todo = { ...req.body, id: counter++ };
    workItem.workItems.unshift(todo);
    setTimeout(() => res.send(todo), 3000);
})

app.put('/api/projects/:projectId/workitems/:itemId/todos/:todoId', (req, res) => {
    let project = db.projects.find(project => project.id === +req.params.projectId);
    let workItem = project.workItems.find(item => item.id === +req.params.itemId);
    let i = workItem.workItems.findIndex(item => item.id === +req.params.todoId);
    workItem.workItems[i] = { ...workItem.workItems[i], ...req.body };
    setTimeout(() => res.send(workItem.workItems[i]), 3000);
})





/* LISTENER */
app.listen(1415, 'localhost', function (error) {
    if (error)
        console.error(error);
    else
        console.info('express is taking API requests');
});