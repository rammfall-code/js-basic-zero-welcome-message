let name;

do {
  name = prompt('Enter your name');

  if (name === null) {
    alert('you cancelled');
    break;
  }
} while (name.trim() === '' || /\d/.test(name));

if (name !== null) {
  alert(`Hi, ${name}`);
}
