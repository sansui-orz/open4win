#!/usr/bin/env node

const path = require('path')
const { exec } = require('child_process')

console.log(path.resolve('./'))

exec(`explorer "file:///${path.resolve('./')}"`)