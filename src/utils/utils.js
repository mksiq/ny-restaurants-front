const Utils = {
  age: function avg(grades) {
    return grades.reduce((acc, cur) => acc + cur.score, 0) / grades.length;
  },
  parseDate: function (utc) {
    let date = new Date(utc);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  },
};

export default Utils;
