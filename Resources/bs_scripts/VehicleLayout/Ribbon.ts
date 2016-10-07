namespace BSS.VehicleLayout.Ribbon {
    export function Activate() {
        if (confirm("Are you sure you want to Activate this Layout?")) {
            Xrm.Page.getAttribute("statuscode").setValue(1);
            Xrm.Page.data.entity.save();
        }
    }

    export function ActivateFromRibbon(selectedItems) {
        var selectedItem = selectedItems[0];
        var id = selectedItem.Id.toString();
        var correctId = id.replace(/[{}]/g, "").toLowerCase();
        var entity = '{"statuscode": 1}';
        var req = "bs_vehiclelayout(" + correctId + ")";

        var result = BSS.Data.UpdateAsync(req, entity);
    }
}
