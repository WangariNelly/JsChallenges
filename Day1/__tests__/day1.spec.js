const {dayOneSol1,dayOneSol2} = require("../day1.js");

describe("test dayOneSol1 function", () => {
    it("returns 2", () => {
        expect(dayOneSol1()).toBe(2)
    })
})

describe("test dayOneSol2 function", () => {
    it("returns 3", () => {
        expect(dayOneSol2()).toBe(3)
    })
})