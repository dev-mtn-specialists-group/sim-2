### Base URL

/api/properties

### Methods

##### GET
###### /api/properties
* Returns All Properties From the DB Under The Current User's SessionID
##### POST
###### /api/properties
* Creates a New Property, Must supply fields in body
  * name (string)
  * description (string)
  * address (string)
  * city (string)
  * state (string)
  * zip (string)
  * image (string)
  * loanamt (number)
  * monthly (number)
  * rent (number)
##### DELETE
###### /api/properties/:id
* Deletes a property, Must supply id