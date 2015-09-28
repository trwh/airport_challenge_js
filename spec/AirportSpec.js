describe("Airport", function() {
  var plane;

  beforeEach(function() {
    airport = new Airport();
  });

  it("is flying when created", function() {
    expect(plane.isFlying).toBe(true);
  });