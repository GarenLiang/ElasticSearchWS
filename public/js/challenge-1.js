/**
 *   Write your solution to Challenge 1 in this file
 */
function generateEsQuery(queryString) {
  return {
    "query": {
      "fuzzy": {
        "text": {
          "value": queryString,
          "fuzziness": 1
        }
      }
    }
  }
}
