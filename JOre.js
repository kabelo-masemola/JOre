/**
 * @Author:        Kabelo Masemola
 * @date:          14 November 2015
 * @title:         JOre
 *
 */


/**
 *This is the constructor for the library's function/object
 * @param id
 * @returns {*}
 */

function $JOre(id){
    var error = {
        message : "The JOre constructor takes in an element ID as a  parameter,You have invoked $JOre without an element ID"
    };


    if (id) {
    /*
     * This 'if' checks if the this is the global scope and recursively calls the constructor with the 'new' keyword
     * This is to achieve object internal scope so that all methods called can be of the $JOre object not the global scope    *
     */

        if (window === this) {
            return new $JOre(id)
        }
        this.element = document.getElementById(id);
        /*The object must return itself to allow method chaining*/
        return this;
    } else {
        return error
    }
}

$JOre.prototype = {
    /*Use for hiding DOM elements*/
    hide: function () {
        this.element.style.display = "none";
        return this;
    },
    /*Used to make a DOM element appear*/
    show: function () {
        this.element.style.display = "inherit";
        return this;
    },
    /*setting background color*/
    backgroundColor: function (color) {
        this.element.style.background = color;
        return this;
    },
    /*changing value of a DOM element*/
    val: function (newVal) {
        this.element.value = newVal;
        return this;
    },
    /*Toggle DOM element*/
    toggle: function () {
        if (this.element.style.display !== "none") {
            this.element.style.display = "none"
        } else {
            this.element.style.display = ""
        }
        return this;
    },
    /*set DOM element size*/
    size: function (height, width) {
        this.element.style.height = height + "px";
        this.element.style.width = width + "px";
        return this;
    },
    /*This calculates position of an element*/
    getPosition: function(){
        var xPosition = 0;
        var yPosition = 0;
        var el = this.element;
        while(el){
            xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
            el = el.offsetParent;
        }
        return {x: xPosition, y: yPosition};
    },
    /*sets position of a DOM element*/
    setPosition: function(X,Y){
       this.element.style.position = "absolute";
       this.element.style.left = X + 'px';
       this.element.style.top = Y + 'px';
       return this;
    },
    /*Swaps positions of the current element and a second element*/
    swapPositions: function(id2){
        var element2 = document.getElementById(id2);
        this.swapNodes(this.element,element2);
        return this;
    },
    swapNodes: function(node1, node2) {
    node2_copy = node2.cloneNode(true);
    node1.parentNode.insertBefore(node2_copy, node1);
    node2.parentNode.insertBefore(node1, node2);
    node2.parentNode.replaceChild(node2, node2_copy);
    },
    /*My internal addListener*/
    listener: function(event,callback){
        this.element.addEventListener(event,callback,false);
        return this;
    },

    /*handles the click event*/
    click: function(callback) {
        this.listener('click',callback);
        return this;
    },
    /*handles onMouseOver event*/
    mouseOver: function(callback){
        this.listener('onMouseOver',callback);
        return this;
    },
    blur: function(callback){
        this.listener('blur',callback);
        return this;
    },
    onLoad: function(callback){
        this.listener('load',callback);
        return this;
    }

}
