/** Old Javascript **/

var contactlst = [
["Arisu Desu", "7/20/98", "arisu@me.com", "999 Edo St., Tokyo, Japan", "Watashi"],
["Kento Matsui", "1/2/34", "kento@hacker.com", "888 Othmer St., Tandon, NYU", "Friend"],
["Krisu Otsuka", "2/3/45", "krisu@gmail.com", "777 Russian St., Moscow, Russia", "Brother"],
["Ami Chan", "12/12/12", "ami@yahoo.com", "666 Kpop St., Seoul, South Korea", "Sister"]
];

var contactFields = ["Name", "DOB", "Email", "Address", "Connection"];

//Add new contact                                                    
for( var member = 0; member < contactlst.length; member++){
    //Create list node
    var newContact = document.createElement('li');
    var newTxt = document.createTextNode(contactlst[member][0]);
    newContact.appendChild(newTxt);
    var position = document.getElementById('contact-overview');
    position.appendChild(newContact);
    
    //Create list within list
    var nestedLst = document.createElement('ul');
    var position2 = position.lastChild;
    position2.appendChild(nestedLst);
    //Create para node for list node
    for( var field = 0; field < contactFields.length; field++){
	var strTxt = contactFields[field] + ":" + contactlst[member][field];
	var contactInfo = document.createElement('li');
	var newTxt2 = document.createTextNode(strTxt);
	contactInfo.appendChild(newTxt2);
	var position2 = document.getElementsByTagName('ul')[member + 1];
	position2.appendChild(contactInfo);

    }
}