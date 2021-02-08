const Utils = {
  age: function avg(grades) {
    return grades.reduce((acc, cur) => acc + cur.score, 0) / grades.length;
  },
};

export default Utils;
