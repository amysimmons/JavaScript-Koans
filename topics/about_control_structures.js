module("About Control Structures (topics/about_control_structures.js)");

test("if", function() {
	var isPositive = false;
	if (2 > 0) {
		isPositive = true;
	}
	equal(true, isPositive,  'what is the value of isPositive?');
});

test("for", function() {
	var counter = 10;
	for (var i = 1; i <= 3; i++) {
		counter = counter + i;
	}
	equal(16, counter, 'what is the value of counter?');
});

test("for in", function() {
	// this syntax will be explained in about objects
	var person = {
		name: "Amory Blaine",
		age: 102
	};
	var result = "";
	// for in enumerates the property names of an object
	for (var property_name in person) {
  		result = result + property_name;
	}
	equal("nameage", result, 'what is the value of result?');
});

// test
// Any Boolean expression.
// expression1
// An expression returned if test is true. May be a comma expression.
// expression2
// An expression returned if test is false. 

test("ternary operator", function() {
	var fruit = true ? "apple" : "orange";
	equal("apple", fruit, 'what is the value of fruit?');

	fruit = false ? "apple" : "orange";
	equal("orange", fruit, 'now what is the value of fruit?');
});

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.

test("switch", function() {
	var result = 0;
	switch (2) {
		case 1:
			result = 1;
			break;
		case 1+1:
			result = 2;
			break;
	}
	equal(2, result, 'what is the value of result?');
});

test("switch default case", function() {
    var result = "Pippin";
    switch ("m") {
        case "f":
            result = "Frodo";
            break;
        case "s":
            result = "Samwise";
                break;
        default:
            result = "Merry";
            break;
    }
    equal("Merry", result, 'what is the value of result?');
});

// Since JavaScript returns a boolean value of true when you're looking at a 
// variable that is not set to null or undefined, you can use the || (or) 
// operator to do null coalescing. Basically, as long as the first value is 
// not null or undefined it's returned, otherwise the second value is returned.
//  This really simplifies the process of getting object property values 
//  when you need to use a default value if it's not set yet, and keeps you 
//  from needing to use an if statement.

test("null coalescing", function() {
    var result = null || "a value";
    equal("a value", result, 'what is the value of result?');
});
