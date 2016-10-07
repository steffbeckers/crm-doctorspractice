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
    var Account;
    (function (Account) {
        var Form;
        (function (Form) {
            function OnLoad() {
                var createUpdate = new CreateUpdateForm();
                createUpdate.init();
                var accountHeader = new AccountHeaderLogic();
                accountHeader.init();
                var dealerSetting = new DealerSettingLogic();
                dealerSetting.init();
                var qualityAssessment = new QualityAssessmentLogic();
                qualityAssessment.init();
            }
            Form.OnLoad = OnLoad;

            var CreateUpdateForm = function () {
                function CreateUpdateForm() {
                    _classCallCheck(this, CreateUpdateForm);
                }

                _createClass(CreateUpdateForm, [{
                    key: "init",
                    value: function init() {
                        this.setCreateTabVisible();
                    }
                }, {
                    key: "setCreateTabVisible",
                    value: function setCreateTabVisible() {
                        var create = BSS.FormHelper.isCreate();
                        this.setTabVisible("tab_Create", create);
                        this.setTabVisible("General", !create);
                        this.setTabVisible("DealerSettings", !create);
                    }
                }, {
                    key: "setTabVisible",
                    value: function setTabVisible(tabName, show) {
                        var tab = Xrm.Page.ui.tabs.get(tabName);
                        if (tab == null) return;
                        tab.setVisible(show);
                    }
                }]);

                return CreateUpdateForm;
            }();

            var AccountHeaderLogic = function () {
                function AccountHeaderLogic() {
                    _classCallCheck(this, AccountHeaderLogic);
                }

                _createClass(AccountHeaderLogic, [{
                    key: "init",
                    value: function init() {
                        if (!BSS.FormHelper.isCreate()) return;
                        this.showAccountHeaderFields();
                        BSS.FormHelper.onChange("bs_accountheaderid", this.showAccountHeaderFields);
                    }
                }, {
                    key: "showAccountHeaderFields",
                    value: function showAccountHeaderFields() {
                        var accountHeader = BSS.FormHelper.value("bs_accountheaderid");
                        var value = accountHeader == null;
                        var tab = Xrm.Page.ui.tabs.get("tab_Create");
                        if (tab == null) return;
                        var section = tab.sections.get("CreateHeader");
                        if (section == null) return;
                        var controls = section.controls.get();
                        var controlsLenght = controls.length;
                        for (var i = 0; i < controlsLenght; i++) {
                            if (!value) {
                                controls[i].getAttribute().setValue(null);
                            }
                            BSS.FormHelper.disabled(controls[i].getName(), !value);
                        }
                    }
                }]);

                return AccountHeaderLogic;
            }();

            var DealerSettingLogic = function () {
                function DealerSettingLogic() {
                    _classCallCheck(this, DealerSettingLogic);
                }

                _createClass(DealerSettingLogic, [{
                    key: "init",
                    value: function init() {
                        if (BSS.FormHelper.isCreate()) return;
                        this.SetDealerSettingsReadOnly();
                        BSS.FormHelper.onChange("bs_enablesettings", this.SetDealerSettingsReadOnly);
                        BSS.FormHelper.onChange("bs_enablesettings", this.SetIntegration);
                        this.SetIntegration();
                        BSS.FormHelper.onChange("bs_onewayintegration", this.SetIntegration);
                    }
                }, {
                    key: "SetDealerSettingsReadOnly",
                    value: function SetDealerSettingsReadOnly() {
                        var enabled = BSS.FormHelper.value("bs_enablesettings");
                        var value = enabled === 500000000;
                        var fieldList = ["bs_restrictfleets", "bs_replenishment", "bs_fleetstock", "bs_onewayintegration"];
                        var l = fieldList.length;
                        for (var index = 0; index < l; ++index) {
                            BSS.FormHelper.disabled(fieldList[index], value);
                        }
                    }
                }, {
                    key: "SetIntegration",
                    value: function SetIntegration() {
                        var onewayintegration = BSS.FormHelper.value("bs_onewayintegration");
                        var enabled = BSS.FormHelper.value("bs_enablesettings");
                        var value = onewayintegration != true;
                        if (value == false) {
                            value = enabled === 500000000;
                        }
                        var fieldList = ["bs_protocol", "bs_url", "bs_username", "bs_port", "bs_path", "bs_password"];
                        var l = fieldList.length;
                        for (var index = 0; index < l; ++index) {
                            BSS.FormHelper.disabled(fieldList[index], value);
                        }
                    }
                }]);

                return DealerSettingLogic;
            }();

            var QualityAssessmentLogic = function () {
                function QualityAssessmentLogic() {
                    _classCallCheck(this, QualityAssessmentLogic);
                }

                _createClass(QualityAssessmentLogic, [{
                    key: "init",
                    value: function init() {
                        if (BSS.FormHelper.isCreate()) return;
                        this.showQualityAssessment();
                        BSS.FormHelper.onChange("bs_accountsubtypeid", this.showQualityAssessment);
                    }
                }, {
                    key: "showQualityAssessment",
                    value: function showQualityAssessment() {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                            var accountSubTypeReference, columnList, accountSubType, show, tab;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            if (!BSS.FormHelper.isCreate()) {
                                                _context.next = 2;
                                                break;
                                            }

                                            return _context.abrupt("return");

                                        case 2:
                                            accountSubTypeReference = BSS.FormHelper.value("bs_accountsubtypeid");

                                            if (!(accountSubTypeReference == null)) {
                                                _context.next = 5;
                                                break;
                                            }

                                            return _context.abrupt("return");

                                        case 5:
                                            columnList = ["bs_qualityassessment"];
                                            _context.next = 8;
                                            return BSS.Data.RetrieveAsync("bs_accountsubtype", accountSubTypeReference[0]['id'], columnList);

                                        case 8:
                                            accountSubType = _context.sent;
                                            show = accountSubType["bs_qualityassessment"] == true;
                                            tab = Xrm.Page.ui.tabs.get("QualityAssessment");

                                            if (!(tab == null)) {
                                                _context.next = 13;
                                                break;
                                            }

                                            return _context.abrupt("return");

                                        case 13:
                                            tab.setVisible(show);

                                        case 14:
                                        case "end":
                                            return _context.stop();
                                    }
                                }
                            }, _callee, this);
                        }));
                    }
                }]);

                return QualityAssessmentLogic;
            }();
        })(Form = Account.Form || (Account.Form = {}));
    })(Account = BSS.Account || (BSS.Account = {}));
})(BSS || (BSS = {}));
//# sourceMappingURL=Form.js.map
