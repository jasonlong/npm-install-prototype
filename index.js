'use strict'

const chalk = require('chalk')
const delay = require('delay')
const ora = require('ora')

const packages = [
  'tachyons-cli@^1.0.11',
  'immutable-css@^1.1.1',
  'meow@^3.7.0',
  'chalk@^2.4.2',
  'cssstats@^2.4.2',
  'css-mqpacker@^7.0.0',
  'minimist@^7.0.0',
  'has-ansi@^2.0.0',
  'normalize-package-data@^2.3.4',
  'camelcase-keys@^4.0.0',
  'redent@^2.0.0',
  'resolve@^1.1.6',
  'decamelize-keys@^1.0.0',
  'css-shorthand-expand@^1.1.0',
  'minimist-options@^3.1.0',
  'css-selector-tokenizer@^0.7.0',
  'gzip-size@^4.1.0',
  'postcss-class-repeat@^4.1.0',
  'css-selector-tokenizer@^0.5.4',
  'inflight@^1.0.4',
  'postcss-extend-rule@^1.1.0',
  'postcss-rtl@^1.2.3',
  'minimatch@^2.0.0',
  'currently-unhandled@^0.4.1',
  'find-up@^1.0.1',
  'read-pkg@^3.0.0',
  'got@^6.2.0',
  'ghauth@^3.2.0',
  'query-string@^4.1.0',
  'regexpu-core@^4.6.0',
  'postcss-calc@^5.2.0',
  'postcss-scss@^0.3.0',
  'has@^1.0.1',
  'postcss-discard-overridden@^0.1.1',
  'postcss-normalize-url@^3.1.7',
  'postcss-svgo@^2.1.1',
  'browserlist@^3.2.8',
  'spdx-correct@^3.0.0',
  'rtlcss@^2.5.0',
  'load-json-file@^1.5.0',
  'path-type@^3.0.0',
  'create-error-class@^3.0.0',
  'unicode-match-property-ecmascript@^1.0.0',
  'postcss-selector-parser@^2.0.0',
  'fetch-vcr@^1.1.0',
  'svgo@^0.7.0',
  'findup@^0.1.5',
  'parse-json@^2.2.0',
  'strip-bom@^2.2.0',
  'through@^0.6.3',
  'node-fetch@^1.6.3',
  'unicode-property-aliases-ecmascript@^1.0.4',
  'coa@^1.0.1',
  'readable-stream@^1.1.9',
]

const spinner = ora().start()

async function install() {
  spinner.color = 'magenta';
  for (var i = 0; i < packages.length; i++) {
    spinner.text = `Fetching metadata: ${chalk.gray(packages[i])}`
    await delay(80)
  }
  spinner.color = 'cyan';
  for (var i = 0; i < packages.length; i++) {
    spinner.text = `Extracting: ${chalk.gray(packages[i])}`
    await delay(80)
  }

  spinner.color = 'blue';
  for (var i = 0; i < packages.length; i+=2) {
    spinner.text = `Finalizing: ${chalk.gray(packages[i])}`
    await delay(80)
  }

  spinner.color = 'green';
  spinner.text = `Refreshing package.json`
  await delay(400)

  spinner.stop()

  showSummaryMessage()
}

install()

function showSummaryMessage() {
  console.log(chalk('\nAdded 414 packages from 324 contributors and audited 414 packages in 12.94s\n'))
  console.log(chalk(`💖 ${chalk.bold('5')} packages are looking for funding`))
  console.log(chalk(`   Run \`${chalk.bold('npm fund')}\` for details\n`))

  console.log(chalk(`⚠️  ${chalk.bold('9')} vulnerabilities found: 3 minor, ${chalk.yellow('1 moderate')}, ${chalk.red('5 severe')}`))
  console.log(chalk(`   Run \`${chalk.bold('npm audit fix')}\` to fix them or \`${chalk.bold('npm audit')}\` for details`))
}
