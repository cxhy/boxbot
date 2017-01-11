/**
 *
 * @authors Dezheng Guo
 * @date    2017-01-02 13:38:05
 * @version $Id$
 */


var BoxbotBot = function (selector) {
  this.element = document.querySelector(selector)
  this.init()
}

BoxbotBot.prototype.init = function() {
  this.element.style.left = this.element.clientWidth + 'px';
  this.element.style.top  = this.element.clientWidth + 'px';
};

BoxbotBot.prototype.getCurrentOffset = function(direction) {
  var offset = this.element.style[direction]
//  debugger;
  console.log(offset);
  if(offset){
    return parseInt(offset.replace('px',''));
  }
  else{
    return 0;
  }
};

BoxbotBot.prototype.getCurrentPostion = function() {
  return[
  Math.round(this.getCurrentOffset('left') / this.element.clientWidth),
  Math.round(this.getCurrentOffset('right')/ this.element.clientWidth)
  ]
};

BoxbotBot.prototype.getPostion = function(offset) {
  // body...
};