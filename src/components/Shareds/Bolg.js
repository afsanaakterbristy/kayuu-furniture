import React from 'react';
   
const Bolg = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-10 border-t border-b divide-y">
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">            
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <h2
               
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-bold leading-none sm:text-4xl xl:text-4xl">
                 What are the different ways to manage a state in a React application?
                </p>
              </h2>
            </div>
            <p className="text-gray-700">
              Ans:SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL. Scalability Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes. These are useful generalizations. Structure SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns attributes and rows records, and keys have constrained logical relationships.Properties Atomicity means all transactions must succeed or fail completely. They cannot be partially-complete, even in the case of system failure.Consistency means that at each step the database follows invariants: rules which validate and prevent corruption.SQL databases represent massive communities, stable codebases, and proven standards. Multitudes of examples are posted online and experts are available to support those new to programming relational data.NoSQL technologies are being adopted quickly, but communities remain smaller and more fractured. However, many SQL languages are proprietary or associated with large single-vendors, while NoSQL communities benefit from open systems and concerted commitment to onboarding users.SQL is available to most major platforms, from operating systems to architectures and programming languages. Compatibility varies more widely for NoSQL, and dependencies need to be investigated more carefully.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
           
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <h2
               
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-bold leading-none sm:text-4xl xl:text-4xl">
                  How does prototypical inheritance work?
                </p>
              </h2>
            </div>
            <p className="text-gray-700">
             Ans:JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <h2
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-bold leading-none sm:text-4xl xl:text-4xl">
                What is a unit test? Why should we write unit tests?
                </p>
              </h2>
            </div>
            <p className="text-gray-700">
                            JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                            JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                            Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. 
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <h2
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-bold leading-none sm:text-4xl xl:text-4xl">
                  React vs. Angular vs. Vue?
                </p>
              </h2>
            </div>
            <p className="text-gray-700">
           If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.
            </p>
          </div>
        </div>
      </div>
     
    </div>
    );
};

export default Bolg;