---
layout: doc
---

# Verify Email

## Intro

This api end-point(s) allow you verify user's email by <a>code</a> or <a>link</a>. This is a full solution you do not need to maintain the user and verify the codes/keys we handle all that.

#### Using the code

This method involve calling the api 2 times.

> First: Generate code and email it to the user then get temporary user id to send to the api for the second time.

> Second: Validate the code entered by the user against the code the server have generated.

#### Using the link

With this method the api is called once and the user can be permited to use your app pending email verification. Once use verify thier email we send a notification (webhook) to your server/website you handle the rest.

## End-Point

::POST

```link
https://airmailer.cyclic.app//v2/verify/email
```

## Code example

### Request 1

```js
async () => {
  await fetch("https://airmailer.cyclic.app//v2/verify/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: "APPID APIKey", //Space separated
    },
    body: {
      email: "axolemaranjana4@gmail.com",
      expire: 5000,
      type: "link",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      //Get the email id and store it in a variable to send with the code from user input
    })
    .catch((err) => {
      //Handle the error here
    });
};
```

### Response

```json
{
  "massage": "Email with verification code has been sent to axolemaranjana4@gmail.com",
  "data": {
    "email": "axolemaranjana4@gmail.com",
    "id": "ad2bb27938aa002eeabd499d"
  }
}
```

### Request 2

::POST

```link
https://airmailer.cyclic.app/v2/verify/email/code
```

```js
const emailIdFromPreviousResponse = data.id;

async () => {
  await fetch("https://airmailer.cyclic.app/v2/verify/email/code", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: "APPID APIKey", //Space separated
    },
    body: {
      emailId: emailIdFromPreviousResponse,
      code: 6192,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      //Get the email id and store it in a variable to send with the code from user input
    })
    .catch((err) => {
      //Handle the error here
    });
};
```

### Response

```json

```

## LInk example

### Request

```js

```

### Response

```json

```
