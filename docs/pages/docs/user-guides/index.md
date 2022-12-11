# Guides

## Email Header

## Email body
Structure of emial body with all the possible fields

```json
{
    "to": "support@airmailer.app",
    "from": "no-reply@airmailer.app", //Only on paid plans
    "subject":"Feedback from the Docs",
    "massage": "<p>Hey... Using your docs is so simple</p>", //Can be html or string
    "replyTo": "name@visitor.com",//Only on paid plans
    "templateId": "uyyguyuYUyyu46guj",//Only if you want to use a template
    "params": {
        //Pass variable parameters only when using a template
    },
    "attachments": ["../assets/bill.pdf", "../assets/logo.png"]
}
```

#### Fileds

|Field Name |Distription        | Type          | Required  | Default   |
|-----------|------------       |-------------- |-----------|-----------|
|`to`       |Reciever's email(s)|`string`       |`true`     |`null    ` |
|`from`     |Sender's email     |`string`       |`false`    |`no-reply@airmailer.app    ` |
|`subject`  |Email subject      |`string`       |`false`    |`no-reply` |
|`massage`  |Email massage for the reciever|`string` or `html`       |`true`     |`null    ` |
|`replyTo`  |Reciever's replies will be sent to this email|`string`       |`true` if *Paid Plan*    |`null    ` |
|`templateId`|ID of the template you want to use for this email|`string`       |`true` if you want to use a template    |`null    ` |
|`params`       |Values to substitude the variables that were set during template creation|`object`       |`true` if using a template that accepts parameters    |`null    ` |
|`attachments`       |Files you want to send with the email|`array`       |`false`     |`null    ` |

## Responses

| code  | Description | Possible solutions |
|------ |-------------|--------------------|
|200    |indicates that the request has succeeded                                                                                   | Not required|
|400    |The server cannot or will not process the request due to something that is perceived to be a client error (for example, malformed request syntax, invalid request message framing, or deceptive request routing).|Make sure all the required fields are filled with correct data and you are sending the correct request method `GET` or `POST`|
|401    |The client request has not been completed because it lacks valid authentication credentials for the requested resource.    |Make sure the `app_Id `and `API_key` are filled and correct|
|404    |Indicates that the server cannot find the requested resource.                                                              | Make sure you are sending a request to a valid `url`
|500    |The server encountered an unexpected condition that prevented it from fulfilling the request.                              |Rety sending the email                                      |

If an error code persists and you can not solve it please reach out [here](https://discord.gg/FYCFCT6Y)