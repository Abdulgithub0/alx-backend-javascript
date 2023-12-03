export default function getBudgetObject(income, Gdp, capita) {
  const budget = {
    income: income,
    gdp: Gdp,
    capita: capita,
  };

  return budget;
}
