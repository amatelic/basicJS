// How to create a normal object

var obj = {};

var obj = Object.create( object.prototype );

var obj = new Object();

// How to add new keys with propertise

// Setting properties

obj.key= 'to je test';
obj['key'] = 'to je test';
Object.defineProperty(obj, 'key', {
	value: "some text",
	writable: true,
	enurable: true,
	configurable: true
});
obj1 = Object.create( obj);
defineProp(obj, "name", "anze" );
//Getting propertise

var value = obj .key;
var value = obj['key'];

