namespace BSS.Account.Form {
    export function OnLoad() {
        var createUpdate = new CreateUpdateForm();
        createUpdate.init();
        var accountHeader = new AccountHeaderLogic();
        accountHeader.init();
        var dealerSetting = new DealerSettingLogic();
        dealerSetting.init();
        var qualityAssessment = new QualityAssessmentLogic();
        qualityAssessment.init();
    }

    class CreateUpdateForm {
        public init() {
            this.setCreateTabVisible();
        }

        private setCreateTabVisible() {
            var create = FormHelper.isCreate();

            this.setTabVisible("tab_Create", create);
            this.setTabVisible("General", !create);
            this.setTabVisible("DealerSettings", !create);
        }

        private setTabVisible(tabName, show) {
            var tab = Xrm.Page.ui.tabs.get(tabName);
            if (tab == null) return;
            tab.setVisible(show);
        }
    }

    class AccountHeaderLogic {
        public init() {
            if(!FormHelper.isCreate()) return;
            this.showAccountHeaderFields();
            FormHelper.onChange("bs_accountheaderid", this.showAccountHeaderFields);
        }

        private showAccountHeaderFields() {
            var accountHeader = FormHelper.value("bs_accountheaderid");
            var value = (accountHeader == null);

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

                FormHelper.disabled(controls[i].getName() ,!value);
            }
        }
    }

    class DealerSettingLogic {
        public init() {
            if (FormHelper.isCreate()) return;
            this.SetDealerSettingsReadOnly();
            FormHelper.onChange("bs_enablesettings", this.SetDealerSettingsReadOnly);
            FormHelper.onChange("bs_enablesettings", this.SetIntegration);
            this.SetIntegration();
            FormHelper.onChange("bs_onewayintegration", this.SetIntegration);
        }

        private SetDealerSettingsReadOnly() {
            var enabled = FormHelper.value("bs_enablesettings");
            var value = (enabled === 500000000);
            var fieldList = ["bs_restrictfleets", "bs_replenishment", "bs_fleetstock", "bs_onewayintegration"];

            var l = fieldList.length;
            for (var index = 0; index < l; ++index) {
                FormHelper.disabled(fieldList[index], value);
            }
        }

        private SetIntegration() {
            var onewayintegration = FormHelper.value("bs_onewayintegration");
            var enabled = FormHelper.value("bs_enablesettings");

            var value = (onewayintegration != true)
            if (value == false) {
               value = (enabled === 500000000);
            }
            var fieldList = ["bs_protocol", "bs_url", "bs_username", "bs_port", "bs_path", "bs_password"];

            var l = fieldList.length;
            for (var index = 0; index < l; ++index) {
                FormHelper.disabled(fieldList[index], value);
            }
        }
    }

    class QualityAssessmentLogic {
        public init() {
            if (FormHelper.isCreate()) return;
            this.showQualityAssessment();
            FormHelper.onChange("bs_accountsubtypeid", this.showQualityAssessment);
        }

        private async showQualityAssessment() {
            if(FormHelper.isCreate()) return;
            
            var accountSubTypeReference = FormHelper.value("bs_accountsubtypeid");
            if (accountSubTypeReference == null) return;
            var columnList = ["bs_qualityassessment"];
            var accountSubType = await Data.RetrieveAsync("bs_accountsubtype", accountSubTypeReference[0]['id'], columnList);
            var show = (accountSubType["bs_qualityassessment"] == true);
            var tab = Xrm.Page.ui.tabs.get("QualityAssessment");
            if (tab == null) return;
            tab.setVisible(show);
        }
    }
}
