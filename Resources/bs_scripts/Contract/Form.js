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
    var Contract;
    (function (Contract) {
        var Form;
        (function (Form) {
            function OnLoad() {
                new PayFleetForOwnMaitenance().init();
                new CreateChangeVehicle().init();
            }
            Form.OnLoad = OnLoad;

            var PayFleetForOwnMaitenance = function () {
                function PayFleetForOwnMaitenance() {
                    _classCallCheck(this, PayFleetForOwnMaitenance);
                }

                _createClass(PayFleetForOwnMaitenance, [{
                    key: "init",
                    value: function init() {
                        if (BSS.FormHelper.isReadonly()) return;
                        if (!BSS.FormHelper.isFieldOnForm("bs_payfleetforownmaintenance")) return;
                        if (!BSS.FormHelper.isFieldOnForm("bs_payfleetforownmaintenancetype")) return;
                        BSS.FormHelper.onChange("bs_payfleetforownmaintenance", this.payfleetforownmaintenanceOnChangeAsync, this);
                        this.payfleetforownmaintenanceOnChangeAsync();
                    }
                }, {
                    key: "payfleetforownmaintenanceOnChangeAsync",
                    value: function payfleetforownmaintenanceOnChangeAsync() {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                            var value;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            value = BSS.FormHelper.value("bs_payfleetforownmaintenance");

                                            if (!(value == true)) {
                                                _context.next = 4;
                                                break;
                                            }

                                            BSS.FormHelper.disabled("bs_payfleetforownmaintenancetype", false);
                                            return _context.abrupt("return");

                                        case 4:
                                            BSS.FormHelper.value("bs_payfleetforownmaintenancetype", null, true);
                                            BSS.FormHelper.disabled("bs_payfleetforownmaintenancetype", true);

                                        case 6:
                                        case "end":
                                            return _context.stop();
                                    }
                                }
                            }, _callee, this);
                        }));
                    }
                }]);

                return PayFleetForOwnMaitenance;
            }();

            var CreateChangeVehicle = function () {
                function CreateChangeVehicle() {
                    _classCallCheck(this, CreateChangeVehicle);
                }

                _createClass(CreateChangeVehicle, [{
                    key: "init",
                    value: function init() {
                        if (BSS.FormHelper.isReadonly()) return;
                        if (!BSS.FormHelper.isFieldOnForm("bs_createchangevehicle")) return;
                        if (!BSS.FormHelper.isFieldOnForm("bs_paygautomaticactivation")) return;
                        BSS.FormHelper.onChange("bs_createchangevehicle", this.createchangevehicleOnChangeAsync, this);
                        this.createchangevehicleOnChangeAsync();
                    }
                }, {
                    key: "createchangevehicleOnChangeAsync",
                    value: function createchangevehicleOnChangeAsync() {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                            var value;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                    switch (_context2.prev = _context2.next) {
                                        case 0:
                                            value = BSS.FormHelper.value("bs_createchangevehicle");

                                            if (!(value == true)) {
                                                _context2.next = 4;
                                                break;
                                            }

                                            BSS.FormHelper.disabled("bs_paygautomaticactivation", false);
                                            return _context2.abrupt("return");

                                        case 4:
                                            BSS.FormHelper.value("bs_paygautomaticactivation", null, true);
                                            BSS.FormHelper.disabled("bs_paygautomaticactivation", true);

                                        case 6:
                                        case "end":
                                            return _context2.stop();
                                    }
                                }
                            }, _callee2, this);
                        }));
                    }
                }]);

                return CreateChangeVehicle;
            }();
        })(Form = Contract.Form || (Contract.Form = {}));
    })(Contract = BSS.Contract || (BSS.Contract = {}));
})(BSS || (BSS = {}));
//# sourceMappingURL=Form.js.map
