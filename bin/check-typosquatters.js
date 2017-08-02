#! /usr/bin/env node
var allThePackageNames = require("all-the-package-names");
var levenshtein = require("js-levenshtein");

const inputPackageName = process.argv[2];

if(inputPackageName == null)
{
    console.log("You must provide a package name");
    return;
}

console.log("10 npm packages named most similarly to " + inputPackageName + ":");

var biggestMatchedDiff = 0;
var bestMatches = [];
for(let i=0; i< allThePackageNames.length; i++)
{
    let diff = Math.abs(levenshtein(allThePackageNames[i], inputPackageName));

    if(bestMatches.length < 10 || diff < biggestMatchedDiff)
    {
        bestMatches.push({"name": allThePackageNames[i], "diff" : diff, "rank": i});    
        bestMatches.sort((a,b) => a.diff - b.diff);
        bestMatches = bestMatches.slice(0,10);

        biggestMatchedDiff =bestMatches[bestMatches.length - 1].diff;
    }
}

bestMatches.sort((a,b) => a.diff - b.diff);

console.log();
console.log("Edits      Rank   Package Name     ");
console.log("------------------------------------");

for(let i=0; i<10; i++)
{
    console.log(('    ' + bestMatches[i].diff).slice(-4) + "  " + ("       " + bestMatches[i].rank).slice(-8) +    "      " + bestMatches[i].name) ;
}
console.log();
console.log("It is recommended to update the all-the-package-names package to make sure you have the latest list of packages");



