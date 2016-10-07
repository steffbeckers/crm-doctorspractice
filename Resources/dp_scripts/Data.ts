namespace DP.Data
{
    /**
     * Retrieve a record from the web api
     * @param entityName The name of the entity without the trailing 's'
     * @param id Guid of the record
     * @param cols columns to retrieve
     * @param keyAttribute keyAttribute defaults to entity + 'id', use this to override key attribute (ex activity)
     */
    export async function RetrieveAsync(entityName: string, id: string, cols?: Array<string>, keyAttribute?: string)
    {
        if (!keyAttribute)
        {
            keyAttribute = entityName + "id";
        }

        entityName = entityName + "s";

        id = id.replace(/[{}]/g, "").toLowerCase();

        var records = await Data.RetrieveMultipleAsync(entityName + "?$filter=" + keyAttribute + " eq " + id, cols);
        if (records.length == 0)
        {
            throw new Error("RetrieveAsync error: Entity not found.");
        }
        if (records.length > 1)
        {
            throw new Error("RetrieveAsync error: Found more then 1");
        }

        return records[0];
    }

    export function RetrieveMultipleAsync(urlEnding: string, cols?: Array<string>)
    {
        return new Promise((resolve: (records: Array<any>) => any, reject: (statusText: string) => any) =>
        {
            if (cols)
            {
                if (urlEnding.indexOf('?') == -1)
                {
                    urlEnding += "?";
                }
                else
                {
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

            req.onreadystatechange = function ()
            {
                if (this.readyState === 4)
                {
                    req.onreadystatechange = null;
                    if (this.status === 200)
                    {
                        var results = JSON.parse(this.response).value;
                        resolve(results);
                    }
                    else
                    {
                        reject(this.statusText);
                    }
                }
            };

            req.send();
        });
    }

    export function UpdateAsync(urlEnding: string, entity: {}) {
        return new Promise((resolve: (succes: Boolean) => any, reject: (statusText: string) => any) => {
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
                    }
                    else {
                        reject(this.statusText);
                    }
                }
            };
            req.send(JSON.stringify(entity));
        });
    }
}