"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DP;
(function (DP) {
    var Appointment;
    (function (Appointment) {
        var Form;
        (function (Form) {
            function OnLoad() {
                alert("OnLoad()");
                var subjectSetting = new SubjectSettingLogic();
            }
            Form.OnLoad = OnLoad;

            var SubjectSettingLogic = function () {
                function SubjectSettingLogic() {
                    _classCallCheck(this, SubjectSettingLogic);

                    alert("SubjectSettingLogic()");
                    DP.FormHelper.onChange("regardingobjectid", this.SetSubjectSettings);
                }

                _createClass(SubjectSettingLogic, [{
                    key: "SetSubjectSettings",
                    value: function SetSubjectSettings() {
                        alert("SetSubjectSettings()");
                    }
                }]);

                return SubjectSettingLogic;
            }();
        })(Form = Appointment.Form || (Appointment.Form = {}));
    })(Appointment = DP.Appointment || (DP.Appointment = {}));
})(DP || (DP = {}));
//# sourceMappingURL=Form.js.map
