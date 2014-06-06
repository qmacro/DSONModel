DSONModel
=========

DSON (Doge Serialized Object Notation) Model for UI5

Quick video: http://youtu.be/jjRc4AehSoA

Here's what I did:

 * Enjoyed reading about [Doge Serialized Object Notation](http://dogeon.org/)
 * Installed [kpdecker's dogeon module](https://github.com/kpdecker/dogeon) (DSON serialiser / deserialiser) module (wow!)
 * Used [Browserify](http://browserify.org/) to make a browser-loadable module with dogeon and its dependencies (very wow!)
 * Extended the standard client model JSONModel using the extend method, to produce DSONModel
 * In the new DSONModel, overrode the loadData() method, and added parseDSON(), setDSON() and getDSON() methods

For the demo:

 * I created a simple single-XML-view Component based app
 * In the view I put an ObjectHeader and a List (both from sap.m)
 * I bound the 'title' property of the ObjectHeader to the root 'title' property (initially empty) in the DSON model
 * I bound the List's 'items' aggregation to the root 'beers' in the DSON model
 * Once the model was instantiated and the ajax call made, the beers were shown in the list
 * Finally I extended the data in the model with some more DSON, i.e. I set the title property, and it appeared in the ObjectHeader as expected

This is what the beer data (info on 3 beers) in Doge Serialized Object Notation looks like:

```
such "beers" is so such "location" is "Huddersfield" next "brewery" is "Magic Rock" next "name" is "Ringmaster" wow next such "location" is "Hull" next "brewery" is "Atom" next "name" is "IPA" wow next such "location" is "Manchester" next "brewery" is "Blackjack" next "name" is "Stout" wow many wow
```

Very text format, such module, wow!
