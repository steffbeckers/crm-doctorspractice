"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BSS;
(function (BSS) {
    var VehicleAxle;
    (function (VehicleAxle) {
        var Form;
        (function (Form) {
            function OnLoad() {
                var showPositionTabs = new ShowPositionTabs();
                showPositionTabs.init();
            }
            Form.OnLoad = OnLoad;

            var ShowPositionTabs = function () {
                function ShowPositionTabs() {
                    _classCallCheck(this, ShowPositionTabs);
                }

                _createClass(ShowPositionTabs, [{
                    key: "init",
                    value: function init() {
                        this.numberOfTyresChange();
                        BSS.FormHelper.onChange("bs_numberoftyres", this.numberOfTyresChange, this);
                    }
                }, {
                    key: "numberOfTyresChange",
                    value: function numberOfTyresChange() {
                        var numberOfTyres = parseInt(Xrm.Page.getAttribute("bs_numberoftyres").getValue());
                        if (numberOfTyres == NaN) return;
                        for (var _i = 1; _i < 9; _i++) {
                            var show = false;
                            if (_i <= numberOfTyres) show = true;
                            var sectionName = "p" + _i;
                            this.setSectionVisible(sectionName, show);
                        }
                    }
                }, {
                    key: "setSectionVisible",
                    value: function setSectionVisible(sectionName, show) {
                        var tab = Xrm.Page.ui.tabs.get("p");
                        if (tab == null) return;
                        var section = tab.sections.get(sectionName);
                        if (section == null) return;
                        section.setVisible(show);
                    }
                }]);

                return ShowPositionTabs;
            }();
        })(Form = VehicleAxle.Form || (VehicleAxle.Form = {}));
    })(VehicleAxle = BSS.VehicleAxle || (BSS.VehicleAxle = {}));
})(BSS || (BSS = {}));
//# sourceMappingURL=Form.js.map
