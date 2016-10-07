namespace BSS.Apps.VehicleLayout
{
    export class AppViewModel
    {
        axles = ko.observableArray();
        private currentRecordId: string = null;

        public async onload()
        {
            var params = Xrm.Page.context.getQueryStringParameters();
            if (!params['id']) return;

            var req = "bs_vehiclelayoutaxles?$orderby=bs_position&$filter=_bs_vehiclelayoutid_value eq " + (<string>params['id']).replace(/[{}]/g, "").toLowerCase();

            var axles = await BSS.Data.RetrieveMultipleAsync(req, [
                "bs_code",
                "bs_numberoftyres"]
            );

            this.AddAxles(axles);
        }

        public async refresh()
        {
            this.axles.removeAll();
            this.onload();
        }

        AddAxles(crmAxles: Array<any>)
        {
            for (let e of crmAxles)
            {
                this.axles.push(e);
            }
        }
    }
}
// Activates knockout.js
$(function ()
{
    var app = new BSS.Apps.VehicleLayout.AppViewModel();
    ko.applyBindings(app);
    app.onload();
});