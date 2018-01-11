const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true }) // importante para utilizar o node- restful

BillingCycle.route('count', (req, res, next) => {
  BillingCycle.count((error, value) => {
    if(error){
      res.status(500).json({ errors: [error] })
    }else{
      res.json({ value })
    }
  })
})

module.exports = BillingCycle