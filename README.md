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



