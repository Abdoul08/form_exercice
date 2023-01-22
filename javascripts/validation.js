function emailValidation() {
  const emailConfirmation = document.getElementById('email_confirm');
  const contenu = document.getElementById('content')
  const form = document.getElementById('form');
  const element = document.createElement('p');
  const message = document.createTextNode("Les e-mails ne correspondent pas");
  element.appendChild(message);
  element.setAttribute("id","alert");
  element.classList.add("alert");

  emailConfirmation.addEventListener('input', e => {
    e.preventDefault();
    if(form.email.value !== form.email_confirm.value) {
    
        contenu.parentNode.insertBefore(element,contenu)
        emailConfirmation.classList.add("alert2")
    }  
      else {
        element.parentNode.removeChild(element);
        emailConfirmation.classList.remove("alert2");
      }
      
    
  });
};

window.onload = emailValidation

