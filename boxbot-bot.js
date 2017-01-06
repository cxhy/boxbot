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
  this.element.style.right = this.element.clientWidth + 'px';
};

BoxbotBot.prototype.getCurrentOffset = function(direction) {
  var offset = this.element.style[direction]
  console.log(offset);
  if(offset){
    return parseInt(offset.replace('px',''));
  }
  else{
    return 0;
  }
};

