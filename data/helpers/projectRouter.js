const express = require('express');
const projects = require('./projectModel');

const router = express.Router();


//get all projects
router.get('/projects', async (req, res, next) => {
try {
  const data = await projects.get()
  res.status(200).json(data)
} catch(err) {
  next(err)
}


  // projects
  // .get()
  // .then((data) => {
  //   res.status(200).json(data)
  // })
  // .catch((err) => {
  //   console.log(err)
  // })
})

//get one project by id
router.get('/projects/:id', async (req, res, next) => {
  try {
    const project = await projects.get(req.params.id)
    res.status(200).json(project)
  } catch(err) {
    next(err)
  }
 
})

//add a project
router.post('/projects', async (req, res, next) => {
  try {
    const project = await projects.insert(req.body)
    res.status(201).json(project)
  } catch(err) {
    next(err)
  }
})

//update a project
router.put('/projects/:id', async (req, res, next) => {
  try {
    const project = await projects.update(req.params.id, req.body)
    res.status(201).json(project)
  } catch(err) {
    next(err)
  }
})

//delete a project
router.delete('/projects/:id', async (req, res, next) => {
  try {
    await projects.remove(req.params.id)
    res.status(200).json({
      message: "project deleted"
    })

  } catch(err) {
    next(err)
  }
})

//get actions of a project
router.get('/projects/:id', async (req, res, next) => {
  try {
const actions = await getProjectActions(req.params.id)
res.status(200).json(actions)
  } catch(err) {
    next(err)
  }
})



module.exports = router