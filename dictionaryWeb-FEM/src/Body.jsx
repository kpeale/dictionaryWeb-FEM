import Nav from './Nav';
import Form from './Form';
import API from './API';
import { useTheme } from './main';
function Body() {
  const { isDarkMode } = useTheme(); // Use isDarkMode from context
  return (
    <>
      <section className={`section ${isDarkMode ? 'dark' : 'light'}`}>
        <Nav />
        <Form />
        <API />
      </section>
    </>
  );
}

export default Body;
