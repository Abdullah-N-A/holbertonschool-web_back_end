export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,816',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, it is estimated that ${budget.income} was the median household income for the San Francisco area. As a result, San Francisco was named the top tech employer in the 2017 report, with ${budget.gdp} in GDP and a per capita GDP of ${budget.capita}.`;
}
