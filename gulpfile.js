const gulp = require('gulp')

const live = require('./gulp/tasks/live')
const html = require('./gulp/tasks/html')
const styles = require('./gulp/tasks/styles')
const script = require('./gulp/tasks/script')
const fonts = require('./gulp/tasks/fonts')
const imageMinify = require('./gulp/tasks/imageMinify')
const clean = require('./gulp/tasks/clean')
const svgSprite = require('./gulp/tasks/svgSprite')

function setMode(isProduction = false) {
  return cb => {
    process.env.NODE_ENV = isProduction ? 'production' : 'development'
    cb()
  }
}

const dev = gulp.parallel(html, styles, script, fonts, imageMinify, svgSprite)

const build = gulp.series(clean, dev)

module.exports.live = gulp.series(setMode(), build, live)
module.exports.build = gulp.series(setMode(true), build)
