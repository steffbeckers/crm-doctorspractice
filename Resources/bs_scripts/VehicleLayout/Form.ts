namespace BSS.VehicleLayout.Form
{
    export function OnLoad()
    {
        var disableForm = new DisableForm();
        disableForm.init();
    }

    class DisableForm
    {
        public init()
        {
            if (FormHelper.isReadonly()) return;

            if (Xrm.Page.getAttribute("statuscode").getValue() != 1) return;

            Xrm.Page.data.entity.attributes.forEach(function (attribute, index)
            {
                var control = Xrm.Page.getControl(attribute.getName());
                if (control)
                {
                    control.setDisabled(true);
                }
            })
        }
    }
}
