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

Method: POST

```link
https://airmailer.cyclic.app//v2/verify/email
```

## Code example

### Request 1

::: code-group

```js [verify.js]
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
      type: "code",
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

```json [Response]
{
  "massage": "Email with verification code has been sent to axolemaranjana4@gmail.com",
  "data": {
    "email": "axolemaranjana4@gmail.com",
    "id": "ad2bb27938aa002eeabd499d"
  }
}
```

:::

### Request 2

Method: POST

```link
https://airmailer.cyclic.app/v2/verify/email/code
```

::: code-group

```js [verifyCode.js]
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

```json [Response]
{
  "massage": "Email verified successfully!",
  "data": {
    "appsid": "ede9b4d199dde2822398bbe5",
    "emailId": "0fb0ceade042bb7b7dfa37d9",
    "email": "axolemaranjana4@gmail.com",
    "code": "****",
    "verified": true,
    "exp": 2600,
    "createdAt": "2023-02-11T04:49:01.000Z",
    "updatedAt": "2023-02-11T04:49:01.000Z",
    "timestamp": 1676098141650,
    "link": "https://api.airmailer.co.za/"
  }
}
```

:::

## Link example

### Request

```js{11}
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
