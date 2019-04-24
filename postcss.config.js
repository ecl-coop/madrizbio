const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        cssnano({
            preset: 'default',
        }),
        purgecss({
            content: ['./**/*.html']
          }),
        autoprefixer
    ]
}