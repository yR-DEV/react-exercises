// import ListComponent from './components/ListComponent';
import TableComponent from './components/TableComponent';

function App() {

  const myList = [1,2, 3, 4, 5, 6, 7, 8, 9];

  const tableTitles = ["name", "quantity", "price"];

  const tableProducts = [
    {
      id: 12,
      name: "pen",
      qty: 200,
      price: 0.99
    },
    {
      id: 13,
      name: "paper",
      qty: 5000,
      price: 5.10
    },
    {
      id: 14,
      name: "notebook",
      qty: 69,
      price: 12.60
    }
  ];
  
  return (
    <div>
      {/* <ListComponent list={myList}/> */}
      <TableComponent titles={tableTitles} products={tableProducts} />
    </div>
  );
}

export default App;
