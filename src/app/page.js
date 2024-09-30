import StockCard from '../components/StockCard';

export default function HomePage() {
  return (
    <div>
      <h1>Stock Trading Website</h1>
      <StockCard symbol="AAPL" />
      <StockCard symbol="GOOGL" />
    </div>
  );
}
