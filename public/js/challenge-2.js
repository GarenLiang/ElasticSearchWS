/**
 *	  Write your solution to Challenge 2 in this file
 */
function generateEsQuery(queryString, selectedUser) {
  return {
    "query": {
      "query_string": {
        "query": "user.screen_name:" + selectedUser + " AND " + queryString
      }
    }
  }
}
