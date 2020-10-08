export default function (salary) {
  const userLang = navigator.language || navigator.userLanguage;
  const currency = userLang.includes('en') ? 'USD' : 'EUR';
  const value = userLang.includes('en') ? salary * 1.18 : salary;
  const money = new Intl.NumberFormat(userLang, { style: 'currency', currency: `${currency}` }).format(value);

  return money;
}
