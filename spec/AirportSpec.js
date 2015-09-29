describe("Airport", function() {
  console.log("test");

  var plane;

  beforeEach(function() {
    plane = {
      isFlying: true,
      land: function() {
        this.isFlying = false;
      },
      takeOff: function() {
        this.isFlying = true;
      }
    }

    airport = new Airport();
  });

  it("can receive a plane", function() {
    airport.receive(plane);
    expect(airport.hangar.pop()).toEqual(plane);
  });

  it("can release a plane", function() {
    airport.receive(plane);
    plane2 = airport.release();
    expect(plane2.isFlying).toBe(true);
  });

});