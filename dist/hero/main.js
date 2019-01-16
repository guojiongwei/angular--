(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _kind_kind_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kind/kind.component */ "./src/app/kind/kind.component.ts");
/* harmony import */ var _kind_twokind_twokind_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kind/twokind/twokind.component */ "./src/app/kind/twokind/twokind.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'kind',
        component: _kind_kind_component__WEBPACK_IMPORTED_MODULE_3__["KindComponent"]
    },
    {
        path: 'cart',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"]
    },
    {
        path: 'twokind/:pid',
        component: _kind_twokind_twokind_component__WEBPACK_IMPORTED_MODULE_4__["TwokindComponent"]
    },
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"]
    },
    {
        path: 'detail/:iid',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"]
    },
    {
        path: 'list/:fcid',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n  <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _kind_kind_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kind/kind.component */ "./src/app/kind/kind.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _kind_twokind_twokind_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./kind/twokind/twokind.component */ "./src/app/kind/twokind/twokind.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _user_user_child_user_child_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/user-child/user-child.component */ "./src/app/user/user-child/user-child.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _kind_kind_component__WEBPACK_IMPORTED_MODULE_5__["KindComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_10__["DetailComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
                _kind_twokind_twokind_component__WEBPACK_IMPORTED_MODULE_13__["TwokindComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_14__["ListComponent"],
                _user_user_child_user_child_component__WEBPACK_IMPORTED_MODULE_15__["UserChildComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\r\n  <div class=\"content\">\r\n    <!-- <button (click)=\"todo($event)\">点击sssssssssss</button> -->\r\n    <ul id=\"lists\">\r\n      <li *ngFor=\"let item of list;index as i\" (click)='tap(i)' [class] = 'index == i ? \"active\": \"\" '>\r\n        {{item.title}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <app-footer [page]=\"2\"></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cart/cart.component.scss":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\n  height: 100%;\n  overflow: auto;\n  display: flex;\n  flex-direction: column; }\n  .home .content {\n    flex: 1; }\n  .home .content #lists {\n      width: 100%;\n      height: 40px;\n      display: flex;\n      justify-content: space-around;\n      align-items: center;\n      background: #eee; }\n  .home .content #lists li {\n        flex: auto;\n        text-align: center;\n        height: 100%;\n        box-sizing: border-box;\n        border-bottom: 1px solid red;\n        line-height: 40px; }\n  .home .content #lists li.active {\n          background: #fff;\n          border: 1px solid red;\n          border-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartComponent = /** @class */ (function () {
    function CartComponent() {
        this.list = [
            { title: '默认排序' },
            { title: '按受益排序' },
            { title: '按朋友圈火热度排序' }
        ];
        this.index = 0;
        this.names = {};
        this.toParent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        setInterval(function () {
        }, 1000);
    }
    CartComponent.prototype.todo = function (event) {
        this.toParent.emit('11111111111111');
        console.log('11111111');
    };
    CartComponent.prototype.childFn = function () {
        console.log('我是子类的方法');
    };
    CartComponent.prototype.tap = function (i) {
        this.index = i;
    };
    CartComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CartComponent.prototype, "names", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CartComponent.prototype, "toParent", void 0);
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/detail/detail.component.html":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail\">\r\n  <div class=\"swiper-container\">\r\n    <div class=\"swiper-wrapper\">\r\n        <div class=\"swiper-slide\" *ngFor=\"let item of banner\">\r\n          <img src=\"{{item}}\" alt=\"\">\r\n        </div>\r\n    </div>\r\n    <!-- 如果需要分页器 -->\r\n    <div class=\"swiper-pagination\"></div>\r\n  </div>\r\n  <div class=\"detail-info\">\r\n    <h4 *ngIf='itemInfo.title'>{{itemInfo.title}}</h4>\r\n    <div class=\"info-price\">\r\n      <span [ngStyle]=\"{color: '#f69'}\" style=\"font-size: 0.2rem\">{{itemInfo.oldPrice}}</span>\r\n      <span class=\"price\">{{itemInfo.price}}</span>\r\n      <span class=\"discountDesc\">{{itemInfo.discountDesc}}</span>\r\n    </div>\r\n    <div class=\"info-num\">\r\n      <span *ngFor='let item of columns'>\r\n        {{item}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/detail/detail.component.scss":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background: #fff; }\n  .detail .swiper-container, .detail .swiper-wrapper, .detail .swiper-slide {\n    width: 100% !important;\n    height: 4rem; }\n  .detail .swiper-container img, .detail .swiper-wrapper img, .detail .swiper-slide img {\n      width: 100% !important; }\n  .detail .detail-info {\n    padding: 0 0.1rem; }\n  .detail .detail-info .info-price {\n      height: 0.3rem;\n      display: flex;\n      align-items: center; }\n  .detail .detail-info .info-price span.price {\n        line-height: .3rem;\n        color: #999;\n        text-decoration: line-through;\n        margin-left: 0.2rem; }\n  .detail .detail-info .info-price span.discountDesc {\n        display: inline-block;\n        background: #f69;\n        padding: 0.01rem 0.04rem;\n        color: #fff;\n        border-radius: 0.2rem;\n        margin-left: 0.2rem; }\n  .detail .detail-info .info-num {\n      display: flex;\n      height: 0.3rem;\n      justify-content: space-around;\n      align-items: center;\n      border-bottom: 0.01rem solid #eee; }\n  .detail .detail-info .info-num span {\n        color: #999;\n        font-size: 0.12rem; }\n"

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailComponent = /** @class */ (function () {
    function DetailComponent(router) {
        this.router = router;
        this.itemInfo = {
            title: ''
        };
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
            url: "http://39.106.41.116:3000?iid=" + this.router.snapshot.params.iid,
            dataType: 'json',
            success: function (res) {
                _this.banner = res.result.itemInfo.topImages;
                _this.itemInfo = res.result.itemInfo;
                _this.columns = res.result.columns.concat(Object.values(res.result.itemInfo.extra));
                console.log(_this.columns);
            }
        });
        // setTimeout(() => {
        window.onload = function () {
            var mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.swiper-container', {
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                loop: true,
                effect: 'coverflow',
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                }
            });
        };
        // }, 2000);
        // this.router.params
        //   .subscribe((params) => {
        //     console.log(params);
        //   });
    };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/detail/detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <a  *ngFor=\"let item of list; index as i\" [routerLink] = \"[item.path]\" [style.color]=\"i==page ?'#ff3366':''\">\r\n      <p class=\"\" class=\"{{item.icon}}\"></p>\r\n      <p>{{item.title}}</p>\r\n    </a>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  width: 100%;\n  height: 0.5rem;\n  background: #eee;\n  display: flex; }\n  footer a {\n    display: inline-block;\n    flex: 1;\n    overflow: hidden;\n    text-align: center;\n    line-height: 0.2rem;\n    padding-top: 0.05rem;\n    box-sizing: border-box;\n    text-decoration: none;\n    color: #333; }\n  footer a p:nth-of-type(1) {\n      font-size: 0.16rem; }\n  footer a p:nth-of-type(2) {\n      font-size: 0.12rem; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.list = [
            { path: '/', title: '首页', icon: 'iconfont icon-shouye' },
            { path: '/kind', title: '分类', icon: 'iconfont icon-fenlei' },
            { path: '/cart', title: '购物车', icon: 'iconfont icon-gouwuche' },
            { path: '/user', title: '我的', icon: 'iconfont icon-wode' }
        ];
    }
    FooterComponent.prototype.ngOnInit = function () {
        console.log(this);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FooterComponent.prototype, "page", void 0);
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\r\n  <div class=\"content\">\r\n    <app-search></app-search>\r\n    <!-- <img class=\"banner\" src='{{banner}}' /> -->\r\n    <div class=\"swiper-container\">\r\n      <div class=\"swiper-wrapper\">\r\n          <div class=\"swiper-slide\" *ngFor=\"let item of banner\">\r\n            <img src=\"{{item.image}}\" alt=\"\">\r\n          </div>\r\n      </div>\r\n      <!-- 如果需要分页器 -->\r\n      <div class=\"swiper-pagination\"></div>\r\n    </div>\r\n    <ul class=\"four\">\r\n      <li  *ngFor=\"let item of bannerlist;index as i\">\r\n        <img src=\"{{item.image}}\" alt=\"\">\r\n        <p>{{item.title}}</p>\r\n      </li>\r\n    </ul>\r\n      <img class=\"poplur\" src=\"https://s10.mogucdn.com/mlcdn/c45406/171030_6ja2gfl82cl093768ilk7g0fb2fj1_740x543.jpg_800x9999.v1c7E.70.jpg\" alt=\"\">\r\n    <div class=\"sort\">\r\n      <span (click) ='sort(\"pop\")' [class] = 'sorts == \"pop\" ? \"red\": \"\" '>流行</span>\r\n      <span (click) ='sort(\"new\")' [class] = 'sorts == \"new\" ? \"red\": \"\" '>新款</span>\r\n      <span (click) ='sort(\"sell\")' [class] = 'sorts == \"sell\" ? \"red\": \"\" '>精选</span>\r\n    </div>\r\n    <div class=\"pro_list\">\r\n      <a  *ngFor=\"let item of pro_list;index as i\" [routerLink] = \"['/detail', item.iid]\">\r\n          <img src=\"{{item.show.img}}\" alt=\"\">\r\n          <p>{{item.title}}</p>\r\n          <p><span>{{item.price}}</span><i class=\"iconfont icon-xihuan1\"></i> <time>{{item.sale}}</time></p>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <app-footer [page]=\"0\"></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column; }\n  .home .swiper-container, .home .swiper-wrapper, .home .swiper-slide {\n    width: 100% !important;\n    height: 2rem; }\n  .home .swiper-container img, .home .swiper-wrapper img, .home .swiper-slide img {\n      width: 100% !important; }\n  .home .red {\n    color: #ff3366;\n    border-bottom: 0.02rem solid #ff3366; }\n  .home .content {\n    flex: 1;\n    overflow: auto; }\n  .home .content .banner {\n      width: 100%; }\n  .home .content .four {\n      width: 100%;\n      height: 1.1rem;\n      display: flex;\n      padding-bottom: 0.1rem;\n      padding-top: 0.06rem;\n      background: #fff;\n      margin-top: -0.02rem; }\n  .home .content .four li {\n        flex: 1;\n        text-align: center; }\n  .home .content .four li img {\n          width: 0.8rem; }\n  .home .content .poplur {\n      margin-top: 0.1rem;\n      width: 100%; }\n  .home .content .sort {\n      width: 100%;\n      height: 0.4rem;\n      background: #fff;\n      display: flex;\n      margin-top: 0.1rem;\n      align-items: center;\n      justify-content: space-around; }\n  .home .content .sort span {\n        display: inline-block;\n        padding: 0.05rem;\n        text-align: center; }\n  .home .content .pro_list {\n      display: flex;\n      flex-wrap: wrap;\n      background: #fff; }\n  .home .content .pro_list a {\n        display: inline-block;\n        width: 50%;\n        padding: 0.05rem;\n        box-sizing: border-box;\n        text-align: center; }\n  .home .content .pro_list a img {\n          width: 100%;\n          height: 2.6rem; }\n  .home .content .pro_list a p {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          font-size: 0.12rem; }\n  .home .content .pro_list a p span {\n            color: #FF3366; }\n  .home .content .pro_list a p i {\n            color: #FF3366;\n            font-size: 0.12rem;\n            margin-left: 0.1rem; }\n  .home .content .pro_list a p time {\n            color: #999;\n            font-size: 0.12rem;\n            margin-left: 0.04rem; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.page = 1;
        this.sorts = 1;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_1___default.a.getJSON('https://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730&callback=?', function (res) {
            _this.bannerlist = res.data[13730].list;
            _this.banner = res.data[43542].list;
        });
        this.sort('pop');
        setTimeout(function () {
            var mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.swiper-container', {
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                loop: true,
                effect: 'coverflow',
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                }
            });
        }, 1000);
    };
    // 流行
    HomeComponent.prototype.sort = function (sort) {
        var _this = this;
        this.sorts = sort;
        jquery__WEBPACK_IMPORTED_MODULE_1___default.a.getJSON("http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=46f728c0-ff2b-46dc-847d-e1b31ec890de&sort=" + sort + "&_=1531639867403&callback=?", function (res) {
            _this.pro_list = res.data.list;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/kind/kind.component.html":
/*!******************************************!*\
  !*** ./src/app/kind/kind.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kind\">\r\n  <!-- <app-search></app-search> -->\r\n  <div class=\"content\">\r\n    <div class=\"title\">\r\n      <p>本周流行</p>\r\n    </div>\r\n    <div class=\"list\">\r\n      <a *ngFor=\"let item of list;index as i\" (click) = 'gotwokind(item.link)'>\r\n          <img src=\"{{item.image}}\" alt=\"\">\r\n          <p>{{item.title}}</p>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <app-footer [page]=\"1\"></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/kind/kind.component.scss":
/*!******************************************!*\
  !*** ./src/app/kind/kind.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kind {\n  height: 100%;\n  overflow: auto;\n  display: flex;\n  flex-direction: column; }\n  .kind .content {\n    flex: 1;\n    width: 100%; }\n  .kind .content .title {\n      width: 100%;\n      height: 0.4rem;\n      background: #fff;\n      border-bottom: 0.02rem solid #eee;\n      line-height: 0.4rem;\n      padding-left: 0.2rem; }\n  .kind .content .title p {\n        float: left;\n        font-size: 0.16rem; }\n  .kind .content .list {\n      width: 100%;\n      height: 4.8rem;\n      display: flex;\n      flex-wrap: wrap;\n      background: #fff; }\n  .kind .content .list a {\n        display: inline-block;\n        width: 25%;\n        height: 1.2rem;\n        box-sizing: border-box;\n        text-align: center;\n        border-right: 0.01rem solid #eee;\n        border-bottom: 0.01rem solid #eee; }\n  .kind .content .list a img {\n          width: 100%;\n          height: 0.8rem; }\n"

/***/ }),

/***/ "./src/app/kind/kind.component.ts":
/*!****************************************!*\
  !*** ./src/app/kind/kind.component.ts ***!
  \****************************************/
/*! exports provided: KindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KindComponent", function() { return KindComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KindComponent = /** @class */ (function () {
    function KindComponent(router) {
        this.router = router;
    }
    KindComponent.prototype.ngOnInit = function () {
        this.getKinds();
    };
    KindComponent.prototype.getKinds = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_2___default.a.getJSON('http://simba-api.meilishuo.com/venus/mce/v1/urlChange/pc?pid=20783&channel=wap&page=1&pageSize=30&_=1531660140488&callback=?', function (res) {
            _this.list = res.value;
        });
    };
    KindComponent.prototype.gotwokind = function (item) {
        // console.log(item.split('?')[1]);
        console.log(item.indexOf('pid'));
        if (item.indexOf('pid') !== -1) {
            var pid = item.split('pid=')[1].split('&')[0];
            console.log(pid);
            //  this.router.navigate(['/twokind', pid]);
            this.router.navigate(['/twokind', pid]);
        }
        else {
            var fcid = item.split('fcid=')[1].split('&')[0];
            console.log(fcid);
            this.router.navigate(['/list', fcid]);
        }
    };
    KindComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kind',
            template: __webpack_require__(/*! ./kind.component.html */ "./src/app/kind/kind.component.html"),
            styles: [__webpack_require__(/*! ./kind.component.scss */ "./src/app/kind/kind.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], KindComponent);
    return KindComponent;
}());



/***/ }),

/***/ "./src/app/kind/twokind/twokind.component.html":
/*!*****************************************************!*\
  !*** ./src/app/kind/twokind/twokind.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kind\">\r\n  <app-search></app-search>\r\n  <div class=\"content\" *ngFor=\"let items of list\">\r\n    <div class=\"title\" *ngIf=\"items.list.length>0\">\r\n      <p>{{items.info.title}}</p>\r\n    </div>\r\n    <div class=\"list\" *ngIf=\"items.list.length>0\">\r\n      <a *ngFor=\"let item of items.list;index as i\" (click) = 'gotwokind(item.link)'>\r\n          <img src=\"{{item.image}}\" alt=\"\">\r\n          <p>{{item.title}}</p>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/kind/twokind/twokind.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/kind/twokind/twokind.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kind {\n  height: 100%;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  overflow-y: auto; }\n  .kind .content {\n    flex: 1;\n    width: 100%; }\n  .kind .content .title {\n      width: 100%;\n      height: 0.4rem;\n      background: #fff;\n      border-bottom: 0.02rem solid #eee;\n      line-height: 0.4rem;\n      padding-left: 0.2rem; }\n  .kind .content .title p {\n        float: left;\n        font-size: 0.16rem; }\n  .kind .content .list {\n      width: 100%;\n      display: flex;\n      flex-wrap: wrap;\n      background: #fff; }\n  .kind .content .list a {\n        display: inline-block;\n        width: 25%;\n        height: 1.2rem;\n        box-sizing: border-box;\n        text-align: center;\n        border-right: 0.01rem solid #eee;\n        border-bottom: 0.01rem solid #eee; }\n  .kind .content .list a img {\n          width: 100%;\n          height: 0.8rem; }\n"

/***/ }),

/***/ "./src/app/kind/twokind/twokind.component.ts":
/*!***************************************************!*\
  !*** ./src/app/kind/twokind/twokind.component.ts ***!
  \***************************************************/
/*! exports provided: TwokindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwokindComponent", function() { return TwokindComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TwokindComponent = /** @class */ (function () {
    function TwokindComponent(routeinfo, router) {
        this.routeinfo = routeinfo;
        this.router = router;
    }
    TwokindComponent.prototype.ngOnInit = function () {
        this.getKinds();
    };
    TwokindComponent.prototype.getKinds = function () {
        var _this = this;
        var pid = this.routeinfo.snapshot.params.pid;
        jquery__WEBPACK_IMPORTED_MODULE_2___default.a.getJSON("https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid=" + pid + "&_=1532006966523&callback=?", function (res) {
            _this.list = res.value.category_1.list;
            var arr = [];
            for (var i in res.value) {
                arr.push(res.value[i]);
            }
            ;
            console.log(arr);
            _this.list = arr;
        });
    };
    TwokindComponent.prototype.gotwokind = function (item) {
        var fcid = item.split('fcid=')[1].split('&')[0];
        this.router.navigate(['/list', fcid]);
    };
    TwokindComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-twokind',
            template: __webpack_require__(/*! ./twokind.component.html */ "./src/app/kind/twokind/twokind.component.html"),
            styles: [__webpack_require__(/*! ./twokind.component.scss */ "./src/app/kind/twokind/twokind.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TwokindComponent);
    return TwokindComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\r\n    <div class=\"content\">\r\n      <app-search></app-search>\r\n      <div class=\"sort\">\r\n        <span (click) ='sort(\"pop\")' [class] = 'sorts == \"pop\" ? \"red\": \"\" '>流行</span>\r\n        <span (click) ='sort(\"new\")' [class] = 'sorts == \"new\" ? \"red\": \"\" '>新款</span>\r\n        <span (click) ='sort(\"sell\")' [class] = 'sorts == \"sell\" ? \"red\": \"\" '>精选</span>\r\n      </div>\r\n      <div class=\"pro_list\">\r\n        <a  *ngFor=\"let item of pro_list;index as i\" [routerLink] = \"['/detail', item.iid]\">\r\n            <img src=\"{{item.show.img}}\" alt=\"\">\r\n            <p>{{item.title}}</p>\r\n            <p><span>{{item.price}}</span><i class=\"iconfont icon-xihuan1\"></i> <time>{{item.sale}}</time></p>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/list/list.component.scss":
/*!******************************************!*\
  !*** ./src/app/list/list.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column; }\n  .home .red {\n    color: #ff3366;\n    border-bottom: 0.02rem solid #ff3366; }\n  .home .content {\n    flex: 1;\n    overflow: auto; }\n  .home .content .banner {\n      width: 100%; }\n  .home .content .four {\n      width: 100%;\n      height: 1.1rem;\n      display: flex;\n      padding-bottom: 0.1rem;\n      padding-top: 0.06rem;\n      background: #fff;\n      margin-top: -0.02rem; }\n  .home .content .four li {\n        flex: 1;\n        text-align: center; }\n  .home .content .four li img {\n          width: 0.8rem; }\n  .home .content .poplur {\n      margin-top: 0.1rem;\n      width: 100%; }\n  .home .content .sort {\n      width: 100%;\n      height: 0.4rem;\n      background: #fff;\n      display: flex;\n      margin-top: 0.1rem;\n      align-items: center;\n      justify-content: space-around; }\n  .home .content .sort span {\n        display: inline-block;\n        padding: 0.05rem;\n        text-align: center; }\n  .home .content .pro_list {\n      display: flex;\n      flex-wrap: wrap;\n      background: #fff; }\n  .home .content .pro_list a {\n        display: inline-block;\n        width: 50%;\n        padding: 0.05rem;\n        box-sizing: border-box;\n        text-align: center; }\n  .home .content .pro_list a img {\n          width: 100%;\n          height: 2.6rem; }\n  .home .content .pro_list a p {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          font-size: 0.12rem; }\n  .home .content .pro_list a p span {\n            color: #FF3366; }\n  .home .content .pro_list a p i {\n            color: #FF3366;\n            font-size: 0.12rem;\n            margin-left: 0.1rem; }\n  .home .content .pro_list a p time {\n            color: #999;\n            font-size: 0.12rem;\n            margin-left: 0.04rem; }\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(routeinfo) {
        this.routeinfo = routeinfo;
        this.sorts = 1;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.fcid = this.routeinfo.snapshot.params.fcid;
        this.sort('pop');
    };
    // 流行
    ListComponent.prototype.sort = function (sort) {
        var _this = this;
        this.sorts = sort;
        jquery__WEBPACK_IMPORTED_MODULE_1___default.a.getJSON("http://list.meilishuo.com/search?frame=0&page=1&sort=" + this.sorts + "&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=46f728c0-ff2b-46dc-847d-e1b31ec890de&fcid=" + this.fcid + "&_=1532013966262&callback=?", function (res) {
            console.log(res);
            _this.pro_list = res.data.list;
        });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <header>\r\n        <i class=\"iconfont icon-shouye\"></i>\r\n        <div><i class=\"iconfont icon-sousuo\"></i><input type=\"text\" placeholder=\"请输入关键词\"></div>\r\n        <i class=\"iconfont icon-pinglun\"></i>\r\n      </header>"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  height: 0.45rem;\n  background: #fff;\n  display: flex;\n  padding: 0.05rem 0.1rem;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: space-between; }\n  header div {\n    flex: 1;\n    height: 0.32rem;\n    margin: 0 0.1rem;\n    background: #F4F4F4;\n    border-radius: 0.05rem;\n    box-sizing: border-box;\n    line-height: 0.32rem;\n    padding: 0 0.1rem;\n    display: flex;\n    align-items: center; }\n  header div input {\n      text-indent: 0.1rem;\n      border: 0;\n      width: 80%;\n      height: 80%;\n      background: #F4F4F4;\n      outline: none; }\n  header i {\n    font-size: 0.18rem; }\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/user/user-child/user-child.component.html":
/*!***********************************************************!*\
  !*** ./src/app/user/user-child/user-child.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"child\">\n  <button (click)='toparent()'>传值给父组件</button>\n</div>"

/***/ }),

/***/ "./src/app/user/user-child/user-child.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/user/user-child/user-child.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-child/user-child.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/user-child/user-child.component.ts ***!
  \*********************************************************/
/*! exports provided: UserChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserChildComponent", function() { return UserChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserChildComponent = /** @class */ (function () {
    // @viewParentEl(UserComponent) user: UserComponent;
    // @Output() private toparent = new EventEmitter();
    function UserChildComponent() {
        this.toUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserChildComponent.prototype.ngOnInit = function () {
        console.log(this);
    };
    UserChildComponent.prototype.toparent = function () {
        console.log(this);
        this.toUser.emit('我是子组件的值');
    };
    UserChildComponent.prototype.a = function () {
        console.log('父组件操作子组件');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UserChildComponent.prototype, "toUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UserChildComponent.prototype, "list", void 0);
    UserChildComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-child',
            template: __webpack_require__(/*! ./user-child.component.html */ "./src/app/user/user-child/user-child.component.html"),
            styles: [__webpack_require__(/*! ./user-child.component.scss */ "./src/app/user/user-child/user-child.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserChildComponent);
    return UserChildComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\r\n  <div class=\"content\">\r\n    <!-- <button (click) = 'tap()'>点击</button> -->\r\n    <!-- <app-cart (toParent)=\"onChild($event)\"></app-cart> -->\r\n    <app-user-child [list]='list' #child (toUser)='formChild($event)'></app-user-child>\r\n    <button (click) = 'child.a()'>操作子组件</button>\r\n  </div>\r\n  <app-footer [page]=\"3\"></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\n  height: 100%;\n  overflow: auto;\n  display: flex;\n  flex-direction: column; }\n  .home .content {\n    flex: 1; }\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../footer/footer.component */ "./src/app/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent() {
        this.list = [1, 2, 3, 4];
    }
    UserComponent.prototype.father = function () {
        // 调用子组件方法
        // this.child.childFn();
        console.log(this);
    };
    UserComponent.prototype.ngOnInit = function () {
        console.log(this);
    };
    UserComponent.prototype.formChild = function (item) {
        console.log(item);
    };
    UserComponent.prototype.onChild = function (i) {
        console.log(i);
    };
    // @Input()
    UserComponent.prototype.bar = function (event) {
        console.log(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"]),
        __metadata("design:type", _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"])
    ], UserComponent.prototype, "child", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]),
        __metadata("design:type", _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"])
    ], UserComponent.prototype, "child1", void 0);
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\Desktop\wuyou\angular\angular-meilishuo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map