namespace DP.Appointment.Form {
    export function OnLoad() {
        alert("OnLoad()");
        var subjectSetting = new SubjectSettingLogic();
    }

    class SubjectSettingLogic {

        constructor() {
            alert("SubjectSettingLogic()");
            FormHelper.onChange("regardingobjectid", this.SetSubjectSettings);
        }

        private SetSubjectSettings() {
            alert("SetSubjectSettings()");
        }
    }
}
