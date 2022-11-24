import React from 'react';

const Header = () => {
    return (
        <div>
             <div className="relative rounded">
      <img
        src="https://media.istockphoto.com/id/1323779251/photo/living-room-interior-wall-mockup-in-warm-tones-with-leather-armchair-on-white-wall-background.jpg?b=1&s=170667a&w=0&k=20&c=8wWA1s4Wq6oLJ6e41QAOWZwx1rZMc7WokQ02anr2ErY="
        className="absolute inset-0 object-cover w-full lg:h-[700px] h-full"
        alt=""
      />
      <div className="relative lg:h-[700px] bg-gray-900 bg-opacity-75 rounded">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 rounded">
          <div className="flex flex-col items-center lg:mt-[150px] justify-between lg:justify-end xl:flex-row rounded">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Style Comfort & Affordable <br className="hidden md:block" />
                Make Yourself <br></br>
                <span className="text-teal-accent-400 pb-2">At Home</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                Vestibulum, diam vulputate amet cras in diam quis turpis curabitur tellus aliquet tellus iaculis tempus,eleifend egestas turpis sit etiam commodo viverra laciniaconvallis sed augue purus pellentesque leo tincidunt integer.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700 text-white bg-amber-500 p-3 rounded "
              >
                Shop Now
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
           
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Header;