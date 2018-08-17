### /api/calls 

Related to Teravoz API

----
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
          "destination": "*2900"
        }
        ```
        *2901 if the same number already called
