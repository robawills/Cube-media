import $ from 'jquery';

// Globals
const _globals = {
  postUrl: 'sproutForms/entries/saveEntry',
  labelSelector: '.contact-form__label',
  validationMsgSelector: '.contact-form__validation-msg',
  successSelector: '.contact-form__success-msg'
};

// Public: Our main form method listening for submissions
const form = (form = '.js-contact-form') => $(form).submit(_sendForm);

// Private: Send form event
const _sendForm = (event, form = event.currentTarget) => {

  event.preventDefault();

  // Disable the submit button (prevent duplicate entries)
  const submitButton = form.querySelector('[type="submit"]');
  submitButton.disabled = true;

  // Serialize the form data
  const formData = $(form).serialize();

  // process the form
  $.ajax({
    type:     'POST',
    url:      _globals.postUrl,
    data:     formData,
    dataType: 'json',
    encode:   true
  })
    .done(data => (data.success == true) ? _formSuccess(data, form) : _formFailure(data, form));
};

// Private: Form failure
const _formFailure = (data, form) => {

  // Re-eanble the submit button so the form can be resubmitted
  const submitButton = form.querySelector('[type="submit"]');
  submitButton.disabled = false;

  // Remove any previously appended error messages (in case these field are now corrected)
  const validationMsgSelectors = form.querySelectorAll(_globals.validationMsgSelector);
  validationMsgSelectors.forEach(validationMsgSelector => validationMsgSelector.remove());

  // Iterate through each error message
  Object.keys(data.errors).forEach(key => {

    // Setup our selectors
    const field = document.getElementById(`fields-${key}`);
    const fieldLabel = field.querySelector(_globals.labelSelector) ? field.querySelector(_globals.labelSelector) : field;

    // Create a validation message eleemnt
    let validationMsg = document.createElement('span');
    validationMsg.classList.add(_globals.validationMsgSelector.substring(1));
    validationMsg.innerText = data.errors[key];

    // Append our validation message
    fieldLabel.appendChild(validationMsg);

  });

};

// Private: Form success
const _formSuccess = (data, form) => {

  form.querySelector(_globals.successSelector).classList.remove('hide');
};

export default form;