namespace BSS.VehicleAxle.Form {
    export function OnLoad() {
        var showPositionTabs = new ShowPositionTabs();
        showPositionTabs.init();
    }

    class ShowPositionTabs {
        public init() {
            this.numberOfTyresChange();
            FormHelper.onChange("bs_numberoftyres", this.numberOfTyresChange, this);
        }

        private numberOfTyresChange() {
            var numberOfTyres = parseInt(Xrm.Page.getAttribute("bs_numberoftyres").getValue());
            if (numberOfTyres == NaN) return;

            for (var _i = 1; _i < 9; _i++) {
                var show = false;
                if (_i <= numberOfTyres) show = true;
                var sectionName = "p" + _i;
                this.setSectionVisible(sectionName, show);
            }
        }

        private setSectionVisible(sectionName, show) {
            var tab = Xrm.Page.ui.tabs.get("p");
            if (tab == null) return;
            var section = tab.sections.get(sectionName);
            if (section == null) return;
            section.setVisible(show);
        }
    }
}


