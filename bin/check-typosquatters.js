#! /usr/bin/env node
var allThePackageNames = require("all-the-package-names");
var levenshtein = require("js-levenshtein");

const inputPackageName = process.argv[2];

console.log("10 npm packages named most similarly to " + inputPackageName + ":");

var smallestDiffSeen = 0;
var bestMatches = [];
for(let i=0; i< allThePackageNames.length; i++)
{
    let diff = levenshtein(allThePackageNames[i], inputPackageName);

    if(bestMatches.length < 10 || diff < smallestDiffSeen)
    {
        bestMatches.push({"name": allThePackageNames[i], "diff" : diff});
        smallestDiffSeen = diff;
    }
}

bestMatches.sort((a,b) => a.diff - b.diff);

console.log();
console.log("Edits    Package Name");
console.log("----------------------------");

for(let i=0; i<10; i++)
{
    console.log(('    ' + bestMatches[i].diff).slice(-4) + "      " + bestMatches[i].name) ;
}
console.log();
console.log("It is recommended to update the all-the-package-names package to make sure you have the latest list of packages");



