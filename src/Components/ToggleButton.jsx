import { useGlobalContext } from './utils/global.context';

const ToggleButton = () => {
  const { toggleTheme, state } = useGlobalContext();

  return (
    <div className="toggle-button">
      <input
        type="checkbox"
        id="darkmode-toggle"
        className="toggle-button-input"
        onChange={toggleTheme}
        checked={state.theme === 'dark'}
      />
      <label htmlFor="darkmode-toggle" className="toggle-button-label">
        {state.theme === 'dark' ? (
          <img src="/images/moon.svg" className="moon" alt="Moon" />
        ) : (
          <img src="/images/sun.svg" className="sun" alt="Sun" />
        )}
      </label>
      <div className="toggle-button-background"></div>
    </div>
  );
};

export default ToggleButton;
