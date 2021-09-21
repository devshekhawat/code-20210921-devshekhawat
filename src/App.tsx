import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import './App.css';
import ProductCard from './components/ProductCard';
import carData from './data/index.json';
import Filter from './components/Filter';

function App() {
  const [carList, setCarList] = useState(carData);
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    if (searchText.length === 0) {
      setCarList(carData);
    } else {
      setCarList(carList.filter(item => item.Name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1))
    }
  }, [searchText])


  useEffect(() => {
    if (filters.length === 0) {
      setCarList(carData);
    } else {
      setCarList(carList.filter(item => filters.includes(item.Origin)))
    }
  }, [filters])

  const filterByOrigin = carList.reduce((originCount: any, currentOrigin: any) => {
    if (typeof originCount[currentOrigin.Origin] !== "undefined") {
      originCount[currentOrigin.Origin]++;
      return originCount;
    } else {
      originCount[currentOrigin.Origin] = 1;
      return originCount;
    }
  }, {})

  function onChangeFilter(checkedValues: any) {
    setFilters(checkedValues);
  }

  function onChangeSearchText(value: any) {
    setSearchText(value);
  }

  return (
    <div className="App">
      <h2>Cars in Jaipur</h2>
      <input type="text" placeholder="Search by car name" className="search-input" onChange={e => onChangeSearchText(e.target.value)} />
      <Row>
        <Col md={6}>
          <Filter filterByOrigin={filterByOrigin} onChange={onChangeFilter} />
        </Col>
        <Col md={18}>
          <Row gutter={[16, 16]}>
            {
              carList.map((car: any, index: any) => (
                <Col md={12} key={car.Name}>
                  <ProductCard car={car} index={index} />
                </Col>
              ))
            }
            {carList.length === 0 && <p>No results</p>}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
