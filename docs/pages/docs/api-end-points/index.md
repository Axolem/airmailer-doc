---
layout: doc
---

# API End points

Send an email from your code without installing any packages.

## End-points

Send email:

Method: POST

```link
https://airmailer.cyclic.app/v2/email/send
```

## Sending a simple email

```js
async () => {
  await fetch("https://airmailer.cyclic.app/v2/email/send", {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      authorization: "APPID APIKey",
    },
    body: {
      to: "axolemaranjana4@gmail.com",
      subject: "Test from PostMan",
      massage:
        "<h1>This is to ensure that the email" +
        "is sending from post man.</h1>",
    },
  })
    .then((response) => response.json()) //Convert response data to json.
    .then((json) => {
      console.log(json);
      //Do something on success
    })
    .catch((err) => {
      console.log(err);
      //Do something on Failure
    });
};
```

## Sending a custom email

Coming soon...

## Responses

Example of responses you may expect. (Not limited to these only check all responses <a href="/pages/docs/user-guides/#responses">here</a>.)

### Success

```json
200 OK
{
  "massage": "Email sent successfully",
  "data": {
    "email_id": "hkhbhbrej4gegm",
    "data": {
      //  available only when email logging is turned on.
    }
  }
}

```

### Failure

```json
400 Bad Request
{
  "massage": "Failed to send email",
  "data": {
    //May or may not respond with reason of failure
  }
}

```
## Email Fields

Refer to this [page](../user-guides/send/index.md) for all possible mail fields.