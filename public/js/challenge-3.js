/**
 *	  Write your solution to Challenge 3 in this file
 */
function generateEsQuery() {
  return {
    "query": {
      "query_string": {
        "query": "*"
      }
    },
    "size": 100,
    "sort": [{
      "favorite_count": {
        "order": "desc"
      }
    }]
  }
}
