// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req,res) => {
    res.status(200).json({message:"Get Goals"})
}

// @desc add a goal
// @route POST /api/goals
// @access Private
const setGoal = (req,res) => {
    console.log(req.body.text)
    if(!req.body.text){
        res.status(400)
        throw new Error('Add goal..')
    }

    res.status(200).json({message:"Goal Set"})
}

// @desc update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req,res) => {
    res.status(200).json({message:`Goals ${req.params.id} updated`})
}

// @desc delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req,res) => {
    res.status(200).json({message:`Goals ${req.params.id} deleted`})
}


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}