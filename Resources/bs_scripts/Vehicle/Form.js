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
    var Vehicle;
    (function (Vehicle) {
        var Form;
        (function (Form) {
            function OnLoad() {
                new ModelSelection().init();
                new ConfigurationSelection().init();
            }
            Form.OnLoad = OnLoad;

            var ModelSelection = function () {
                function ModelSelection() {
                    _classCallCheck(this, ModelSelection);
                }

                _createClass(ModelSelection, [{
                    key: "init",
                    value: function init() {
                        if (BSS.FormHelper.isReadonly()) return;
                        if (!BSS.FormHelper.isFieldOnForm("bs_brandid")) return;
                        if (!BSS.FormHelper.isFieldOnForm("bs_modelid")) return;
                        BSS.FormHelper.onChange("bs_brandid", this.BrandOnChangeAsync, this);
                        this.BrandOnChangeAsync(true);
                    }
                }, {
                    key: "BrandOnChangeAsync",
                    value: function BrandOnChangeAsync(init) {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                            var value;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            value = BSS.FormHelper.value("bs_brandid");

                                            if (init != true) {
                                                BSS.FormHelper.value("bs_modelid", null, true);
                                            }

                                            if (!(value == null)) {
                                                _context.next = 5;
                                                break;
                                            }

                                            BSS.FormHelper.disabled("bs_modelid", true);
                                            return _context.abrupt("return");

                                        case 5:
                                            BSS.FormHelper.disabled("bs_modelid", false);

                                        case 6:
                                        case "end":
                                            return _context.stop();
                                    }
                                }
                            }, _callee, this);
                        }));
                    }
                }]);

                return ModelSelection;
            }();

            var ConfigurationSelection = function () {
                function ConfigurationSelection() {
                    _classCallCheck(this, ConfigurationSelection);
                }

                _createClass(ConfigurationSelection, [{
                    key: "init",
                    value: function init() {
                        if (!BSS.FormHelper.isCreate()) {
                            BSS.FormHelper.disabled("bs_contractid", true);
                            return;
                        }
                        if (BSS.FormHelper.isReadonly()) return;
                        if (!BSS.FormHelper.isFieldOnForm("bs_contractid")) return;
                        if (!BSS.FormHelper.isFieldOnForm("bs_vehicleconfigurationid")) return;
                        BSS.FormHelper.onChange("bs_contractid", this.ContractOnChangeAsync, this);
                        this.ContractOnChangeAsync(true);
                    }
                }, {
                    key: "ContractOnChangeAsync",
                    value: function ContractOnChangeAsync(init) {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                            var value;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                    switch (_context2.prev = _context2.next) {
                                        case 0:
                                            value = BSS.FormHelper.value("bs_contractid");

                                            if (init != true) {
                                                BSS.FormHelper.value("bs_vehicleconfigurationid", null, true);
                                            }

                                            if (!(value == null)) {
                                                _context2.next = 5;
                                                break;
                                            }

                                            BSS.FormHelper.disabled("bs_vehicleconfigurationid", true);
                                            return _context2.abrupt("return");

                                        case 5:
                                            BSS.FormHelper.disabled("bs_vehicleconfigurationid", false);

                                        case 6:
                                        case "end":
                                            return _context2.stop();
                                    }
                                }
                            }, _callee2, this);
                        }));
                    }
                }]);

                return ConfigurationSelection;
            }();
        })(Form = Vehicle.Form || (Vehicle.Form = {}));
    })(Vehicle = BSS.Vehicle || (BSS.Vehicle = {}));
})(BSS || (BSS = {}));
//# sourceMappingURL=Form.js.map
