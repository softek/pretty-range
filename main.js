module.exports = function(input) {
   if (input == void 0)
      throw new Error("Input must be specified.");

   var ranges = [], rstart, rend;
   input = input.sort(function(a,b){return a - b});

   for (var i = 0; i < input.length; i++) {
      rstart = input[i];
      rend = rstart;
      while (input[i + 1] - input[i] == 1) {
         rend = input[i + 1];
         i++;
      }
      if (rstart == rend) {
         ranges.push(rstart);
      } else if (rend - rstart == 1) {
         ranges.push(rstart);
         ranges.push(rend);
      } else {
         ranges.push(rstart + "-" + rend);
      }
   }
   return ranges.join(", ");
};

module.exports.middleware = function(request, response, next) {
   response.local("prettyRange", module.exports);
   next();
};