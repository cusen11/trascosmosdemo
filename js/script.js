// ===================== NOTE THIS IS FOR CIRCLE BLOB ===================== //
"use strict";

function _instanceof(left, right) {
	if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
		return !!right[Symbol.hasInstance](left);
	} else {
		return left instanceof right;
	}
}

function _classCallCheck(instance, Constructor) {
	if (!_instanceof(instance, Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _defineProperties(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || false;
		descriptor.configurable = true;
		if ("value" in descriptor) descriptor.writable = true;
		Object.defineProperty(target, descriptor.key, descriptor);
	}
}

function _createClass(Constructor, protoProps, staticProps) {
	if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	if (staticProps) _defineProperties(Constructor, staticProps);
	return Constructor;
}

var NUM = 1;
var pos;
var vel;
var circles = new Array();
var circles2 = new Array();
var circles3 = new Array();
var circles4 = new Array();
var circles5 = new Array();
var circles6 = new Array();
var circles7 = new Array();
var circles8 = new Array();
var circles9 = new Array();
var donuts = new Array();
var donuts2 = new Array();
var donuts3 = new Array();
var diameter;
var c;
var windowW = window.innerWidth;
var windowH = window.innerHeight;
var breakpoint = 768;
var circle1_diameter;
var circle1_x;
var circle1_y;
var circle2_diameter;
var circle2_x;
var circle2_y;
var circle3_diameter;
var circle3_x;
var circle3_y;
var circle4_diameter;
var circle4_x;
var circle4_y;
var circle5_diameter;
var circle5_x;
var circle5_y;
var circle6_diameter;
var circle6_x;
var circle6_y;
var circle7_diameter;
var circle7_x;
var circle7_y;
var circle8_diameter;
var circle8_x;
var circle8_y;
var circle9_diameter;
var circle9_x;
var circle9_y;
var donuts1_strokeW;
var donuts1_diameter;
var donuts1_x;
var donuts1_y;
var donuts2_strokeW;
var donuts2_diameter;
var donuts2_x;
var donuts2_y;
var donuts3_strokeW;
var donuts3_diameter;
var donuts3_x;
var donuts3_y;

// size at position of circles
circle1_diameter = 359;
circle1_x = windowW * 0.15;
circle1_y = windowH * 0.3;
circle2_diameter = 567;
circle2_x = windowW * 0.8;
circle2_y = windowH * 0.5;
circle3_diameter = 389;
circle3_x = windowW * 0.9;
circle3_y = windowH * 0.9;
circle4_diameter = 700;
circle4_x = windowW * 0.05;
circle4_y = windowH * 1.4;
circle5_diameter = 550;
circle5_x = windowW * 0.25;
circle5_y = windowH * 2.75;
circle6_diameter = 568;
circle6_x = windowW * 0.05;
circle6_y = windowH * 3.2;
circle7_diameter = 250;
circle7_x = windowW * 0.1;
circle7_y = windowH * 4.2;
circle8_diameter = 462;
circle8_x = windowW * 0.2;
circle8_y = windowH * 5.1;
circle9_diameter = 500;
circle9_x = windowW * 0.9;
circle9_y = windowH * 6.2;

// size and position of doughnut and their stroke
donuts1_strokeW = 100;
donuts1_diameter = 500;
donuts1_x = windowW * 1;
donuts1_y = windowH * 3.2;
donuts2_strokeW = 100;
donuts2_diameter = 500;
donuts2_x = windowW * 0.81;
donuts2_y = windowH * 5.09;
donuts3_strokeW = 150;
donuts3_diameter = 800;
donuts3_x = windowW * 0.2;
donuts3_y = windowH * 7.2;

function setup() {
	var app = createCanvas(windowWidth, windowHeight, P2D);
	app.parent('circleBlob');

	for (var i = 0; i < NUM; i++) {
		circles[i] = new CircleObj(i);
	}

	for (var _i = 0; _i < NUM; _i++) {
		circles2[_i] = new CircleObj2(_i);
	}

	for (var _i2 = 0; _i2 < NUM; _i2++) {
		circles3[_i2] = new CircleObj3(_i2);
	}

	for (var _i3 = 0; _i3 < NUM; _i3++) {
		circles4[_i3] = new CircleObj4(_i3);
	}

	for (var _i4 = 0; _i4 < NUM; _i4++) {
		donuts[_i4] = new DonutsObj(_i4);
	}

	for (var _i5 = 0; _i5 < NUM; _i5++) {
		donuts2[_i5] = new DonutsObj2(_i5);
	}

	for (var _i12 = 0; _i12 < NUM; _i12++) {
		donuts3[_i12] = new DonutsObj3(_i12);
	}

	for (var _i13 = 0; _i13 < NUM; _i13++) {
		circles5[_i13] = new CircleObj5(_i13);
	}

	for (var _i14 = 0; _i14 < NUM; _i14++) {
		circles6[_i14] = new CircleObj6(_i14);
	}

	for (var _i15 = 0; _i15 < NUM; _i15++) {
		circles7[_i15] = new CircleObj7(_i15);
	}

	for (var _i16 = 0; _i16 < NUM; _i16++) {
		circles8[_i16] = new CircleObj8(_i16);
	}

	for (var _i21 = 0; _i21 < NUM; _i21++) {
		circles9[_i21] = new CircleObj9(_i21);
	}

}

function draw() {
	background(255, 255, 255);

	for (var i = 0; i < NUM; i++) {
		circles3[i].drawellipse();
	}

	for (var _i6 = 0; _i6 < NUM; _i6++) {
		circles4[_i6].drawellipse();
	}

	for (var _i7 = 0; _i7 < NUM; _i7++) {
		circles2[_i7].drawellipse();
	}

	for (var _i9 = 0; _i9 < NUM; _i9++) {
		circles[_i9].drawellipse();
	}

	for (var _i8 = 0; _i8 < NUM; _i8++) {
		donuts[_i8].drawedonuts();
	}

	for (var _i10 = 0; _i10 < NUM; _i10++) {
		donuts2[_i10].drawedonuts();
	}

	for (var _i11 = 0; _i11 < NUM; _i11++) {
		donuts3[_i11].drawedonuts();
	}

	for (var _i17 = 0; _i17 < NUM; _i17++) {
		circles5[_i17].drawellipse();
	}

	for (var _i18 = 0; _i18 < NUM; _i18++) {
		circles6[_i18].drawellipse();
	}

	for (var _i19 = 0; _i19 < NUM; _i19++) {
		circles7[_i19].drawellipse();
	}

	for (var _i20 = 0; _i20 < NUM; _i20++) {
		circles8[_i20].drawellipse();
	}

	for (var _i22 = 0; _i22 < NUM; _i22++) {
		circles9[_i22].drawellipse();
	}
}


var CircleObj =
	/*#__PURE__*/
	function () {
		function CircleObj() {
			_classCallCheck(this, CircleObj);

			this.pos = createVector(circle1_x, circle1_y);
			this.vel = createVector(random(-0.3, 0.3), random(-0.3, 0.3)); // スピード

			this.diameter = int(circle1_diameter); // 大きさ

			this.c = color(237, 84, 133, 235); // 色 + 透明度
		}

		_createClass(CircleObj, [{
			key: "drawellipse",
			value: function drawellipse() {
				noStroke();
				fill(this.c);
				ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
				this.pos.add(this.vel);

				if (this.pos.x < 0 || this.pos.x > width) {
					this.vel.x = this.vel.x * -1;
				}

				if (this.pos.y < 0 || this.pos.y > height) {
					this.vel.y = this.vel.y * -1;
				}
			}
		}]);

		return CircleObj;
	}(); // 円形を生成2（blue）


var CircleObj2 =
	/*#__PURE__*/
	function () {
		function CircleObj2() {
			_classCallCheck(this, CircleObj2);

			this.pos = createVector(circle2_x, circle2_y);
			this.vel = createVector(random(-0.3, 0.3), random(-0.3, 0.3)); // スピード

			this.diameter = int(circle2_diameter); // 大きさ

			this.c = color(87, 209, 201, 235); // 色 + 透明度
		}

		_createClass(CircleObj2, [{
			key: "drawellipse",
			value: function drawellipse() {
				noStroke();
				fill(this.c);
				ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
				this.pos.add(this.vel);

				if (this.pos.x < 0 || this.pos.x > width) {
					this.vel.x = this.vel.x * -1;
				}

				if (this.pos.y < 0 || this.pos.y > height) {
					this.vel.y = this.vel.y * -1;
				}
			}
		}]);

		return CircleObj2;
	}(); // 円形を生成3（Pink）


var CircleObj3 =
	/*#__PURE__*/
	function () {
		function CircleObj3() {
			_classCallCheck(this, CircleObj3);

			this.pos = createVector(circle3_x, circle3_y);
			this.vel = createVector(random(-0.3, 0.3), random(-0.3, 0.3)); // スピード

			this.diameter = int(circle3_diameter); // 大きさ

			this.c = color(255, 160, 67, 235); // 色 + 透明度
		}

		_createClass(CircleObj3, [{
			key: "drawellipse",
			value: function drawellipse() {
				noStroke();
				fill(this.c);
				ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
				this.pos.add(this.vel);

				if (this.pos.x < 0 || this.pos.x > width) {
					this.vel.x = this.vel.x * -1;
				}

				if (this.pos.y < 0 || this.pos.y > height) {
					this.vel.y = this.vel.y * -1;
				}
			}
		}]);

		return CircleObj3;
	}(); // 円形を生成4（Purple）


var CircleObj4 =
	/*#__PURE__*/
	function () {
		function CircleObj4() {
			_classCallCheck(this, CircleObj4);

			this.pos = createVector(circle4_x, circle4_y);
			this.vel = createVector(random(-0.3, 0.3), random(-0.3, 0.3)); // スピード

			this.diameter = int(circle4_diameter); // 大きさ

			this.c = color(6, 213, 126, 235); // 色 + 透明度
		}

		_createClass(CircleObj4, [{
			key: "drawellipse",
			value: function drawellipse() {
				noStroke();
				fill(this.c);
				ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
				this.pos.add(this.vel);

				if (this.pos.x < 0 || this.pos.x > width) {
					this.vel.x = this.vel.x * -1;
				}

				if (this.pos.y < 0 || this.pos.y > height) {
					this.vel.y = this.vel.y * -1;
				}
			}
		}]);

		return CircleObj4;
	}(); // ドーナッツ形を生成1（Orange）

var CircleObj5 =
	/*#__PURE__*/
	function () {
		function CircleObj5() {
			_classCallCheck(this, CircleObj5);

			this.pos = createVector(circle5_x, circle5_y);
			this.vel = createVector(random(-0.3, 0.3), random(-0.3, 0.3)); // スピード

			this.diameter = int(circle5_diameter); // 大きさ

			this.c = color(237, 84, 133, 235); // 色 + 透明度
		}

		_createClass(CircleObj5, [{
			key: "drawellipse",
			value: function drawellipse() {
				noStroke();
				fill(this.c);
				ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
				this.pos.add(this.vel);

				if (this.pos.x < 0 || this.pos.x > width) {
					this.vel.x = this.vel.x * -1;
				}

				if (this.pos.y < 0 || this.pos.y > height) {
					this.vel.y = this.vel.y * -1;
				}
			}
		}]);

		return CircleObj5;
	}(); // ドーナッツ形を生成1（Orange）

var CircleObj6 =
	/*#__PURE__*/
	function () {
		function CircleObj6() {
			_classCallCheck(this, CircleObj6);

			this.pos = createVector(circle6_x, circle6_y);
			this.vel = createVector(random(-0.3, 0.3), random(-0.3, 0.3)); // スピード

			this.diameter = int(circle6_diameter); // 大きさ

			this.c = color(255, 160, 67, 235); // 色 + 透明度
		}

		_createClass(CircleObj6, [{
			key: "drawellipse",
			value: function drawellipse() {
				noStroke();
				fill(this.c);
				ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
				this.pos.add(this.vel);

				if (this.pos.x < 0 || this.pos.x > width) {
					this.vel.x = this.vel.x * -1;
				}

				if (this.pos.y < 0 || this.pos.y > height) {
					this.vel.y = this.vel.y * -1;
				}
			}
		}]);

		return CircleObj6;
	}(); // blue

var CircleObj7 =
	/*#__PURE__*/
	function () {
		function CircleObj7() {
			_classCallCheck(this, CircleObj7);

			this.pos = createVector(circle7_x, circle7_y);
			this.vel = createVector(random(-0.3, 0.3), random(-0.3, 0.3)); // スピード

			this.diameter = int(circle7_diameter); // 大きさ

			this.c = color(87, 209, 201, 235); // 色 + 透明度
		}

		_createClass(CircleObj7, [{
			key: "drawellipse",
			value: function drawellipse() {
				noStroke();
				fill(this.c);
				ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
				this.pos.add(this.vel);

				if (this.pos.x < 0 || this.pos.x > width) {
					this.vel.x = this.vel.x * -1;
				}

				if (this.pos.y < 0 || this.pos.y > height) {
					this.vel.y = this.vel.y * -1;
				}
			}
		}]);

		return CircleObj7;
	}(); // small green

var CircleObj8 =
	/*#__PURE__*/
	function () {
		function CircleObj8() {
			_classCallCheck(this, CircleObj8);

			this.pos = createVector(circle8_x, circle8_y);
			this.vel = createVector(random(-0.3, 0.3), random(-0.3, 0.3)); // スピード

			this.diameter = int(circle8_diameter); // 大きさ

			this.c = color(6, 213, 126, 235); // 色 + 透明度
		}

		_createClass(CircleObj8, [{
			key: "drawellipse",
			value: function drawellipse() {
				noStroke();
				fill(this.c);
				ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
				this.pos.add(this.vel);

				if (this.pos.x < 0 || this.pos.x > width) {
					this.vel.x = this.vel.x * -1;
				}

				if (this.pos.y < 0 || this.pos.y > height) {
					this.vel.y = this.vel.y * -1;
				}
			}
		}]);

		return CircleObj8;
	}(); //

var CircleObj9 =
	/*#__PURE__*/
	function () {
		function CircleObj9() {
			_classCallCheck(this, CircleObj9);

			this.pos = createVector(circle9_x, circle9_y);
			this.vel = createVector(random(-0.3, 0.3), random(-0.3, 0.3)); // スピード

			this.diameter = int(circle9_diameter); // 大きさ

			this.c = color(255, 160, 67, 235); // 色 + 透明度
		}

		_createClass(CircleObj9, [{
			key: "drawellipse",
			value: function drawellipse() {
				noStroke();
				fill(this.c);
				ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
				this.pos.add(this.vel);

				if (this.pos.x < 0 || this.pos.x > width) {
					this.vel.x = this.vel.x * -1;
				}

				if (this.pos.y < 0 || this.pos.y > height) {
					this.vel.y = this.vel.y * -1;
				}
			}
		}]);

		return CircleObj9;
	}(); // 

var DonutsObj =
	/*#__PURE__*/
	function () {
		function DonutsObj() {
			_classCallCheck(this, DonutsObj);

			this.strokeWeight = donuts1_strokeW; // 枠の太さ

			this.stroke = color(6, 213, 126, 235); // color of the doughnut

			this.pos = createVector(donuts1_x, donuts1_y);
			this.vel = createVector(random(-0.3, 0.3), random(-0.3, 0.3)); // スピード

			this.diameter = donuts1_diameter; // 大きさ

			this.c = color(255, 255, 255, 1); // 色 + 透明度
		}

		_createClass(DonutsObj, [{
			key: "drawedonuts",
			value: function drawedonuts() {
				strokeWeight(this.strokeWeight);
				stroke(this.stroke);
				fill(this.c);
				arc(this.pos.x, this.pos.y, this.diameter, this.diameter, 0, TWO_PI * 0.999);
				this.pos.add(this.vel);

				if (this.pos.x < 0 || this.pos.x > width) {
					this.vel.x = this.vel.x * -1;
				}

				if (this.pos.y < 0 || this.pos.y > height) {
					this.vel.y = this.vel.y * -1;
				}
			}
		}]);

		return DonutsObj;
	}(); // ドーナッツ形を生成2（Green）


var DonutsObj2 =
	/*#__PURE__*/
	function () {
		function DonutsObj2() {
			_classCallCheck(this, DonutsObj2);

			this.strokeWeight = donuts2_strokeW; // 枠の太さ

			this.stroke = color(237, 84, 133, 255); // 枠の色

			this.pos = createVector(donuts2_x, donuts2_y);
			this.vel = createVector(random(-0.3, 0.3), random(-0.3, 0.3)); // スピード

			this.diameter = donuts2_diameter; // 大きさ

			this.c = color(255, 255, 255, 1); // 色 + 透明度
		}

		_createClass(DonutsObj2, [{
			key: "drawedonuts",
			value: function drawedonuts() {
				strokeWeight(this.strokeWeight);
				stroke(this.stroke);
				fill(this.c);
				arc(this.pos.x, this.pos.y, this.diameter, this.diameter, 0, TWO_PI * 0.999);
				this.pos.add(this.vel);

				if (this.pos.x < 0 || this.pos.x > width) {
					this.vel.x = this.vel.x * -1;
				}

				if (this.pos.y < 0 || this.pos.y > height) {
					this.vel.y = this.vel.y * -1;
				}
			}
		}]);

		return DonutsObj2;
	}(); // 画面がリサイズされた時はカンバスもリサイズさせる


var DonutsObj3 =
	/*#__PURE__*/
	function () {
		function DonutsObj3() {
			_classCallCheck(this, DonutsObj3);

			this.strokeWeight = donuts3_strokeW; // 枠の太さ

			this.stroke = color(87, 209, 201, 255); // 枠の色

			this.pos = createVector(donuts3_x, donuts3_y);
			this.vel = createVector(random(-0.3, 0.3), random(-0.3, 0.3)); // スピード

			this.diameter = donuts3_diameter; // 大きさ

			this.c = color(255, 255, 255, 1); // 色 + 透明度
		}

		_createClass(DonutsObj3, [{
			key: "drawedonuts",
			value: function drawedonuts() {
				strokeWeight(this.strokeWeight);
				stroke(this.stroke);
				fill(this.c);
				arc(this.pos.x, this.pos.y, this.diameter, this.diameter, 0, TWO_PI * 0.999);
				this.pos.add(this.vel);

				if (this.pos.x < 0 || this.pos.x > width) {
					this.vel.x = this.vel.x * -1;
				}

				if (this.pos.y < 0 || this.pos.y > height) {
					this.vel.y = this.vel.y * -1;
				}
			}
		}]);

		return DonutsObj3;
	}(); // 画面がリサイズされた時はカンバスもリサイズさせる

// ===================== NOTE THIS IS FOR CIRCLE BLOB ===================== //

// ===================== ANIMATION when Scrolling ===================== //
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = (window_top_position + window_height);

	$.each($animation_elements, function () {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);

		// NOTE check to see if this current container is within viewport
		if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
			$element.addClass('in-view');
			if ($element.hasClass('sec01')) {
				$('.section01').find('.blob01').addClass('entryBlob01');
				$('.section01').find('.blob02').addClass('entryBlob02');
				setTimeout(function() {
					$('.section01 .blobImage').css('opacity', '1');
				}, 1000);
				setTimeout(function() {
					$('.section01 .descBlock').addClass('in-view');
					$('.section01 .blob01').addClass('blobs01');
					$('.section01 .blob02').addClass('blobs02');
				}, 1400);
			} else if($element.hasClass('blob03')) {
				$element.addClass('entryBlob03');
				setTimeout(function() {
					$element.addClass('blobs03');
				}, 1400);
			} else if($element.hasClass('blob04')) {
				$element.addClass('entryBlob04');
				setTimeout(function() {
					$('.cardBlock.flip-right._2s').addClass('in-view');
				}, 500);
				setTimeout(function() {
					$element.addClass('blobs04');
				}, 1400);
			} else if($element.hasClass('blob05')) {
				$element.addClass('entryBlob05');
				setTimeout(function() {
					$element.addClass('blobs05');
				}, 3000);
			}
		} else {
			// $element.removeClass('in-view');
		}
	});
}
// ===================== ANIMATION when Scrolling ===================== //

$(window).resize(function() {
	// for circle and donuts
	var containerHeight = $('.section03').outerHeight() + $('.footerArea').outerHeight() + 230;
	resizeCanvas(windowWidth, containerHeight); // width and height of canvas
});

$(window).on("load", function () {
	// Scroll Spy
	// Cache selectors
	var lastId,
	topMenu = $(".navbar"),
	topMenuHeight = topMenu.height() + 50,
	// All list items
	menuItems = topMenu.find("a"),
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function(){
	var item = $($(this).attr("href"));
	if (item.length) { return item; }
	});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
		var href = $(this).attr("href"),
			offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight-100;
		$('html, body').stop().animate({ 
			scrollTop: offsetTop
		}, 1000);
		e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function(){
		// Get container scroll position
		var fromTop = $(this).scrollTop()+topMenuHeight;
		
		// Get id of current scroll item
		var cur = scrollItems.map(function(){
			if ($(this).offset().top < fromTop)
			return this;
		});
		// Get the id of the current element
		cur = cur[cur.length-1];
		var id = cur && cur.length ? cur[0].id : "";
		
		if (lastId !== id) {
			lastId = id;
			// Set/remove active class
			menuItems
				.parent().removeClass("active")
				.end().filter("[href='#"+id+"']").parent().addClass("active");
		}                   
	});

	$('body').fadeIn();

	// for circle and donuts
	var containerHeight = $('.section03').outerHeight() + $('.footerArea').outerHeight() + 230;
	resizeCanvas(windowWidth, containerHeight); // width and height of canvas

	// ANIMATION for banner
	var myImgs = [
		'/images/01_mv.png', // 00
		'/images/02_mv.png', // 01
		'/images/03_mv.png', // 02
		'/images/04_mv.png', // 03
		'/images/05_mv.png', // 04
		'/images/06_mv.png', // 05
		'/images/07_mv.png', // 06
		'/images/08_mv.png', // 07
		'/images/09_mv.png', // 08
		'/images/11_mv.png', // 09
		'/images/12_mv.png', // 10
		'/images/13_mv.png', // 11
		'/images/14_mv.png', // 12
		'/images/15_mv.png', // 13
		'/images/16_mv.png', // 14
		'/images/17_mv.png', // 15
		'/images/18_mv.png', // 16
		'/images/19_mv.png', // 17
		'/images/20_mv.png', // 18
		'/images/21_mv.png', // 19
		'/images/22_mv.png', // 20
		'/images/23_mv.png', // 21
		'/images/24_mv.png', // 22
		'/images/25_mv.png', // 23
		'/images/26_mv.png', // 24
		'/images/27_mv.png', // 25
		'/images/28_mv.png', // 26
		'/images/29_mv.png', // 27
		'/images/30_mv.png', // 28
		'/images/31_mv.png', // 29
		'/images/32_mv.png', // 30
		'/images/33_mv.png', // 31
		'/images/35_mv.png', // 32
		'/images/36_mv.png', // 33
		'/images/37_mv.png', // 34
		'/images/38_mv.png', // 35
		'/images/39_mv.png', // 36
		'/images/40_mv.png', // 37
		'/images/41_mv.png', // 38
		'/images/42_mv.png', // 39
		'/images/43_mv.png', // 40
		'/images/44_mv.png', // 41
		'/images/45_mv.png', // 42
	];

	var displayedImgs = [];
	var boxIndexes = [0,1,3,4,5,6,7,8,10,12,13,14,15,16,17,19,20,22];
	var boxLimit = [
		[0,[0,1,7,8]],
		[1,[0,1,7,8]],
		[3,[3,4,10]],
		[4,[3,4,5,10]],
		[5,[4,5,6,10]],
		[6,[5,6,14,15,16]],
		[7,[0,1,7,8,12]],
		[8,[0,1,7,8,12]],
		[10,[3,4,5,10,13,14]],
		[12,[7,8,12,17]],
		[13,[10,13,14,19,20]],
		[14,[6,10,13,14,15,19,20]],
		[15,[6,14,15,16,20,22]],
		[16,[6,16,15,22]],
		[17,[12,17]],
		[19,[13,14,19,20]],
		[20,[13,14,15,19,20]],
		[22,[15,16,22]],
	];

	for(var x=0;x<boxIndexes.length;x++) {

		for (var y= 0; y < 500; y++) {
			var imgIdx = Math.floor(Math.random() * myImgs.length);
			if(displayedImgs.includes(imgIdx)) {
				// continue loop
			} else {
				displayedImgs.push(imgIdx);
				$('.bannerBlock > div:eq('+boxIndexes[x]+')').append('<img class="imgProfile new" src="' + myImgs[imgIdx] + '" alt="">');
				break;
			}
		}
	}
	
	setInterval(function () {
		
		var nextSet = []; // 3 new images
		var ctr = 0;
		
		for (var x= 0; x < 10000; x++) {
			var imgIdx = Math.floor(Math.random() * myImgs.length);
			if(displayedImgs.includes(imgIdx)) {
				// continue loop
			} else {
				var pushToggle = 0;
				if(nextSet.includes(imgIdx)) {
					// continue loop
				} else {
					var pushToggle = 1;
				}
				if(pushToggle) {
					ctr++;
					nextSet.push(imgIdx);
					if(ctr >= 3) {
						break;
					}
				}
			}
		}

		var boxIdx = []; // index in array for box
		var boxIdxArr = []; // div index for box
		var currBoxLimit = []; // get all divs to avoid based on selected div

		while(boxIdx.length < 3){

			var r = Math.floor(Math.random() * boxIndexes.length);
			for (var x= 0; x < 1000; x++) {
				if(boxIdxArr.includes(r)) {
					// continue loop
				} else {
					if(currBoxLimit.includes(boxIndexes[r])) {
						// continue loop
					} else {

						for(var y=0; y<boxLimit.length; y++) {
							if(boxLimit[y][0] == boxIndexes[r]) {
								for(var z=0; z<boxLimit[y][1].length; z++) {
									currBoxLimit.push(boxLimit[y][1][z]);
								}
							}
						}

						ctr++;
						boxIdxArr.push(r);
						boxIdx.push(boxIndexes[r]);

						if(ctr >= 3) {
							break;
						}
					}
				}
			}
		}

		for(var x=0;x<nextSet.length;x++) {
			$('.bannerBlock > div:eq('+boxIdx[x]+') .imgProfile').removeClass('new').fadeOut(1500, function() { $(this).remove() });
			$('.bannerBlock > div:eq('+boxIdx[x]+')').append('<img class="imgProfile new" src="' + myImgs[nextSet[x]] + '" alt="" style="display:none;">');
			$('.bannerBlock > div:eq('+boxIdx[x]+') .imgProfile.new').fadeIn(1500);
			displayedImgs[boxIdxArr[x]] = nextSet[x];
		}

	}, 3000);
	// ANIMATION for banner

	// Animation when Scrolling //
	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

	$('.modalBlock').on('click', function (e) {
		e.preventDefault();
		var modalHeight = $(this).find('.membersImage').height();
		$(this).parent().addClass('modalActive');
		$(this).parent().parent().css('height', modalHeight);
		$('.modal_overlay').fadeIn();

		var offset = $(this).offset();
		offset.top -= windowHeight / 50;
		$('html, body').animate({
			scrollTop: offset.top,
		});
		$('body').css('overflow', 'hidden');
	});
	$('.btnBack a').on('click', function (e) {
		e.preventDefault();
		$('.modal_overlay').fadeOut();
		$('.membersArea').find('.modal').removeClass('modalActive');
		$('.membersArea').find('.modal').removeClass('inMiddle');
		$('.modal_overlay').css('display', 'none');
		$('body').css('overflow', 'auto');
		$(this).parent().parent().parent().css('height', '');
	});
	$('.modal_overlay').on('click', function (e) {
		e.preventDefault();
		$('.modal_overlay').fadeOut();
		$('.membersArea').find('.modal').removeClass('modalActive');
		$('.membersArea').find('.modal').removeClass('inMiddle');
		$('.modal_overlay').css('display', 'none');
		$('body').css('overflow', 'auto');
		$('.membersBlock').css('height', '');
	});

	$('.btnSwitch').on('click', function (e) {
		e.preventDefault();

		$(this).closest('.sec03Block').find('.membersBlock').removeClass('active');
		$(this).closest('.tabsBlock').find('.btnSwitch').removeClass('activeSwitch');
		$(this).closest('.sec03Block').find('.membersBlock').removeClass('mr-0');

		if ($(this).hasClass('fGrp01')) {
			$(this).closest('.sec03Block').find('.group01').addClass('active');
		} else if ($(this).hasClass('fGrp02')) {
			$(this).closest('.sec03Block').find('.group02').addClass('active');
		} else if ($(this).hasClass('fGrp03')) {
			$(this).closest('.sec03Block').find('.group03').addClass('active');
		} else if ($(this).hasClass('fGrp04')) {
			$(this).closest('.sec03Block').find('.group04').addClass('active');
		} else if ($(this).hasClass('fGrp05')) {
			$(this).closest('.sec03Block').find('.group05').addClass('active');
		} else if ($(this).hasClass('fGrp06')) {
			$(this).closest('.sec03Block').find('.group06').addClass('active');
		} else if ($(this).hasClass('fGrp07')) {
			$(this).closest('.sec03Block').find('.group07').addClass('active');
		} else if ($(this).hasClass('fGrp08')) {
			$(this).closest('.sec03Block').find('.group08').addClass('active');
		} else if ($(this).hasClass('fGrp09')) {
			$(this).closest('.sec03Block').find('.group09').addClass('active');
		} else if ($(this).hasClass('fAll')) {
			$(this).closest('.sec03Block').find('.membersBlock').addClass('active');
		}

		$(this).addClass('activeSwitch');
		$('.membersBlock').addClass('inActive');
		$(this).closest('.sec03Block').find('.active').removeClass('inActive');
		$(this).closest('.sec03Block').find('.active').eq(2).addClass('mr-0');
		$(this).closest('.sec03Block').find('.active').eq(5).addClass('mr-0');
		$(this).closest('.sec03Block').find('.active').eq(8).addClass('mr-0');
		$(this).closest('.sec03Block').find('.active').eq(11).addClass('mr-0');
		$(this).closest('.sec03Block').find('.active').eq(14).addClass('mr-0');
		$(this).closest('.sec03Block').find('.active').eq(17).addClass('mr-0');
		$(this).closest('.sec03Block').find('.active').eq(20).addClass('mr-0');
		$(this).closest('.sec03Block').find('.active').eq(23).addClass('mr-0');
		$(this).closest('.sec03Block').find('.active').eq(26).addClass('mr-0');
		$(this).closest('.sec03Block').find('.active').eq(26).addClass('mr-0');
		$(this).closest('.sec03Block').find('.active').eq(29).addClass('mr-0');
		$(this).closest('.sec03Block').find('.active').eq(32).addClass('mr-0');
		$(this).closest('.sec03Block').find('.active').eq(35).addClass('mr-0');
		$(this).closest('.sec03Block').find('.active').eq(38).addClass('mr-0');
		$(this).closest('.sec03Block').find('.active').eq(41).addClass('mr-0');
		$(this).closest('.sec03Block').find('.active').eq(44).addClass('mr-0');
		
		setTimeout(function() {
			// for circle and donuts
			var containerHeight = $('.section03').outerHeight() + $('.footerArea').outerHeight() + 230;
			resizeCanvas(windowWidth, containerHeight); // width and height of canvas
		}, 800);
	});
});