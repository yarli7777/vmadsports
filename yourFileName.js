function calculateTotal(inputItem) {
  with (inputItem.form) 
{
   if (inputItem.type == "radio")
    {   
      
      calculatedTotal.value = eval(calculatedTotal.value) - eval(previouslySelectedRadioButton.value);
      
      previouslySelectedRadioButton.value = eval(inputItem.value);
   
      calculatedTotal.value = eval(calculatedTotal.value) + eval(inputItem.value);
    } 
else 
    { 
    
    if (inputItem.checked == false) 
      {   
          calculatedTotal.value = eval(calculatedTotal.value) - eval(inputItem.value);
      } 
	else 
	{   // Item was checked. Add the item value to the total.
          calculatedTotal.value = eval(calculatedTotal.value) + eval(inputItem.value);
        }
    }

    // Total value should never be less than 0.
    if (calculatedTotal.value < 0) 
    {
      InitForm();
    }

    // Return total value.
    return(formatCurrency(calculatedTotal.value));
    }
}

// Format a value as currency.
function formatCurrency(num) {
  num = num.toString().replace(/\$|\,/g,'');
  if(isNaN(num))
     num = "0";
  sign = (num == (num = Math.abs(num)));
  num = Math.floor(num*100+0.50000000001);
  cents = num%100;
  num = Math.floor(num/100).toString();
  if(cents<10)
      cents = "0" + cents;
  for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
      num = num.substring(0,num.length-(4*i+3)) + ',' + num.substring(num.length-(4*i+3));
  return (((sign)?'':'-') + '$' + num + '.' + cents);
}

// This function initialzes all the form elements to default values.
function InitForm() {
  // Reset values on form.
  document.selectionForm.total.value='$0';
  document.selectionForm.calculatedTotal.value=0;
  document.selectionForm.previouslySelectedRadioButton.value=0;

  // Set all checkboxes and radio buttons on form to unchecked.
  for (i=0; i < document.selectionForm.elements.length; i++) {
    if (document.selectionForm.elements[i].type == 'checkbox' | document.selectionForm.elements[i].type == 'radio') {
      document.selectionForm.elements[i].checked = false;
    }
  }

}