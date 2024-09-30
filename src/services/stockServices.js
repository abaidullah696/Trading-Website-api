import axios from 'axios';

const API_KEY = 'crtf0n9r01qv68qh9sqgcrtf0n9r01qv68qh9sr0'; // Replace with your actual Finnhub API key
const BASE_URL = 'https://finnhub.io/api/v1/';

export const getStockData = async (symbol) => {
  try {
    const response = await axios.get(`${BASE_URL}quote`, {
      params: {
        symbol,
        token: API_KEY,
      },
    });
    return response.data; // This will return current price data
  } catch (error) {
    console.error('Error fetching stock data:', error);
  }
};

export const analyzeTrend = (currentPrice, previousClose) => {
  if (currentPrice > previousClose) {
    return 'Bullish'; // Price increased
  } else if (currentPrice < previousClose) {
    return 'Bearish'; // Price decreased
  }
  return 'Neutral'; // No significant change
};
