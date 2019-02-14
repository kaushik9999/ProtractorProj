'use strict';

describe('OpsLoginTest',function(){

	beforeEach(function(){
		browser.get("https://qamarket.opstechnology.com");
	});

	describe('verify title',function(){
		it('title should be displayed as expected',function(){
			expect(browser.getTitle()).toEqual('OpsTechnology Inc');

		});
	});

});