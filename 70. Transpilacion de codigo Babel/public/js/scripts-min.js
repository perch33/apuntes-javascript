"use strict";
var numbers = [1, 2, 3, 4, "percy", 33],
  printNumbers = function () {
    var r;
    (r = console).log.apply(r, numbers);
  };
