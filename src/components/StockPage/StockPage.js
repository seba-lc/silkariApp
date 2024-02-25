import { Table } from 'react-bootstrap';
import './StockPage.css';
import { axiosBackendClient } from '../../settings/axiosSettings';
import { useEffect, useState } from 'react';

const StockPage = () => {
  const [stock, setStock] = useState([]);
  const [stockSum, setStockSum] = useState([]);

  const getStock = async () => {
    try {
      const response = await axiosBackendClient.get('/stock');
      if(response.status === 200){
        setStock(response.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const sumStock = () => {
    let stockSum = [];
    for(let i=0; i<stock.length; i++){
      if(stockSum.filter(item => item.itemName === stock[i].item.itemName).length === 0){
        let item = stock.filter(item => item.item._id === stock[i].item._id);
        let sum;
        if(item.length > 1) {
          const quantityFiltered = item.map(i => i.entryQuantity);
          sum = quantityFiltered.reduce((x, y) => x + y);
        }else{
          sum = item[0].entryQuantity
        }
        const data = {
          itemName: stock[i].item.itemName,
          area: stock[i].area,
          entryQuantity: sum
        }
        stockSum.push(data)
      }
    }
    setStockSum(stockSum);
  }

  useEffect(() => {
    getStock();
  }, [])

  useEffect(() => {
    if(stock.length !== 0){
      sumStock();
    }
  }, [stock])

  return (
    <div className='stockPage-style p-5'>
      <Table striped bordered>
        <thead>
          <tr>
            <th className='text-center'>Item</th>
            <th className='text-center'>Area</th>
            <th className='text-center'>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            stockSum?.map((product, index) => (
              <tr key={index}>
                <td>{product.itemName}</td>
                <td>{product.area}</td>
                <td>{product.entryQuantity.toString()}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
};

export default StockPage;