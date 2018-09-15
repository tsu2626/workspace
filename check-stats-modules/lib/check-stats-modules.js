'use strict'

const nsa = require('npm-stat-api') //importでもよい
const moment = require('moment')　//時間に関するライブラリ　便利API
const yargs = require('yargs')
const pkg = require('../package.json')
const args = yargs.argv

console.log(args);

/**
 * run function
 *
 * @param  void
 * @return void
 */
const run = () => {
   // 'help' is top priority option
   if (args.h) {
      show_help()
   } else if (args.v) {
      console.log(pkg.version)
   } else {
      show_stats()
   }
}

/**
 * show help
 *
 * @param  {String} help message if specifying a message
 * @return {String} full help message
 */
const show_help = (text) => {
   if (text) console.log(text);
   yargs.showHelp();
}

/**
 * show stats about modules
 *
 * @param  void
 * @return void
 */
const show_stats = () => {
  // const mod = 'cmd-ranking' //webpackとか
  const from = typeof args.f === 'string'  || moment().add(-1, 'days').format('YYYY-MM-DD')
  const today = moment().format('YYYY-MM-DD')
   
   for (let mod of args._) {
      if (from_check === null) show_help('Please enter the date correctly. \n')
      nsa.stat(mod, from, today, (err, res) => {
         console.log(JSON.stringify(res) + "\n") //parseして出す
      })
   }
}

module.exports = {
   run: run
}
