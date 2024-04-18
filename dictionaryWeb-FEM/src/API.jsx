import { useState, useEffect } from 'react';
// import { useTheme } from './main'; // Import useTheme hook

function API({ text }) {
  const [terms, setTerms] = useState([]);
  // const { isDarkMode } = useTheme(); // Use isDarkMode from context

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en_US/${text}`
        );
        const data = await response.json();

        // Check if data is available
        if (Array.isArray(data) && data.length > 0) {
          // Filter out only the relevant meanings (noun and verb)
          const relevantMeanings = data[0].meanings.filter(
            (meaning) =>
              meaning.partOfSpeech === 'noun' || meaning.partOfSpeech === 'verb'
          );

          // Create a new object with filtered meanings
          const filteredData = [{ ...data[0], meanings: relevantMeanings }];

          setTerms(filteredData);
          console.log(filteredData);
        } else {
          setTerms([]); // Reset terms if no data is available
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [text]);

  return (
    <div>
      {' '}
      {/* Apply 'dark' or 'light' class */}
      <section className='mx-[13.5rem] lg:mx-10'>
        {/* Check if terms is not empty */}
        {terms.length > 0 ? (
          terms.map((term, index) => (
            <div key={index}>
              {/* Render phonetic */}
              {index === 0 && term.phonetic && (
                <p className='text-[#a445ed] text-2xl mt-[-15px]'>
                  {term.phonetic}
                </p>
              )}

              {/* Render heading for meanings */}

              {/* Render meanings */}
              {term.meanings.map((meaning, meaningIndex) => (
                <div
                  key={meaningIndex}
                  className='mt-[1.5rem]'
                >
                  {/* Render part of speech only twice */}
                  {meaningIndex < 2 && (
                    <div className='flex items-center'>
                      <span className='text-2xl pr-2  border-solid border-black'>
                        {meaning.partOfSpeech}
                      </span>
                      <span className='h-0 flex-grow lg:border-none border-b border-solid dark:border-white border-black'></span>
                    </div>
                  )}
                  <h2 className='text-[#757575] text-md italic mt-2 mb-2'>
                    Meaning
                  </h2>
                  <ul className='pl-5 '>
                    {/* Render meanings only twice */}
                    {meaningIndex < 2 &&
                      meaning.definitions
                        .slice(0, 3)
                        .map((definition, defIndex) => (
                          <li
                            key={defIndex}
                            className='relative'
                          >
                            <span className='absolute left-[-1rem] text-purple-500 pl-2'>
                              &#8226;
                            </span>
                            <span className='ml-2'>
                              {definition.definition}
                            </span>
                          </li>
                        ))}
                  </ul>
                  {/* Render synonym after the first noun meaning */}
                  {/* <h2>Synonyms</h2> */}
                  {meaningIndex === 0 &&
                    meaning.synonyms &&
                    meaning.synonyms.length > 0 && (
                      <div className='flex flex-row gap-4 mt-4'>
                        <h2 className='text-[#757575]'>Synonyms</h2>
                        <p className='text-purple-500 font-bold '>
                          {meaning.synonyms.join(', ')}
                        </p>
                      </div>
                    )}
                </div>
              ))}
              {/* Render examples */}
              {term.meanings.map((meaning, meaningIndex) => (
                <div key={meaningIndex}>
                  {meaning.definitions.length > 0 && (
                    <div>
                      {/* <p>Example:</p> */}
                      {
                        meaning.definitions.map((definition, defIndex) => (
                          <div key={defIndex}>
                            {definition.example && (
                              <blockquote>
                                <p className='text-[#757575] italic quote pl-7'>
                                  {definition.example}
                                </p>
                              </blockquote>
                            )}
                          </div>
                        ))[0]
                      }{' '}
                      {/* Only display the first example */}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))
        ) : (
          <p className=''>No data available</p>
        )}
      </section>
    </div>
  );
}

export default API;
