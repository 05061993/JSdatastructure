/**
 * FileName:golf.js
 * CreatedBy: Swati SD
 * Date :26-10-2016
 * Purpose :Function which will return a nick name based on Strokes and par values..
 */

/**
 * Function which will return a nick name based on Strokes and par
 * @param {Number} strokes - No of Strokes to reach the hole
 * @param {Number} par - the number of strokes a first-class player should normally require for a particular hole or course.
 * @return {String} nickName
 */
function golf(strokevalue, parvalue) {
    if (strokevalue == 1) {
        return "Hole in One";
    } else if (strokevalue <= parvalue - 2) {
        return "Eagle";
    } else if (strokevalue == parvalue - 1) {
        return "Birdie";
    } else if (strokevalue == parvalue) {
        return "Par";
    } else if (strokevalue == (parvalue + 1)) {
        return "Bogey";
    } else if (strokevalue == (parvalue + 2)) {
        return "DoubleBogey";
    } else if (strokevalue >= (parvalue + 3)) {
        return "Go Home";
    }
}

/*Calling the method golfNickName*/
var val1 = parseInt(prompt("enter stroke value"));
var val2 = parseInt(prompt("enter par value"));
var result = golf(val1, val2);
document.write(result);
