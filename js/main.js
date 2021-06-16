// Нахождение случайного нецелого числа, убрав Math.floor

function getRandomInteger(from, to) {
  if (from <= to) {
    let getRandom = Math.random() * (to - from) + from;
    console.log(getRandom);
    console.log("верный диапазон");
  } else {
    console.log("неверный диапазон");
  }
}

getRandomInteger(10, 20);
