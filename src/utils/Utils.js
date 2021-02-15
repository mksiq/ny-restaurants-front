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
  /**
   * Fix the case of the query to match pattern in database: Only first letter is uppercase
   * Had to treats as array for the borough of Staten Island
   *
   * @param {string} words query to fix
   * @return {string} fixed query
   */
  fixCase: function (word) {
    return word
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
      .join(" ");
  },
};

export default Utils;
