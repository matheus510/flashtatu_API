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
        "name": "john",
        "email": "john@gmail.com",
        "gender": "male",
        "professional": false,
        "phone": "123"
    }
    ```
  * **Success Response:**

    * **Code:** 200 <br />
    * **Content:** 
        ```json
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
----
  * **HTTP Verb:** `GET`

  * **Params** 
  
    JSON on request body (User schema)
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
---
  * **HTTP Verb:** `PUT`
  
  * **Params** 
    JSON on request body (One or more attribute of UserSchema)
    ```json
    {
        "name": "john",
        "email": "john@gmail.com",
        "gender": "male"
    }
    ```
  * **Success Response:**

    * **Code:** 200 <br />
    * **Content:** 
      ```json
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
----