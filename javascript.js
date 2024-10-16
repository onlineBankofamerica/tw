// all dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

//loop through all dropdowns element
dropdowns.forEach(dropdown => {
  //get inner elements from each dropdown
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelector('.menu li');
  const selected = dropdown.querySelector('.selected');
  /* we are using this method in order to have multiple dropdown menus on the page work*/

  //add a click event to the select element
  select.addEventListener('click', () => {
    //add the clicked select styles to the select element 
    select.classList.toggle('select-clicked');
    //add the rotate styles to the caret element
    caret.classList.toggle('caret-rotate');
    //add the open styles to the menu element
    menu.classList.toggle('menu-open');
  });
     
  //loop through all option elements
  options.forEach(options => {//add a click event to the option element
    option.addEventListener('click', () => {
      //change selected inner text to clicked option inner text
      selected.innerttext = option.innertext;
      //add the clicked select styles to the select element
      select.classlist.remove('select-clicked');
      caret.classlist.remove('caret-rotate');
      menu.classlist.remove('menu-open');
      //remove active class from all option elements
      options.foreach(option => {
        option.classList.remove('active');
      });
      //add active class to clicked option element
      option.classlist.add('active');});
    });
});

  