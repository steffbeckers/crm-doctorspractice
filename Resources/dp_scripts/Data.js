"use strict";

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var DP;
(function (DP) {
    var Data;
    (function (Data) {
        /**
         * Retrieve a record from the web api
         * @param entityName The name of the entity without the trailing 's'
         * @param id Guid of the record
         * @param cols columns to retrieve
         * @param keyAttribute keyAttribute defaults to entity + 'id', use this to override key attribute (ex activity)
         */
        function RetrieveAsync(entityName, id, cols, keyAttribute) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var records;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!keyAttribute) {
                                    keyAttribute = entityName + "id";
                                }
                                entityName = entityName + "s";
                                id = id.replace(/[{}]/g, "").toLowerCase();
                                _context.next = 5;
                                return Data.RetrieveMultipleAsync(entityName + "?$filter=" + keyAttribute + " eq " + id, cols);

                            case 5:
                                records = _context.sent;

                                if (!(records.length == 0)) {
                                    _context.next = 8;
                                    break;
                                }

                                throw new Error("RetrieveAsync error: Entity not found.");

                            case 8:
                                if (!(records.length > 1)) {
                                    _context.next = 10;
                                    break;
                                }

                                throw new Error("RetrieveAsync error: Found more then 1");

                            case 10:
                                return _context.abrupt("return", records[0]);

                            case 11:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        Data.RetrieveAsync = RetrieveAsync;
        function RetrieveMultipleAsync(urlEnding, cols) {
            return new Promise(function (resolve, reject) {
                if (cols) {
                    if (urlEnding.indexOf('?') == -1) {
                        urlEnding += "?";
                    } else {
                        urlEnding += "&";
                    }
                    urlEnding += "$select=" + cols.join(',');
                }
                var req = new XMLHttpRequest();
                req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/" + urlEnding, true);
                req.setRequestHeader("OData-MaxVersion", "4.0");
                req.setRequestHeader("OData-Version", "4.0");
                req.setRequestHeader("Accept", "application/json");
                req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
                req.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        req.onreadystatechange = null;
                        if (this.status === 200) {
                            var results = JSON.parse(this.response).value;
                            resolve(results);
                        } else {
                            reject(this.statusText);
                        }
                    }
                };
                req.send();
            });
        }
        Data.RetrieveMultipleAsync = RetrieveMultipleAsync;
        function UpdateAsync(urlEnding, entity) {
            return new Promise(function (resolve, reject) {
                var req = new XMLHttpRequest();
                req.open("PATCH", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/" + urlEnding, true);
                req.setRequestHeader("OData-MaxVersion", "4.0");
                req.setRequestHeader("OData-Version", "4.0");
                req.setRequestHeader("Accept", "application/json");
                req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                req.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        req.onreadystatechange = null;
                        if (this.status === 204) {
                            //Success - No Return Data - Do Something
                            resolve(true);
                        } else {
                            reject(this.statusText);
                        }
                    }
                };
                req.send(JSON.stringify(entity));
            });
        }
        Data.UpdateAsync = UpdateAsync;
    })(Data = DP.Data || (DP.Data = {}));
})(DP || (DP = {}));
//# sourceMappingURL=Data.js.map
