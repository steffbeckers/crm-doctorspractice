namespace BSS.Vehicle.Form {
    export function OnLoad() {
        (new ModelSelection()).init();
        (new ConfigurationSelection()).init();
    }

    class ModelSelection {
        public init() {
            if (FormHelper.isReadonly()) return;
            if (!FormHelper.isFieldOnForm("bs_brandid")) return;
            if (!FormHelper.isFieldOnForm("bs_modelid")) return;           
            FormHelper.onChange("bs_brandid", this.BrandOnChangeAsync, this);
            this.BrandOnChangeAsync(true);
        }

        private async BrandOnChangeAsync(init) {
            var value = FormHelper.value("bs_brandid");

            if (init != true) {
                FormHelper.value("bs_modelid", null, true);
            }
            if (value == null) {
                FormHelper.disabled("bs_modelid", true);
                return;
            }

            FormHelper.disabled("bs_modelid", false);
        }
    }

    class ConfigurationSelection {
        public init() {
            if (!FormHelper.isCreate()) {
                FormHelper.disabled("bs_contractid", true);
                return;
            }
            if (FormHelper.isReadonly()) return;
            if (!FormHelper.isFieldOnForm("bs_contractid")) return;
            if (!FormHelper.isFieldOnForm("bs_vehicleconfigurationid")) return;
            FormHelper.onChange("bs_contractid", this.ContractOnChangeAsync, this);
            this.ContractOnChangeAsync(true);
        }

        private async ContractOnChangeAsync(init) {
            var value = FormHelper.value("bs_contractid");

            if (init != true) {
                FormHelper.value("bs_vehicleconfigurationid", null, true);
            }
            if (value == null) {
                FormHelper.disabled("bs_vehicleconfigurationid", true);
                return;
            }

            FormHelper.disabled("bs_vehicleconfigurationid", false);
        }
    }
}
