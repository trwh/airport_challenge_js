function Airport() {
  this.hangar = [];
}

Airport.prototype.receive = function(plane) {
  plane.land();
  this.hangar.push(plane);
};

Airport.prototype.release = function() {
  plane = this.hangar.pop();
  plane.takeOff();
  return plane;
};