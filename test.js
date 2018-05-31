import Mocha from "mocha"
import fs from "fs"
import path from "path"
import "./test/prepare"

const mocha = new Mocha({
  reporter: "progress"
})

const part1 = path.join(__dirname, "./test/part1.test.js")

mocha.addFile(part1)

mocha.run()
