"use strict";

var BSS;
(function (BSS) {
    var GlobalHelper;
    (function (GlobalHelper) {
        function AreGuidEqual(guidA, guidB) {
            if (guidA && guidB) {
                return guidA.replace(/[{}]/g, "").toLowerCase() === guidB.replace(/[{}]/g, "").toLowerCase();
            }
            return false;
        }
        GlobalHelper.AreGuidEqual = AreGuidEqual;
    })(GlobalHelper = BSS.GlobalHelper || (BSS.GlobalHelper = {}));
})(BSS || (BSS = {}));
var BSS;
(function (BSS) {
    var FormHelper;
    (function (FormHelper) {
        function value(field, val, forceSubmit, triggerOnchange) {
            ///<summary>Gets or sets the value of a field.</summary>
            ///<param name="field" type="String">Field name</param>
            ///<param name="val" type="Object">Sets the data value for an attribute.</param>
            ///<param name="forceSubmit" type="Boolean">Sets whether data from the attribute will be submitted when the record is saved.</param>
            ///<param name="triggerOnchange" type="Boolean">Causes the OnChange event to occur on the attribute so that any script associated to that event can execute. </param>
            ///<returns type="Object"></returns>
            if (!isFieldOnForm(field, "Field '" + field + "' is not on the form.")) return;
            if (typeof val == "undefined") return Xrm.Page.getAttribute(field).getValue();
            var attribute = Xrm.Page.getAttribute(field);
            attribute.setValue(val);
            if (forceSubmit) {
                attribute.setSubmitMode("always");
            }
            if (triggerOnchange) {
                attribute.fireOnChange();
            }
            return val;
        }
        FormHelper.value = value;
        ;
        function hasValue(field) {
            return value(field) != null;
        }
        FormHelper.hasValue = hasValue;
        ;
        function valueOrDefault(field, defaultValue) {
            if (hasValue(field)) return value(field);
            return defaultValue;
        }
        FormHelper.valueOrDefault = valueOrDefault;
        ;
        function isFieldOnForm(field, msg) {
            ///<summary>Checks if a field is on the form.</summary>
            ///<param name="field" type="String">Field name</param>
            ///<param name="msg" type="String">Set a notification for the user when the field is not on the form.</param>
            ///<returns type="Boolean"></returns>
            if (typeof field !== "string") {
                var hasFieldsMissing = false;
                for (var i = 0; i < field.length; i++) {
                    if (!isFieldOnForm(field[i])) hasFieldsMissing = true;
                }
                if (hasFieldsMissing && msg) {
                    showMessage(msg);
                }
                return !hasFieldsMissing;
            }
            var onForm = Xrm.Page.getAttribute(field) != null;
            if (!onForm && msg) {
                showMessage(msg);
            }
            return onForm;
        }
        FormHelper.isFieldOnForm = isFieldOnForm;
        ;
        function isCreate() {
            ///<summary>Is the current form a Create form.</summary>
            ///<returns type="Bool"></returns>
            return Xrm.Page.ui.getFormType() == 1;
        }
        FormHelper.isCreate = isCreate;
        ;
        function isEditable() {
            ///<summary>Is the current form a Create or Update form.</summary>
            ///<returns type="Bool"></returns>
            return Xrm.Page.ui.getFormType() == 1 || Xrm.Page.ui.getFormType() == 2;
        }
        FormHelper.isEditable = isEditable;
        ;
        function isReadonly() {
            ///<summary>Is the current form a Read Only, Disabled or Read Optimized form.</summary>
            ///<returns type="Bool"></returns>
            return Xrm.Page.ui.getFormType() == 3 || Xrm.Page.ui.getFormType() == 4 || Xrm.Page.ui.getFormType() == 11;
        }
        FormHelper.isReadonly = isReadonly;
        ;
        function onChange(field, func, scope) {
            ///<summary>Sets or triggers the function to be called when the attribute value is changed.</summary>
            ///<param name="field" type="String">Field name</param>
            ///<param name="func" type="Delegate"></param>
            if (!isFieldOnForm(field)) {
                showMessage(field + ' field is not on the form.');
                return;
            }
            if (func) {
                if (scope) {
                    var wrapper = function (func, scope) {
                        var onChange = function onChange(e) {
                            func.call(scope, e);
                        };
                        return {
                            onChange: onChange
                        };
                    }(func, scope);
                    Xrm.Page.getAttribute(field).addOnChange(wrapper.onChange);
                } else {
                    Xrm.Page.getAttribute(field).addOnChange(func);
                }
                return;
            }
            Xrm.Page.getAttribute(field).fireOnChange();
        }
        FormHelper.onChange = onChange;
        ;
        function onSave(func) {
            ///<summary>Sets or triggers the function to be called when the form is saved.</summary>
            ///<param name="func" type="Delegate"></param>
            if (!func) {
                Xrm.Page.data.entity.save();
                return;
            }
            var wrapper = function (f) {
                var saveFunction = f;
                var saveWrapper = function saveWrapper(e) {
                    if (e.getEventArgs().isDefaultPrevented()) return;
                    saveFunction(e);
                };
                return {
                    save: saveWrapper
                };
            }(func);
            Xrm.Page.data.entity.addOnSave(wrapper.save);
        }
        FormHelper.onSave = onSave;
        ;
        function visible(field, val) {
            /// <summary>Hide or show a field on the form (Todo: section and tabs not yet possible)</summary>
            /// <param name="field" type="Object"></param>
            /// <param name="val" type="Object"></param>
            if (isFieldOnForm(field)) {
                if (val != null) {
                    var ctrl = Xrm.Page.getControl(field);
                    ctrl.setVisible(val);
                    return val;
                } else {
                    return Xrm.Page.getControl(field).getVisible();
                }
            }
            for (var i = 0; i < Xrm.Page.ui.tabs.getLength(); i++) {
                var t = Xrm.Page.ui.tabs.get(i);
                if (t.getName() == field) {
                    if (val != null) {
                        t.setVisible(val);
                        return val;
                    } else {
                        return t.getVisible();
                    }
                }
                for (var ii = 0; ii < t.sections.getLength(); ii++) {
                    var s = t.sections.get(ii);
                    if (s.getName() == field) {
                        if (val != null) {
                            s.setVisible(val);
                            return val;
                        } else {
                            return s.getVisible();
                        }
                    }
                }
            }
            showMessage("Field, section or tab not fond on form (" + field + ")");
        }
        FormHelper.visible = visible;
        function disabled(field, val) {
            if (!isFieldOnForm(field, "Field '" + field + "' is not on the form.")) return;
            if (val != null) {
                var ctrl = Xrm.Page.getControl(field);
                ctrl.setDisabled(val);
            } else {
                return Xrm.Page.getControl(field).getDisabled();
            }
        }
        FormHelper.disabled = disabled;
        function required(field, val) {
            /// <summary>Set required level for a field</summary>
            /// <param name="field" type="String"></param>
            /// <param name="val" type="Object"></param>
            if (!isFieldOnForm(field, "Field '" + field + "' is not on the form.")) return;
            if (val != null) {
                var ctrl = Xrm.Page.getAttribute(field);
                ctrl.setRequiredLevel(val ? "required" : "none");
            } else {
                return Xrm.Page.getAttribute(field).getRequiredLevel() == "required";
            }
        }
        FormHelper.required = required;
        function showMessage(msg) {
            // todo don't use alert
            alert(msg);
        }
        FormHelper.showMessage = showMessage;
        function disableForm(onOff) {
            Xrm.Page.ui.controls.forEach(function (control, index) {
                var controlType = control.getControlType();
                var doesControlHaveAttribute = controlType != "iframe" && controlType != "webresource" && controlType != "subgrid";
                if (doesControlHaveAttribute) {
                    control.setDisabled(onOff);
                }
            });
        }
        FormHelper.disableForm = disableForm;
    })(FormHelper = BSS.FormHelper || (BSS.FormHelper = {}));
})(BSS || (BSS = {}));
//# sourceMappingURL=Helpers.js.map
