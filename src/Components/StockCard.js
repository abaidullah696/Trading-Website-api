"use client";

import { useState, useEffect } from 'react';
import { getStockData, analyzeTrend } from '../services/stockServices';
import StockChart from './StockChart';

const StockCard = ({ symbol }) => {
  const [stockData, setStockData] = useState(null);
  const [trend, setTrend] = useState('');

  useEffect(() => {
    async function fetchData() {
      const data = await getStockData(symbol);
      setStockData(data);

      // Example: You can provide a previous close value for trend analysis
      const previousClose = 100; // Replace this with your previous close logic
      setTrend(analyzeTrend(data.c, previousClose)); // 'c' gives the current price
    }
    fetchData();
  }, [symbol]);

  return (
    <div className="stock-card">
      <h2 className={trend === 'Bullish' ? 'bullish' : 'bearish'}>
        {symbol} - {trend}
      </h2>
      {stockData && (
        <div>
          <p>Current Price: ${stockData.c}</p>
          <p>High Price: ${stockData.h}</p>
          <p>Low Price: ${stockData.l}</p>
        </div>
      )}
    </div>
  );
};

export default StockCard;
