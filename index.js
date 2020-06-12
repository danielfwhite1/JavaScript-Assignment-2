let isHotOutside = true;
let isWeekday = true;
let hasMoneyInPocket = true;

let costOfMilk = 3;
let moneyInWallet = 10;
let thirstLevel = 7;

let shouldBuyIceCream = isHotOutside && hasMoneyInPocket;

let willGoSwimming = isHotOutside && !isWeekday;

let isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekday;

let willBuyMilk = isHotOutside && thirstLevel >= 3 && moneyInWallet >= 2 * costOfMilk;

console.log(shouldBuyIceCream, willGoSwimming, isAGoodDay, willBuyMilk);
