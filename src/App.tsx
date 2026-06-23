import './App.css'
import type { WidgetOptions } from './index.widget';

interface AppProps {
  options?: WidgetOptions;
}

const App: React.FC<AppProps> = ({ options }: any) => {
const handleIncrease = () => {
    const event = new CustomEvent("increase-counter", {
      detail: {
        value: 1,
      },
    });

    window.dispatchEvent(event);
  };
  return (
    <>
      This is My Widget {options.name}
      <div>
        <button onClick={handleIncrease}>
          Increase Counter
        </button>
      </div>
    </>
  )
};

export default App
