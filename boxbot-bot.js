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