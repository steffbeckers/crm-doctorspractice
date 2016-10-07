namespace BSS.VehicleLayoutAxles.Form
{
    export function OnLoad()
    {
        (new CopyDefaultPosition()).init();
    }

    class CopyDefaultPosition
    {
        // Copy the field default position when type is selected

        public init()
        {
            if (FormHelper.isReadonly()) return;
            if (!FormHelper.isFieldOnForm("bs_position")) return;
            if (!FormHelper.isFieldOnForm("bs_vehiclelayoutaxletypeid")) return;

            FormHelper.onChange("bs_vehiclelayoutaxletypeid", this.positionOnChangeAsync, this);
        }

        private async positionOnChangeAsync()
        {
            if (FormHelper.hasValue("bs_position")) return;

            var value = FormHelper.value("bs_vehiclelayoutaxletypeid");
            if (value == null) return;

            var type = await Data.RetrieveAsync("bs_vehiclelayoutaxletype", value[0]['id'], ["bs_defaultposition"]);

            if (!type["bs_defaultposition"]) return;

            FormHelper.value("bs_position", type["bs_defaultposition"]);
        }
    }
}
