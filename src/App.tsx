import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);
    return (
        <>
            <div className=" m-4 flex p-4 text-2xl  font-bold text-red-600 dark:text-blue-500">
                <button onClick={() => setIsDarkMode((prevMode) => !prevMode)}>
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                start
            </div>
        </>
    );
}

export default App;
