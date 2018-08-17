### /api/users 

Related to users.

---
Model of User
```js
{
  name: {
    type: String,
    required: true
  },
  organization: {
    type: Array,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  professional: {
    type: Boolean,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
}
```
Methods
---
  * **HTTP Verb:** `POST`
  
  * **Params** 
    JSON on request body (call.standby schema)
    ```json
    {
      "type": "call.standby",
      "call_id": "1463669263.30033",
      "code": "123456",
      "direction": "inbound",
      "our_number": "0800000000",
      "their_number": "11991910000",
      "timestamp": "2017-01-01T00:00:00Z"
    }
    ```
  * **Success Response:**

    * **Code:** 200 <br />
    * **Content:** 
        ```json
        {
          "type": "delegate",
          "call_id": "1463669263.30033",
          "destination": "*2900" //*2901 if the same number already called
        }
        ```
----
  * **HTTP Verb:** `GET`

  * **Params** 
  
    JSON on request body (call.standby schema)
    ```url
      /api/users?by=[id || attr]&id=[valid_id]
    ```
  * **Success Response:**

    * **Code:** 200 <br />
    * **Content:** 

    onSuccess:
      ```js
      {
          "organization": [],
          "_id": "5b76f734222c0e27c7e0f7e1",
          "name": "john",
          "email": "john@gmail.com",
          "gender": "male",
          "professional": false,
          "phone": "123",
          "__v": 0
      }
      ```
    onError:
    ``` No user found with provided ID or Attribute```