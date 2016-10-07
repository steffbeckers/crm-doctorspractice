"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var BSS;
(function (BSS) {
    var SapPricingPeriod;
    (function (SapPricingPeriod) {
        var Form;
        (function (Form) {
            function OnLoad() {
                new DisableUsed().init();
                new DateComparison().init();
            }
            Form.OnLoad = OnLoad;

            var DateComparison = function () {
                function DateComparison() {
                    _classCallCheck(this, DateComparison);
                }

                _createClass(DateComparison, [{
                    key: "init",
                    value: function init() {
                        if (BSS.FormHelper.isReadonly()) return;
                        if (!BSS.FormHelper.isFieldOnForm("bs_from")) return;
                        if (!BSS.FormHelper.isFieldOnForm("bs_to")) return;
                        BSS.FormHelper.onChange("bs_from", this.DateComparisonAsync, this);
                        BSS.FormHelper.onChange("bs_to", this.DateComparisonAsync, this);
                    }
                }, {
                    key: "DateComparisonAsync",
                    value: function DateComparisonAsync(init) {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                            var from, to;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            from = BSS.FormHelper.value("bs_from");
                                            to = BSS.FormHelper.value("bs_to");

                                            if (!(from == null || to == null)) {
                                                _context.next = 4;
                                                break;
                                            }

                                            return _context.abrupt("return");

                                        case 4:
                                            if (!(from < to)) {
                                                _context.next = 6;
                                                break;
                                            }

                                            return _context.abrupt("return");

                                        case 6:
                                            alert("BSS.CRM.SAPPricingPeriod.ToNotBeforeFrom");
                                            BSS.FormHelper.value("bs_to", null, true);

                                        case 8:
                                        case "end":
                                            return _context.stop();
                                    }
                                }
                            }, _callee, this);
                        }));
                    }
                }]);

                return DateComparison;
            }();

            var DisableUsed = function () {
                function DisableUsed() {
                    _classCallCheck(this, DisableUsed);
                }

                _createClass(DisableUsed, [{
                    key: "init",
                    value: function init() {
                        var used = BSS.FormHelper.value("bs_used");
                        if (used == true) BSS.FormHelper.disableForm(used);
                    }
                }]);

                return DisableUsed;
            }();
        })(Form = SapPricingPeriod.Form || (SapPricingPeriod.Form = {}));
    })(SapPricingPeriod = BSS.SapPricingPeriod || (BSS.SapPricingPeriod = {}));
})(BSS || (BSS = {}));
//# sourceMappingURL=Form.js.map
