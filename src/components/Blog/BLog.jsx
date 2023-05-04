import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const BLog = () => {
    const ref = React.createRef();
    return (
        <div>
            <div className='flex justify-center btn'>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </div>
            <div>
                <div className='container mx-auto grid grid-cols-2 gap-6 mt-6 mb-10' ref={ref}>
                    <div className='p-8 bg-header-bg shadow-lg rounded-lg'>
                        <h1 className='text-2xl font-semibold'><span className='font-bold'>Question:</span> Tell us the differences between uncontrolled and controlled components.</h1>
                        <p><span className='font-bold'>Answer: <br /> </span><small>Uncontrolled Components: Components that manage their own state internally, allowing users to directly interact with them without explicit control from a parent component. They have a one-way data flow and are often used for form inputs when immediate access to the input's DOM value is required. Controlled Components: Components whose state is managed by a parent component or an external entity. The state is passed down to the component through props, and any changes to the state are handled by the parent component. Controlled components have a two-way data flow and are commonly used for form inputs when validation and stricter control over the input values are needed.</small></p>
                    </div>
                    <div className='border p-8 bg-header-bg shadow-lg rounded-lg'>
                        <h1 className='text-2xl font-semibold'><span className='font-bold'>Question:</span> How to validate React props using PropTypes</h1>
                        <p><span className='font-bold'>Answear: <br /> </span><small>In React, We can use the PropTypes library to validate the props passed to your components. PropTypes allow you to specify the expected types and shapes of the props, helping you catch potential bugs or incorrect usage of your components.</small></p>
                    </div>
                    <div className='border p-8 bg-header-bg shadow-lg rounded-lg'>
                        <h1 className='text-2xl font-semibold'><span className='font-bold'>Question:</span> Tell us the difference between nodejs and express js.</h1>
                        <p><span className='font-bold'>Answer: <br /> </span><small>Node.js: A runtime environment that allows you to run JavaScript on the server-side, providing a set of APIs for building server-side applications, network applications, and more.

                            Express.js: A web application framework that runs on top of Node.js, simplifying the process of building web applications and APIs by providing abstractions and utility functions for handling HTTP requests and responses.
                        </small></p>
                    </div>
                    <div className='p-8 bg-header-bg shadow-lg rounded-lg'>
                        <h1 className='text-2xl font-semibold'><span className='font-bold'>Question:</span> What is a custom hook, and why will you create a custom hook?</h1>
                        <p><span className='font-bold'>Answer: <br /> </span><small>A custom hook is a reusable JavaScript function in React that allows you to encapsulate and share logic or stateful behavior across multiple functional components. It promotes code reuse, enhances code organization, and helps separate concerns by extracting common functionality into custom hooks.</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BLog;