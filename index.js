let isHotOutside = true;
let isWeekday = true;
let hasMoneyInPocket = true;

// const instead of let, all these change right?
let costOfMilk = 3;
let moneyInWallet = 10;
let thirstLevel = 7;

// why does assignment say boolean isSchoolDay = isWeekday && !isSummer;
// and not var or let instead of boolean? confusing and code would not run in javascript.
let shouldBuyIceCream = isHotOutside && hasMoneyInPocket;

let willGoSwimming = isHotOutside && !isWeekday;

let isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekday;

let willBuyMilk = isHotOutside && thirstLevel >= 3 && moneyInWallet >= 2 * costOfMilk;

console.log(shouldBuyIceCream, willGoSwimming, isAGoodDay, willBuyMilk);
