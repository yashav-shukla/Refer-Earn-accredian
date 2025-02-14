const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    referrerName: String,
    referrerEmail: String,
    referralName: String,
    referralEmail: String })

const EmployeeModel = mongoose.model('employees', EmployeeSchema)

module.exports = EmployeeModel

