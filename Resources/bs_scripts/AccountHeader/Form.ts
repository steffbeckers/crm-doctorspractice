namespace BSS.AccountHeader.Form
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

            var sapNumber = Xrm.Page.getAttribute("bs_sapnumber").getValue();
            if (sapNumber != null) return;

            Xrm.Page.data.entity.attributes.forEach(function (attribute, index)
            {
                var control = Xrm.Page.getControl(attribute.getName());
                if (control && control.getName() != "bs_sapnumber")
                {
                    control.setDisabled(false);
                }
            })
        }
    }
}
