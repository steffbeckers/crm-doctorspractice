namespace BSS.SapPricingPeriod.Form {
    export function OnLoad() {
        (new DisableUsed()).init();
        (new DateComparison()).init();
    }

    class DateComparison {
        public init() {
            if (FormHelper.isReadonly()) return;
            if (!FormHelper.isFieldOnForm("bs_from")) return;
            if (!FormHelper.isFieldOnForm("bs_to")) return;
            FormHelper.onChange("bs_from", this.DateComparisonAsync, this);
            FormHelper.onChange("bs_to", this.DateComparisonAsync, this);
        }

        private async DateComparisonAsync(init) {
            var from = FormHelper.value("bs_from");
            var to = FormHelper.value("bs_to");

            if (from == null || to == null) return;
            if (from < to) return;

            alert("BSS.CRM.SAPPricingPeriod.ToNotBeforeFrom")
            FormHelper.value("bs_to", null, true);
        }
    }

    class DisableUsed {
        public init() {
            var used = FormHelper.value("bs_used");
            if (used == true) FormHelper.disableForm(used);
        }
    }
}
