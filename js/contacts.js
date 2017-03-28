/** =====================================================================
  Dummy Database **/

var contactFields = ["Name", "Phone", "DOB", "Email", "Address", "Connection"];
var contactDatabase = [
  ["Arisu Desu", "267-474-9730", "7/20/98", "arisu@me.com", "999 Edo St., Tokyo, Japan", "Watashi"],
  ["Kento Matsui", "123-456-7890", "1/2/34", "kento@hacker.com", "888 Othmer St., Tandon, NYU", "Senpai-kun"],
  ["Krisu Otsuka", "987-654-3210", "2/3/45", "krisu@gmail.com", "777 Russian St., Moscow, Russia", "Onii-kun"],
  ["Ami Chan", "135-246-7890", "12/12/12", "ami@yahoo.com", "666 Kpop St., Seoul, South Korea", "Onee-chan"]
];


$(function(){

  for(var member = 0; member < contactDatabase.length; member++){
    var contactInfo = '';

    for(var field = 0; field < contactFields.length; field++){
      contactInfo += '<li>'+'<b>'+contactFields[field]+': '+'</b>'+contactDatabase[member][field]+'</li>';
    }

    var ulPanel = '<ul>' + contactInfo + '</ul>';
    var editButton = '<button class="js-button edit">Edit Contact</button>';
    var deleteButton = '<button class="js-button delete">Delete Contact</button>';
    var divPanel = '<div class="accordion-panel">' + ulPanel + editButton + deleteButton + '</div>';
    var buttonControl = '<button class="accordion-control">' + contactDatabase[member][0] + '</button>';
    var liAccordion = '<li>' + buttonControl + divPanel + '</li>';

    $('ul.accordion:last').append(liAccordion);
  }
});

/** =====================================================================
  Accordion JS **/

$('.accordion').on('click', '.accordion-control', function(e){
  e.preventDefault();
  $(this)
    .next('.accordion-panel')
    .not(':animated')
    .slideToggle()
});

/** =====================================================================
  Edit Contact **/

$('.js-button.edit').on('click', function(e){
  e.preventDefault();
  var tempDatabase = [];
  $(this)
    .siblings('ul').children().each(function(){
      liContent = $(this).children().contents().remove();
      liContent = $(this).text();
      tempDatabase.push(liContent);
    });

  document.cookie = tempDatabase;
  window.location.href = "edit.html";

});

/** =====================================================================
  Delete Contact **/
$('.js-button.delete').on('click', function(e){
  e.preventDefault();
  $(this)
    .parent().parent()
    .empty()
});

