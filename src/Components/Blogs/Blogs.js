import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-2 gap-3'>
            <div className='border-2 shadow-2xl m-5 p-7 rounded'>
                <h1 className='text-2xl font-bold my-2'>What is Context API?</h1>
                <p>The react context api is a way for a react app to effectively produce global variables that can be passed around. This is  the alternative to prop drilling or moving props from grandparent to child to parent and so on. Context is also touted as an  easier ,lighter approach to state management using redux.</p>
            </div>
            <div className='border-2 shadow-2xl m-5 p-7 rounded'>
                <h1 className='text-2xl font-bold my-2'>What is Semantic Tag?</h1>
                <p> A semantic element clearly describes its meaning to both the browser and the developer. Semantic tag are two kings.
                    <li> (i) <span className='font-bold'>Non-semantics tag : </span> for example div, span, small, h1-h6, p etc.</li>
                    <li>(ii) <span className='font-bold'>Semantics Tag : </span> for example form, tabil, article, aside, footer, nav, section etc.</li>
                </p>
            </div>
        </div>
    );
};

export default Blogs;