import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: 1,
      title: 'Macbook Pro',
      amount: 499.99,
      date: new Date(2020, 5, 13),
    },
    {
      id: 2,
      title: 'GTX 3080 8gb',
      amount: 1288.0,
      date: new Date(2020, 8, 20),
    },
    {
      id: 3,
      title: 'Playstation 5',
      amount: 300.0,
      date: new Date(2021, 2, 8),
    },
    {
      id: 4,
      title: 'Headset Razor',
      amount: 813.32,
      date: new Date(2021, 3, 12),
    },
  ];

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
