# phonekeypad-string-generator

The core logic is built on a Trie based algorithm. 
If a match is not found by using the given string, 
patterns are generated avoiding consecutive skipping. The second part is more or less brute force.

Works on Node version 8
## Run Unit Tests
```$xslt
npm run test
```

## To Run: 
```$xslt
npm run start
```

## Verify
Verify with Ping
```$xslt
http://localhost:3001/ping
```

### How to Use
Postman Link: https://www.getpostman.com/collections/e80f1b37e618ca298e7f
Curl Request:
```$xslt
curl -X POST \
  http://localhost:3001/recommend-user-friendly-words \
  -H 'Accept: */*' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:3001' \
  -d '{
	"ph":"1716313"
}'
```


