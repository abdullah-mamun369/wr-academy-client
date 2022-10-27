import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-10 mx-10'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5">
                <div className="collapse-title text-xl font-medium">
                    What is `cors`?
                </div>
                <div className="collapse-content">
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5">
                <div className="collapse-title text-xl font-medium">
                    Why are you using `firebase`? What other options do you have to implement authentication?
                </div>
                <div className="collapse-content">
                    <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                    <br />
                    <ul>
                        <p className='font-bold'>Other Option to Authentication:</p>
                        <li>MongoDB</li>
                        <li>Passport</li>
                        <li>Okta</li>
                        <li>JSON web Token</li>
                        <li>Amazon Cognito.</li>
                    </ul>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5">
                <div className="collapse-title text-xl font-medium">
                    How does the private route work?
                </div>
                <div className="collapse-content">
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                        If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5">
                <div className="collapse-title text-xl font-medium">
                    What is Node? How does Node work?
                </div>
                <div className="collapse-content">
                    <p className='font-bold'>What is Node?</p>
                    <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.</p>
                    <br />
                    <p className='font-bold'>How does Node work</p>
                    <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;