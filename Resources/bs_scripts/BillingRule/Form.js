"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BSS;
(function (BSS) {
    var BillingRule;
    (function (BillingRule) {
        var Form;
        (function (Form) {
            function OnLoad() {
                var onload = new SetRequiredFieldsLogic();
                onload.init();
            }
            Form.OnLoad = OnLoad;

            var SetRequiredFieldsLogic = function () {
                function SetRequiredFieldsLogic() {
                    _classCallCheck(this, SetRequiredFieldsLogic);
                }

                _createClass(SetRequiredFieldsLogic, [{
                    key: "init",
                    value: function init() {
                        this.setRequiredFields();
                        BSS.FormHelper.onChange("bs_contractid", this.setRequiredFields);
                        BSS.FormHelper.onChange("bs_businessunitid", this.setRequiredFields);
                    }
                }, {
                    key: "setRequiredFields",
                    value: function setRequiredFields() {
                        var contractVisible = true;
                        var businessunitVisible = true;
                        var contract = BSS.FormHelper.value("bs_contractid");
                        var businessunit = BSS.FormHelper.value("bs_businessunitid");
                        if (businessunit != null) {
                            contractVisible = false;
                        }
                        if (contract != null) {
                            businessunitVisible = false;
                        }
                        BSS.FormHelper.visible("bs_contractid", contractVisible);
                        BSS.FormHelper.required("bs_contractid", contractVisible);
                        BSS.FormHelper.required("bs_vehicleconfigurationid", contractVisible);
                        BSS.FormHelper.visible("bs_businessunitid", businessunitVisible);
                        BSS.FormHelper.required("bs_businessunitid", businessunitVisible);
                    }
                }]);

                return SetRequiredFieldsLogic;
            }();
        })(Form = BillingRule.Form || (BillingRule.Form = {}));
    })(BillingRule = BSS.BillingRule || (BSS.BillingRule = {}));
})(BSS || (BSS = {}));
//# sourceMappingURL=Form.js.map
