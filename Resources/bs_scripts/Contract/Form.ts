namespace BSS.Contract.Form {
    export function OnLoad() {
        (new PayFleetForOwnMaitenance()).init();
        (new CreateChangeVehicle()).init();
    }

    class PayFleetForOwnMaitenance {
        public init() {
            if (FormHelper.isReadonly()) return;
            if (!FormHelper.isFieldOnForm("bs_payfleetforownmaintenance")) return;
            if (!FormHelper.isFieldOnForm("bs_payfleetforownmaintenancetype")) return;           
            FormHelper.onChange("bs_payfleetforownmaintenance", this.payfleetforownmaintenanceOnChangeAsync, this);
            this.payfleetforownmaintenanceOnChangeAsync();
        }

        private async payfleetforownmaintenanceOnChangeAsync() {
            var value = FormHelper.value("bs_payfleetforownmaintenance");
            if (value == true) {
                FormHelper.disabled("bs_payfleetforownmaintenancetype", false);
                return;
            }
            FormHelper.value("bs_payfleetforownmaintenancetype", null, true);
            FormHelper.disabled("bs_payfleetforownmaintenancetype", true);
        }
    }

    class CreateChangeVehicle {
        public init() {
            if (FormHelper.isReadonly()) return;
            if (!FormHelper.isFieldOnForm("bs_createchangevehicle")) return;
            if (!FormHelper.isFieldOnForm("bs_paygautomaticactivation")) return;         
            FormHelper.onChange("bs_createchangevehicle", this.createchangevehicleOnChangeAsync, this);
            this.createchangevehicleOnChangeAsync();
        }

        private async createchangevehicleOnChangeAsync() {
            var value = FormHelper.value("bs_createchangevehicle");
            if (value == true) {
                FormHelper.disabled("bs_paygautomaticactivation", false);
                return;
            }
            FormHelper.value("bs_paygautomaticactivation", null, true);
            FormHelper.disabled("bs_paygautomaticactivation", true);
        }
    }
}
