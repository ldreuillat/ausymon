export default function (salary) {
  const userLang = navigator.language || navigator.userLanguage;
  const currency = userLang.includes('en') ? 'USD' : 'EUR';
  const money = new Intl.NumberFormat(userLang, { style: 'currency', currency: `${currency}` }).format(salary);

  return money;
}
