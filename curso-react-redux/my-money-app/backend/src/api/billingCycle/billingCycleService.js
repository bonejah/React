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

BillingCycle.route('summary',  (req, res, next) => {
  BillingCycle.aggregate({
    $project: { credits: { $sum: "$credits.value" }, debits: { $sum: "$debits.value" }}
  }, {
    $group: { _id: null, credit: { $sum: "$credits" }, debit: { $sum: "$debits" }}
  }, {
    $project: { _id: 0, credit: 1, debit: 1 }
  }, (error, result) => {
    if(error){
      res.status(500).json({ errors: [error] })
    }else{
      res.json({ result })
    }
  })
})

module.exports = BillingCycle