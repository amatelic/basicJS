//Javascript doesn't support classes but
// it supports constructor function

// basic constructor

function People ( name, surname, age ) {
	this.name = name;
	this.surname = surname;
	this.age = age;

	this.toString = function () {
		return "My name is" + this.name + "and surname" + this.surname;		
	};
}

// Creatring instance of People
var anze = new People( 'anze', 'matelic', '21');


// Constructor with prototype
//Better all object will inherit just one toStringInstance()

function People ( name, surname, age ) {
	this.name = name;
	this.surname = surname;
	this.age = age;

}
People.prototype.toString = function () {
	return "My name is" + this.name + "and surname" + this.surname;		
};