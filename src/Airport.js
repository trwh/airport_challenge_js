function Airport() {
  this.hangar = [];
}

Airport.prototype.receive = function(plane) {
  this.hangar.push(plane);
};

Airport.prototype.release = function() {
  return this.hangar.pop();
};