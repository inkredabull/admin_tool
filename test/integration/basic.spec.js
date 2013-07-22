describe("Index page", function () {
  it("contains expected elements", function () {
    visit('/').then(function () {
      find('.well').length.should.equal(3);
      find('.span3').length.should.equal(1);
      find('.span9').length.should.equal(1);
    });
  });
});
