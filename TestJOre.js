/**
 * Created by kabelo on 2015/11/15.
 * This  is a test framework ,it can be used for testing any javascript code.But it was designed specifically for JOre *
 */

/**
 * base assert method
 * @param condition
 * @param message
 */
function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
    else{
        console.log(condition.toString + 'Passed');
    }
}
/**
 * tests if two objects are equal
 * @param firstArg
 * @param secondArg
 * @param message
 */
function assertEquals(firstArg,secondArg,message){
    var condition = (firstArg === secondArg);
    assert(condition,message);
}
/**
 * tests object datatype
 * @param obj
 * @param type
 * @param message
 */
function assertInternalType(obj,type,message) {
    var condition = (typeof  obj == type);
    assert(condition,message);
}
/**
 * tests if an object is an instance of a class
 * @param obj
 * @param type
 * @param message
 */
function assertInstanceOf(obj,type,message){
    var condition = obj instanceof type;
    assert(condition,message);
}