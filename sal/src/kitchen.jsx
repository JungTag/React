import React from 'react';
import './app.css';
import OrderQueue from './components/orderQueue';
import OrderDetail from './components/orderDetail';
import Stock from './components/stock';

const Kitchen = () => {
    return (
        <div>
            <OrderQueue />
            <OrderDetail />
            <Stock />
        </div>
    );
};

export default Kitchen;
