/*global QUnit*/

sap.ui.define([
	"project1/controller/View1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("I should test the View1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

	QUnit.module("Module B"); 

	QUnit.test("1. a basic test example", function (assert) {
			 
			var value = "hello6"; 
			assert.equal(value, "hello1", "We expect value to be 'hello1'"); 
			assert.ok(true, "this test is fine");
	});

});
