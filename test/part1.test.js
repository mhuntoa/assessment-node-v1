import sinon from "sinon"

import q1 from "../src/part1/1-asynchronous-delay"

describe("Part1", function() {
	context("1. Asynchronous Delay", () => {
    let clock
    beforeEach(function () {
      clock = sinon.useFakeTimers();
    })

    afterEach(function () {
      clock.restore();
    })
    it("should call after delay", () => {
      const fn = sinon.spy()
      q1(3000, fn)
      fn.should.have.not.been.called
      clock.tick(2990)
      fn.should.have.not.been.called
      clock.tick(12)
      fn.should.have.been.calledOnce
    })
	})
})
