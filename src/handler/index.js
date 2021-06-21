/**
 * @copyright Md. Sarwar Hoshen
 */

class Owlbot
{
    constructor(p)
    {
        this.api_url = p.api_url ? p.api_url: "https://owlbot.info/api/v4/dictionary";
    }

    /**
     */
    async GetWords(p)
    {
        try
        {

            const requestOptions = {
                method: 'GET',
                headers: {
                    "Authorization": 'Token 18f5e7bb3f21740ab5d39851dfdb36a14b868a4d',
                    "Content-Type" :'application/json'
                }
            };

            const resp = await fetch( [this.api_url, p.text].join('/') , requestOptions)

            console.log("handler/GetWord/resp:", resp)

            let resp_json = resp.ok ? await resp.json() : 'No words found'

            // console.log("handler/GetWord/result:", resp_json)

            return resp_json

        }
        catch (err)
        {
            console.log("handler/GetWord/err:", err)

            return Promise.reject(err)
        }

    } //GetWord

}
export {Owlbot}
