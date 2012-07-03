# Pretty Range

Simple Node.js module to prettify arrays of integers into ranges.
This code is based upon a [StackOverflow post](http://stackoverflow.com/questions/2270910/how-to-convert-sequence-of-numbers-in-an-array-to-range-of-numbers)
by Christian C. Salvadó.

Here are a few examples:
* ```[1,2,3]``` -> ```"1-3"```
* ```[1,2,3,5,6,7]``` -> ```"1-3, 5-7"```
* ```[1,2,5,6,7]``` -> ```"1, 2, 5-7"```
* ```[7,5,6,3,4,10]``` -> ```"3-7, 10"```

## Install
```
npm install pretty-range
```

## Sample Usage

```javascript
var prettyRange = require("pretty-range");
var input = [7,5,6,3,4,10];
var output = prettyRange(input);
console.log(output);
```
The outputs is ```3-7, 10```

## Express Middleware
If you're using Express and want access to prettyRange() in your views, add the following piece of middleware to your server:

```javascript
var prettyRange = require("pretty-range");
var express = require("express");
var app = express.createServer();

app.use(prettyRange.middleware);
```