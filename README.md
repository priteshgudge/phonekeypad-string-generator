# phonekeypad-string-generator

To Run: 
```$xslt
npm run start
```

Verify with Ping
```$xslt
http://localhost:3001/ping
```

Postman Link: https://www.getpostman.com/collections/e80f1b37e618ca298e7f
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

To Test:
```$xslt
npm run test
```
