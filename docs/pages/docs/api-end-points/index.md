# API End points

Send an email from your code without installing any packages.

## End-points

Send email:
```
POST https://api.airmailer.app/api/v1/email/send
```
Check email result:
```
GET https://api.airmailer.app/api/v1/email/{app_id}
//This will return the last sent email
```

## Sending a simple email

```js
async ()=>{
    await fetch(
        "https://api.airmailer.app/api/v1/email/send",
        {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: 
                {
                    "to": "axolemaranjana4@gmail.com",
                    "subject":"Test from PostMan",
                    "text": "<h1>This is to ensure that the email"
                            "is sending from post man.</h1>",
                }
        }
    )
    .then(response => response.json()) //Convert response data to json.
    .then(json =>{ 
        console.log(json)
        //Do something on success
    }); 
    .catch(err => {
        console.log(err)
        //Do something on Failure 
    });
}
```

## Sending a custom email

## Responses
Example of responses you may expect. (Not limited to these only check all responses <a href="/pages/docs/user-guides/#responses">here</a>.)

### Success
```
200 OK 
    {
        massage: "Email sent successfully"
        data: {
                email_id: "hkhbhbrej4gegm"
                //  available only when email logging is turned on.
            }
    }
```
### Failure 
```
400 Bad Request 
    {
        massage: "Failed to send email",
        data: {
            //May or may not respond with reason of failure
        }
    }
```