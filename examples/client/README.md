## A Simple Client using express and graphql

This server creates a single POST endpoint that resolves the query and sends back the anwser

1. Run the server
2. 
```
curl -X POST \
  http://localhost:3001/graph \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -H 'postman-token: aa1fa3e0-09d3-6b42-236f-28cb0db38498' \
  -d query=%7Bhello%7D
```

3. You should get a `{"data":{"hello":"world!"}}% `

4. Happy hacking (: