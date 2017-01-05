/**
 *
 * @authors Dezheng Guo
 * @date    2016-12-28 01:32:30
 * @version $$
 */

var Boxbot = function(){
  this.map = new BoxbotMap('.boxbot-map');
  this.bot = new BoxbotBot('.boxbot-bot');
  this.map.create(20,20);
}