import React from 'react';
import about1 from '../../assets/about-01.png'

const About = () => {
    return (
        <div className='mt-36 flex'>
            <div className='container'>
                <h1 className='text-3xl'>About Us</h1>
                <h1 className='text-4xl'>Heaven and Earth are <br />
                    between <span className='text-logo-color'>each other .</span>
                </h1>
                <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet <br />
                    magna suscipit, fermentum mattis erat rutrum. Sed suscipit libero <br />
                    lectus, at ullamcorper erat feugiat eu. Nam posuere ultrices nibh ut <br />
                    sagittis. Etiam arcu turpis, elementum ac nulla vel, tristique cursus <br />
                    libero. Fusce feugiat, justo at mattis tincidunt, velit ante congue ante, <br />
                    et lacinia metus ipsum a risus <br />
                    Vivamus hendrerit porta libero nec imperdiet. Praesent interdum nisl <br />
                    nec facilisis dapibus.
                </p>
                <button class="bg-transparent hover:bg-logo-color text-white font-semibold hover:text-white py-3 px-7 border border-logo-color hover:border-transparent rounded">
                    View More
                </button>
            </div>
            <div>
                <img src={about1} alt="" />
            </div>
        </div>
    );
};

export default About;