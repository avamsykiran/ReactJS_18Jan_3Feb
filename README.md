ReactJS
----------------------------------------------------------------------

    pre-requisites
        HTML 5
        CSS 3
        Bootstrap 5
        Javascript (ECMAScript 6)

    Introduction

        is a javascript based SPA library.

        Dynamic Web Application
            Server                                                         Client / Browser
                Controllers                        <--REQ-------------
                and Views (html +java/html + c#)    
                                                 html is geerated 
                                                 dynamically
                                                 --------RESP (html page)----> unload the prev page (if any)
                                                                                and load the new one.

        Single Page Application

            Server                                                          Client / Browser
                spa-bundle          <-----------REQ------------------
                    index.html +    -------RESP (bundle)------------->      index.html is loaded along with
                    css + JS                                                the assosiated JS.

                                                                            any form / link / event occurs,
                                                                            they are handledon the client by JS.

                                                                            any new html content needed is
                                                                            generated on the client and it replaces a specific protion
                                                                            of the index.html page instead of
                                                                            unload and loading..

                db <--> rest-api    <-------REQ - CRUD -------------------
                                    -------------RESP (JSON) -------------> 

        AngularJS,Angular, ReactJS, VueJS ..etc are a list of SPA libraries .

    Lab Setup
        VSCode      IDE
        NodeJS      Dev Platform    nodejs.org      node --version

    NodeJS ?

        is an alternate javascript runtime. It enables javascript to execute
        without a browser in a stand alone mode. It also opened the possibility
        of middleware application development in javascript.

        To develop an application, it takes a varity of steps like

            Code Composition            IDE             VSCode
            Code Package/Bundle         Build Tool      npm
            Code Test                   Testing lib     JEST
            Host and Execute            Web Server      Development Server

        these tools like npm,JEST ..etc are JS tools and need NodeJS to run.


    Creating a React App

        npx create-react-app app-name

        or

        npm install -g create-react-app
        create-react-app app-name

    ReactJS application archetecture

        index.html
            |
            |- RootComponent
                |- Component1
                |- Component2
                |- ......

        A ReactJS Component is a react defiend html element. (it is an html element that
        we have created on our own using react js lib). React also allows us to create
        our own html attributes.

        ReactJS Components
            1. Class Component
            2. Function Component
            3. High Order Component (hoc)

    Class Components

        <Dashboard> </Dashboard>

        class Dashboard extends React.Component {
            constructor(props){
                super(props);
                this.state = {}; //state is initialized
            }

            render(){
                return singleJSXElement;
            }
        }

    JSX?

        Javascript extended. is a an amulgamation of javscript + html.


        javascript

            let user  = {name:"Vamsy",age:37};
            let para1 = document.createElement("p");
            para1.text = "Hello " + user.name +"! How do you do?";

            let para2 = document.createElement("p");
            para2.text = user.age>18?"Eligible to vote":"Not eligible to vote";

            let friends = ["Vamsy","Suseela","Indu"];
            let olObj = document.createElement("ol");
            
            for(let f of friends){
                let liObj = document.createElement("li");
                liObj.text = f;
                olObj.append(liObj);
            }

        JSX
            let user  = {name:"Vamsy",age:37};
            let para1 = <p>Hello {user.name}! How do you do?</p> ;
            let para2 = <p> {user.age>18?"Eligible ":"Not eligible"} to vote </p>;
            
            let friends = ["Vamsy","Suseela","Indu"];
            let olObj = <ol>
                            {friends.map(f => <li>{f}</li>)}
                        </ol>;

        JSX rules

            1. JSX is case sensitive.
            2. all html elements are expected to be lower-case.
            3. all react components (as they are class names) must be initially capital.
            4. the 'render()' can return only one element.
            5. we have to sue 'className' attribute instead of 'class' attribute.
            6. all attributes must follow camel case.
            7. the valeus of the attributes are expected to be in dbl quotes.

    state

        the 'state' is sued to hold the data related to the component.

        the 'state' is continuosly monitored for any changes and changes to the 'state' will
        trigger the 'render()' method. As many times state changes those many times 'render()'
        executes.

        the 'state' is immutable. the 'state' is always replacable using 'setState()' method.

    props

        'props' short for properties.

        'props' are used to carry data from parent component to a child component via attributes.

    Function Component

        a javascript function that accepts 'props' and returns a JSX-element is concedered
        as a full pledged component.

        const F1 = props => (<h3> {{props.attribute}} </h3>) ;

        <F1></F1>

        these components are said to be state-less components. but the function is treated as a 'render()'

    Integrating Bootstrap

        npm install bootstrap --save

        import the .css and .js files into our index.js file.

    Event Bubbling

        is to handle events that occur in a child component from a parent component.

        as functions are assignable resources in JS, a parent component can pass its function
        to the child component via 'props'. The child componet can call that fucntion in
        resposne to any event that occurs in the child.

    Working with Forms in React

        