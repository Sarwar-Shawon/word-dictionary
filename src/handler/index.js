/**
 * @copyright Md. Sarwar Hoshen
 */

export default class Auth
{
    constructor(p)
    {
        this.api_url = p.api_url ? p.api_url: "";
    }

    /**
     */
    async GetWords(p)
    {
        try
        {

            const requestOptions = {
                method: 'POST',
                headers: {
                    "Authorization": '18f5e7bb3f21740ab5d39851dfdb36a14b868a4d',
                    "Content-Type" :'application/json'
                },
                body: {},
            };

            const response = await fetch(this.api_url , requestOptions)

            let json = await response.json()

            console.log("handler/GetWord/result:", json)

            return {resp:{...json},msg:"ok"}

        }
        catch (err)
        {
            return Promise.reject(err)
        }

    } //GetWord

}
