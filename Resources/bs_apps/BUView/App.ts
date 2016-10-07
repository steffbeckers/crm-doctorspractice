namespace BSS.Apps.BUView
{
    class node
    {
        public id: string;
        public name: string;
        public isCurrentRecord: boolean;

        public subNodes = ko.observableArray<node>();

        constructor(id: string, name: string)
        {
            this.id = id;
            this.name = name;
            this.isCurrentRecord = false;
        }
    }

    export class AppViewModel
    {
        public nodes = ko.observableArray<node>();
        private currentRecordId: string = null;

        public async onload()
        {
            var params = Xrm.Page.context.getQueryStringParameters();
            if (params['id']) this.currentRecordId = <string>params['id'];

            var req = "businessunits?$select=name,_parentbusinessunitid_value";
            var units = await BSS.Data.RetrieveMultipleAsync(req);
            this.AddSubs(units, null);
        }

        AddSubs(units: Array<any>, parent: node)
        {
            for (let e of units)
            {

                if (!parent && e._parentbusinessunitid_value) continue;
                if (parent && !GlobalHelper.AreGuidEqual(parent.id, e._parentbusinessunitid_value)) continue;

                var collection = (parent ? parent.subNodes : this.nodes);

                var n = new node(e.businessunitid, e.name);
                n.isCurrentRecord = GlobalHelper.AreGuidEqual(e.businessunitid, this.currentRecordId);
                collection.push(n);

                this.AddSubs(units, n);
            }
        }
    }
}
// Activates knockout.js
$(function ()
{
    var app = new BSS.Apps.BUView.AppViewModel();
    ko.applyBindings(app);
    app.onload();
});
