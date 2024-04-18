import React, { useState } from 'react';
import { useTheme } from './main';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Sans serif');
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // Call a function to update font-family
    updateFont(option);
  };

  // Function to update font-family
  const updateFont = (font) => {
    const root = document.documentElement;
    switch (font) {
      case 'Sans serif':
        root.style.setProperty('--selected-font', 'var(--font-sans)');
        break;
      case 'Serif':
        root.style.setProperty('--selected-font', 'var(--font-serif)');
        break;
      case 'Mono':
        root.style.setProperty('--selected-font', 'var(--font-mono)');
        break;
      default:
        root.style.setProperty('--selected-font', 'var(--font-sans)');
    }
  };

  const dropdownItems = ['Sans serif', 'Serif', 'Mono'];

  return (
    <>
      <section className='my-8 mx-auto lg:mx-0'>
        <nav className='flex flex-column justify-evenly w-[80%] mx-40 lg:mx-10'>
          <div className='w-[60%]  xl:w-[40%] lg:w-[30%]'>
            <img
              src='../images/logo.svg'
              alt='logo'
            />
          </div>

          <div className='relative w-[10%] z-50 xl:w-[12%] lg:w-[20%] '>
            <button
              className='dark:bg-black bg-white text-lg text-[#2d2d2d] dark:text-white font-bold  rounded inline-flex items-center '
              onClick={toggleDropDown}
            >
              {selectedOption}
              <img
                src='../images/icon-arrow-down.svg'
                className='pl-2'
                alt='dropdown icon'
              />
            </button>
            <ul
              className={`absolute ${
                isOpen ? 'block' : 'hidden'
              } bg-white text-[#2d2d2d] font-bold pt-1`}
            >
              {dropdownItems.map((item, index) => (
                <li
                  key={index}
                  className='hover:bg-gray-200 py-2 px-4 cursor-pointer'
                  onClick={() => handleOptionSelect(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-column gap-4 w-[12%] xl:w-[25%] lg:w-[30%]'>
            <div>
              <img
                src={
                  isDarkMode
                    ? '../images/toggle-dark.svg'
                    : '../images/toggle.svg'
                }
                alt='toggle'
              />
            </div>

            <div>
              <button onClick={toggleTheme}>
                <img
                  src={
                    isDarkMode
                      ? '../images/halfmoon-dark.svg'
                      : '../images/icon-moon.svg'
                  }
                  alt='moon'
                />
              </button>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Nav;
