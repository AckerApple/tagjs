import { run } from './bundleScript'
import webpack from 'webpack'
import webpackConfig from '../webpack.config.js'

// Create a compiler instance with the configuration
const compiler = webpack(webpackConfig as any)

run(compiler)