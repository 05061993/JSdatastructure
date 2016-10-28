<!-- /**
*
    FileName: mylist.js *
    CreatedBy: Swati SD *
    Date:27-10-2016 *
    Purpose: implimenting push, pop, shift, and unshift methods by creating a shopping list

    *
    / -->



/*Creating myList array*/
var myList = [];

/*Asking the user to insert the no of elements he wants to enter*/
var noOfEle = parseInt(prompt("Enter the No Of Elements u want"));

/*Repeating the for loop for no of times and taking list from user*/
for (var i = 0; i < noOfEle; i++) {
    for (var j = 1; j < noOfEle; j++) {
        var list = [];
        list[0] = prompt("Enter the Name of the item");
        list[1] = parseInt(prompt("Enter the No Of Items"));
        myList.push(list);
        if (j == 2) {
            break;
        }
    }
}
/*Displaying the List of elements*/
document.write("Items in the List" + "<br>");
for (var i = 0; i < myList.length; i++) {
    document.write(myList[i][j] + " ");
}
document.write("<br>");


/*Returning last element from the list*/
document.write(myList.pop() + "<br");

/*Returning first element in the list*/
document.write(myList.shift() + "<br>");

/*Adding element to the front of array*/
document.write(myList.unshift(["bisket", 20]));

/*Displaying the list on the html*/
document.write(myList);

/*
Exception: SyntaxError: expected expression, got '}'
@Scratchpad/2:21
*/
