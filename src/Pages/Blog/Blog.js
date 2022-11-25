import React from 'react';
import './Blog.css' 

const Blog = () => {
    return (
        <div>
            <div className='blog-contain'>
                <h3 className='text-2xl'>What are the different ways to manage a state in a React application?</h3>
                <p>There are four main types of state you need to properly manage in your React apps:Local state,Global state,Server state,URL state.Local state is most often managed in React using the useState hook.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state.</p>
            </div>
            <div className='blog-contain'>
                <h3 className='text-2xl'>How does prototypical inheritance work?</h3>
                <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.</p>
            </div>
            <div className='blog-contain'>
                <h3 className='text-2xl'> What is a unit test? Why should we write unit tests?</h3>
                <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.It simplifies the debugging process.Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.</p>
            </div>
            <div className='blog-contain'>
                <h3  className='text-2xl'>React vs. Angular vs. Vue?</h3>
                <p>React:- <br />
            Many front-end applications rely on global state management to store information, such as who is logged in and other user settings.
            The most popular project for JavaScript state management is Redux. Most developers use the official React bindings for Redux, which are maintained by the Redux team.Because of React’s popularity, finding input components and ready-to-use elements is extremely easy. They’re all just a Google or GitHub search away.The React ecosystem also includes React Native that allows you to build native iOS and Android applications from a single codebase written in React. So, React can be a great choice for building mobile applications using web technologies, too.React is part of the MERN stack, which contains MongoDB, ExpressJS, React, and NodeJS. The great thing about this combination is that a single language — JavaScript — powers the whole application. <br />

            Vue:- <br />
            Even though Redux can be used in Vue, there are no official bindings. But that should not worry you because Vuex is the official state management library made specifically for Vue applications. Aside from integrating very well with Vue, it’s easy to debug using Vue’s developer tools.In the early days of Vue, it was harder to find ready-to-use components. Since the community has grown, there’s a wide range of input components and advanced elements that you can use to speed up your development.For mobile app development, there’s an up and coming project called Weex. Weex is developed and used by Alibaba, but it’s not as mature and powerful as React Native. What’s more, since the project is developed and used more in China, it’s harder to find documentation and solutions to issues in English.Vue integrates well with Laravel, and that’s why they are often used together. Laravel offers complete JavaScript and CSS scaffolding to enable the use of Vue in new projects. <br />

            Angular:- <br />
            For state management in Angular, you can use the NgRx project. It has been inspired by Redux, but it’s specifically created for Angular.
            As in the case of Vue and React, there are many ready-to-use components that you can import into your projects. What’s slightly different about Angular is that there are many official components in the Angular Material project. This is an official project by Google that offers Material Design components for Angular applications.You can build cross-platform mobile applications in Angular using NativeScript. It supports Vue as well, but the Angular support is more mature.Angular is part of the well-known MEAN stack that combines Angular with MongoDB, ExpressJS, and NodeJS. Similar to the MERN stack, it relies entirely on JavaScript for both the front-end and back-end.</p>
             </div>
        </div>
    );
};

export default Blog;