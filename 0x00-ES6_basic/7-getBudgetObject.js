export default function getBudgetObject(incom, Gdp, capital) {
  const budget = {
    income: incom,
    gdp: Gdp,
    capita: capital,
  };

  return budget;
}
