const mongoose = require('mongoose')
const chalk = require('chalk')

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.d04qp.mongodb.net/${process.env.DB_NAME}`,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
)

mongoose.connection.once('error', (err) => {
  console.log(`${chalk.redBright(`X Connection Fail...!!`)}`, err)
})

mongoose.connection.once('open', () => {
  console.log(`${chalk.blueBright('✔ connection Ok...!!')}`)
})

module.exports = mongoose