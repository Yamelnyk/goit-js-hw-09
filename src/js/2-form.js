const KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

function formInputHadler(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const data = JSON.stringify({ email, message });
  localStorage.setItem(KEY, data);
}

form.addEventListener('input', formInputHadler);

const jsn = localStorage.getItem(KEY) ?? '';

try {
  const data = JSON.parse(jsn);
  form.elements.email.value = data.email;
  form.elements.message.value = data.message;
} catch {
  ('Немає збережених даних');
}

function formSubmitHandler(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  if (email === '' || message === '') {
    return;
  }

  console.log({ email, message });
  localStorage.removeItem(KEY);
  form.elements.email.value = '';
  form.elements.message.value = '';
}

form.addEventListener('submit', formSubmitHandler);
