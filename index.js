var userName = prompt('ismingizni kiriting')
var money = prompt(`${userName} pulingizni kiriting`);
var a = 500;
var b = 250;
var dollor = 10650.34;

var c = 120;
var yevro = 10650.03;

var sum = (a * dollor) + (b * dollor) + (c * yevro);

if (money >= sum) {
    alert("mablag`ingiz yetarli")
} else(
    alert("pulingiz yetarli emas")
)
console.log(money);
console.log(sum);