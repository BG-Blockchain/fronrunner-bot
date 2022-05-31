const ethers = require("ethers")
const bot = require("./bot")

test('test calculate gas price on buy', () => {
  
    expect(bot.calculate_gas_price("buy", ethers.BigNumber.from("42"))).toBe(ethers.BigNumber.from("43"))
})