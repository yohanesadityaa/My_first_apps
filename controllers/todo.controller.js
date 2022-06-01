const fs = require('fs')

const DATA_FILE = __dirname + '/../models/data.json'

const getToDo = async (req, res) => {
    await db
    .query("select * from todos")
    .then((result) => {
        res.status(200).json({
        data: result.rows,
        });
    })
    .catch((e) => {
        console.log(e);
        res.status(500).json({
        message: "INTERNAL SERVER ERROR",
        });
    });
}
const postToDo = async (req, res) => {
    const body = req.body;

    await db
    .query(`insert into todos(name, done) values ('${body.name}', ${body.done})`)
    .then((result) => {
        res.status(200).json({
        message: 'Todo successfully created',
        });
    })
    .catch((e) => {
        console.log(e);
        res.status(500).json({
        message: "INTERNAL SERVER ERROR",
        });
    });
};

const pullToDo = async (req, res) => {
    const body = req.body;

    await db
    .query(`update todos set id = '${body.id}' where id = '${body.id}'`)
    .then((result) => {
        res.status(200).json({
        message: 'Todo successfully created',
        });
    })
    .catch((e) => {
        console.log(e);
        res.status(500).json({
        message: "INTERNAL SERVER ERROR",
        });
    });
};

const deleteToDo = async (req, res) => {
    const body = req.body;

    await db
    .query(`delete from todos where id = '${body.id}')`)
    .then((result) => {
        res.status(200).json({
        message: 'Todo successfully created',
        });
    })
    .catch((e) => {
        console.log(e);
        res.status(500).json({
        message: "INTERNAL SERVER ERROR",
        });
    });
};

module.exports = {
    getToDo,
    postToDo,
    pullTodo,
    deleteToDo
}