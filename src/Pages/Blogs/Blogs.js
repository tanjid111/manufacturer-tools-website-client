import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold'>This is Blogs section</h2>
            <h3 className='text-xl text-blue-500'>Q1:How will you improve the performance of a React Application? </h3>
            <p className='text-lg text-red-800'>There's a term called lazy loading where images are loaded only when the images are about to appear in the viewport. This prevents it from uncessarily to load data. It is also good to split codes using dynamic import. It only renders the required data in the UI. Instead of using prop drilling custom hookes can be used. to make loading faster. As data is always saved in the state instead of loading it from the server.</p>

            <h3 className='text-xl text-blue-500'>Q2: What are the different ways to manage a state in a React application? </h3>
            <p className='text-lg text-red-800'>There are 4 ways react states can be saved.1. local sstate. It is mostly managed using useState hooks. 2. GLobal UI sstate. It is when we want to get the data and update them anywhere in the app and in different components.  3. Server State. best example is use query where different properties are managed. 4. URL state. This is when data exists in the URL including the path name and query parameter.</p>

            <h3 className='text-xl text-blue-500'>Q3: How does prototypical inheritance work?
            </h3>
            <p className='text-lg text-red-800'>It is a feature in JS where methods and properties in objects are added. Existing objects are reused as prototypes instead of copying and reimplementing.
                Each object has a private property which holds a link to another object called its prototype and gets access to the methods and properties. </p>

            <h3 className='text-xl text-blue-500'>Q4: Why you do not set the state directly in React. </h3>
            <p className='text-lg text-red-800'>The initial state is passed to the function first which then returns the current state value and sets that value in the state with the function setProducts. The initial could be same or different than the current state. It ensures that the component has been updated and calls for re-rendering of the component. It can be  used to render components in UI in realtime.</p>

            <h3 className='text-xl text-blue-500'>Q5: What is a unit test? ,Why should write unit tests?</h3>
            <p className='text-lg text-red-800'>Unit test is a software testing method. Different smaller modules like functions, procedures are tested individually to see if they are good to use. The developers learn the functionality and gains knowledge on the unit API. It allows the developers to refine the code and makes sure that the module works properly. </p>

        </div>
    );
};

export default Blogs;