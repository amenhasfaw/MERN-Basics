const asyncHandler = require('express-async-handler')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler( async (req,res) => {
    res.status(200).json({message:"Get Goals"})
})

// @desc add a goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler( async  (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Add goal..')
    }

    res.status(200).json({message:"Goal Set"})
})

// @desc update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler( async (req,res) => {
    res.status(200).json({message:`Goals ${req.params.id} updated`})
})

// @desc delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler( async (req,res) => {
    res.status(200).json({message:`Goals ${req.params.id} deleted`})
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}