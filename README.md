
# REST Fizzbuzz

API which returns a fizzbuzz array and metric using NodeJS Express. 
 - Run using `npm install`.
 - Run using `npm start` and navigating to localhost:3000.

## API Reference

#### Get a fizzbuzz array

```http
  GET /
```

| Query | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `number` | The number of elements in the array. *defaults to 100* |
| `intOne` | `number` | The mod position to replace by strOne in the array. *defaults to 3* |
| `strOne` | `string` | The string to be printed when a number is divisible by intOne. *defaults to fizz* |
| `intTwo` | `number` | The mod position to replace by strTwo in the array *defaults to 5* |
| `strTwo` | `string` | The string to be printed when a number is divisible by intTwo. *defaults to buzz* |

**Example**

```http
  GET /?limit=15&intOne=toto
```
**Returns**
```javascript
[1,2,"toto",4,"buzz","toto",7,8,"toto","buzz",11,"toto",13,14,"totobuzz"]
```

#### Get metric of the most used request and the number.

```http
  GET /metric
```

/?limit=50 call by Three and maximal in all request.
**Returns**
```javascript
[{url: "/?limit=50", numberAccess: 3}]
```