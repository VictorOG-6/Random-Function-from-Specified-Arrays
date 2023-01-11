var name = prompt("What is your name", " ");
      var foods = ["cheese", "chicken", "fruit", "dessert", "candy"];
      function hello(name) {
        var greeting;
        if (name == "null" || name == " ") {
          greeting = "You didn't give me a name";
        } else {
          greeting = `Hello ${name}, and welcome!`;
        }
        return greeting;
      }

      function randomInt(min, max) {
        return Math.floor((max - min + 1) * Math.random()) + min;
      }

      function hospitality(name, gift) {
        console.log(hello(name));
        var randomGift = gift[randomInt(0, gift.length - 1)];
        console.log(`${name}, would you like some ${randomGift}`);
      }

      hospitality(name, foods);