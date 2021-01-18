//const expect= require("chai").expect;
const assert=require('chai').assert;
const utility=require('./utility');
describe('Validate First Name', function()
{
    it('should return true if valid first name', function() {
        //expect("Priyanka").to.match(regexName);
        let firstname=utility.validFirstName('Priyanka');
		assert.isTrue(firstname=='Priyanka','Validation is pass');
    })
    it('should return false for if invalid first name', function() {
        let firstname=utility.validFirstName('pri');
        assert.isFalse(firstname=='pri','Validation is fails');
    })
});
describe('Validate Last Name', function()
{
    it('should return true if valid last name', function() {
        let lastname=utility.validLastName('Patil');
		assert.isTrue(lastname=='Patil','Validation is pass');
    })
    it('should return false for if invalid last name', function() {
        let lastname=utility.validLastName('patil');
        assert.isFalse(lastname=='patil','Validation is fails');
    })
});
describe('Validate Email Id', function()
{
    it('should return true if valid email id', function() {
        let mailid=utility.validEmail('ppriyapatil1208@gmail.com');
		assert.isTrue(mailid=='ppriyapatil1208@gmail.com','Validation is pass');
    })
    it('should return false for if invalid email id', function() {
        let mailid=utility.validEmail('priya123gmail');
        assert.isFalse(mailid=='priya123gmail','Validation is fails');
    })
});
describe('Validate Mobile No', function()
{
    it('should return true if valid mobile no', function() {
        let mobno=utility.validMobileFormat('91 9881205452');
		assert.isTrue(mobno=='91 9881205452','Validation is pass');
    })
    it('should return false for if invalid mobile no', function() {
        let mobno=utility.validMobileFormat('9881205452');
        assert.isFalse(mobno=='9881205452','Validation is fails');
    })
});
describe('Validate Password', function()
{
    it('should return true if valid password', function() {
        let pass=utility.Password('Priyanka@123');
		assert.isTrue(pass=='Priyanka@123','Validation is pass');
    })
    it('should return false for if invalid password', function() {
        let pass=utility.Password('priya123');
        assert.isFalse(pass=='priya123','Validation is fails');
    })
});
