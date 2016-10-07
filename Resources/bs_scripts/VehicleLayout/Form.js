"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BSS;
(function (BSS) {
    var VehicleLayout;
    (function (VehicleLayout) {
        var Form;
        (function (Form) {
            function OnLoad() {
                var disableForm = new DisableForm();
                disableForm.init();
            }
            Form.OnLoad = OnLoad;

            var DisableForm = function () {
                function DisableForm() {
                    _classCallCheck(this, DisableForm);
                }

                _createClass(DisableForm, [{
                    key: "init",
                    value: function init() {
                        if (BSS.FormHelper.isReadonly()) return;
                        if (Xrm.Page.getAttribute("statuscode").getValue() != 1) return;
                        Xrm.Page.data.entity.attributes.forEach(function (attribute, index) {
                            var control = Xrm.Page.getControl(attribute.getName());
                            if (control) {
                                control.setDisabled(true);
                            }
                        });
                    }
                }]);

                return DisableForm;
            }();
        })(Form = VehicleLayout.Form || (VehicleLayout.Form = {}));
    })(VehicleLayout = BSS.VehicleLayout || (BSS.VehicleLayout = {}));
})(BSS || (BSS = {}));
//# sourceMappingURL=Form.js.map
