namespace BSS.BillingRule.Form {
    export function OnLoad() {
        var onload = new SetRequiredFieldsLogic();
        onload.init();
    }

    class SetRequiredFieldsLogic {
        public init() {
            this.setRequiredFields();
            FormHelper.onChange("bs_contractid", this.setRequiredFields);
            FormHelper.onChange("bs_businessunitid", this.setRequiredFields);
        }

        private setRequiredFields() {
            var contractVisible = true;
            var businessunitVisible = true;

            var contract = FormHelper.value("bs_contractid");
            var businessunit = FormHelper.value("bs_businessunitid");

            if (businessunit != null)
            { contractVisible = false; } 

            if (contract != null)
            { businessunitVisible = false; } 

            FormHelper.visible("bs_contractid", contractVisible);
            FormHelper.required("bs_contractid", contractVisible);
            FormHelper.required("bs_vehicleconfigurationid", contractVisible);
            FormHelper.visible("bs_businessunitid", businessunitVisible);
            FormHelper.required("bs_businessunitid", businessunitVisible);
        }
    }
}
