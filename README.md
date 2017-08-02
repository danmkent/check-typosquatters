# check-typosquatters
Check list of NPM packages for similarly named packages

Installation
--------------

```sh
npm install -g check-typosquatters
```

Usage
--------------
Show 10 npm packages most similarly named to the given parameter, with their rank (based on number of dependents)

```sh
$ check-typosquatters loadash

10 npm packages named most similarly to cross-env:

Edits      Rank   Package Name     
------------------------------------
   0       246      cross-env
   1    520757      crossenv
   2      7986      crossvent
   3     19794      cloud-env
   3     25449      cross-zip
   3     26607      process-env
   3     48006      crossref
   3     74917      chrome-env
   3     75367      cross-run
   3     84218      conf-env

It is recommended to update the all-the-package-names package to make sure you have the latest list of packages
```
