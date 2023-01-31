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
        response to any event that occurs in the child.

    Shadow DOM / Virtual DOM

        is a temprary virtual copy of the actual dom maintiend alongside the 
        original dom of the browser.

        modifing actual dom needs a lot of process overhaed as it is
        immidiatly rendered on the screen. But the virtual dom is decoupled
        with the actual UI and it is a mere Tree datastructure. Hence
        altering virtual dom or regenrating virtual dom is more easier and
        less process overloading.

        Thus the 'render()' method is effected on the virtual dom first.
        And the virutal dom is super-imposed on the actual dom and the
        difference are identifed and only the differential areas are altetered
        on the actual dom.

        React offers an attribute called 'key' usign which each node can be identified
        uniquly for comparision.

    Assignment

        Develop a CRUD react SPA for AddressBook.

    Working with Forms in React

        Controlled Forms                        UnControlled Forms

        The form element is                     the form element is represented by 'ref' s.
        boudn to a state property,              the data from the ref's is collected into the 
        and we will have only one               component at a specificmostly at form-submittion.
        source of truth.
                                                <input type="text" ref={tb1} />

                                                let val = this.refs.tb1.value;

    Component Life Cycle

        React.Component
                render()
                componentDidMount()
                componentDidUpdate()
                componentWillUnMount()

        constructor()
            |
            |
          render()
            |
            |
        componentDidMount()
            |
            |
            -------------------------------------------------
            | no action occurs until setState() is invoked  | <-------------|
            -------------------------------------------------               |
                        |                                                   |
                        |                                                   |
                        render()                                            |
                        |                                                   |
                        |                                                   |
                        componentDidUpdate() ------------------------------>|


    React Hooks

        are special function offered by reactjs to make
        funtional components on-par to class components

        the hooks are expected to be called on the top-lines of the fucntional component.

        useState            accepts an intial state valeu and returns a getter and a setter.

                            let [x,setX] = useState(0);

        useEffect           is sued to handle sideEffects and is equivalent to the
                            componentDidMount and componentDidUpdate methods.

                            accepts a callBack and an array.

                            useEffect(()=> { /*...*/ },[])
                                if the array is empty, then the callBack is equal to componentDidMount().
                                means that the callBack execute only once after the first render.

                            useEffect(()=> { /*...*/ })
                                if the array is undefiend, then the callBack is equal to componentDidUpdate(),
                                means that the callBack execute once after each render.

                            useEffect(()=> { /*...*/ },[x,y])
                                if the array is defiend and is not empty, then the callBack is equal to componentDidUpdate() with dependencies,
                                means that the callBack execute once after each render only when the 
                                state variables x or y have been modified.

State Management using Redux
--------------------------------------------------------------------------------

    Redux offers Centralized State Management.

        this potentially avoids teh components to manage or share data and that increases
        the isolation of the components which inturn makes the app more maintainable and dynamic.

        npm install redux react-redux --save

        redux
            store           is a place where the entire state of the app is maintained.
                            one react app will have one and only store.
                            'createStore' method from 'redux' moduel sued to create a store.

                            const myStore = createStore(myReducer);

            reducer         is a pure javascript function that has
                                oldState,action as paramaeters and
                                modifiedState is returned

                            const myReducer = (oldState,action) => {
                                /*operation on initialState as per the given action */

                                return modifedState;
                            };

            action          is a json object having payload and type as properties.
                            'type' indicates what operation has to be done on the state
                            'payload' hold the data needed to execute the operation.

                            { type:'DELETE',empId:101}
                            { type:'ADD', emp:{empId:110,name:'Vamsy',sal:45000}}
                            { type:'UPDATE',emp:{empId:110,name:'Vamsy Kiran',sal:85000}}

            dispatch        is a in-built function from 'redux' module used
                            by a component to send action to the reducer.

                            let addAction = { type:'ADD', emp:{empId:110,name:'Vamsy',sal:45000}};
                            dispatch(addAction);
                            
        react-redux
            Provider            is a component from react-reduc used to wrap the store
                                on our top-level component.

                                root.render(
                                    <React.StrictMode>
                                        <Provider store={myStore}> 
                                            <App />
                                        </Provider>
                                    </React.StrictMode>
                                );

            useSelector hook    is used to retrive data from store into a component.

                useSelector( globalState => { /*retrive what part of the state we need*/ });

            useDispatch hook    is used to inject dispatch method and invoke it to launch an action.

               const dispatch = useDispatch();

            store  →-----------------------------------------------------
            ↑                                          |               |
            |                                          | state         | state
            |                                          ↓               ↓ 
            |                                          | useSelector   | useSelector
            |                                          | extract       | extract
            |                                          | requried      | required 
            |                                          | data from     | data from
            |                                          | state         |
            |                                          ↓               ↓ 
            |                                      Component1      Component2
            |                                          |               |
            |                                          | useDispatch   | useDispatch
            | modified state                           | gives         | gives
            |                                          | dispatch      | dispatch
            |                                          |               |
            |←-----reducer ←-------- dispatch(action)-←|               |
                           ←-------- dispatch(action)-----------------←|  

json-server
----------------------------------------------------------------------------------------------
    is a tool used to generate fake rest-api just for learning purpose.

    depends on a .json file for data and creates rest-api to perorm CRUD operations on that data.

    md rest-api
    cd rest-api
    npm init -y
    npm install json-server --save

    rest-api/package.json
        |-scripts
            "start":"json-server --port 7777 --watch ./data.json"

    rest-api/data.json
        add hypothetical data.

    npm start

axios 
------------------------------------------------------------------------------

    mpm install axios --save
    
    axios offers method to send request to a rest-api

        axios.
                get("url")
                post("url",{json:Object})
                put("url",{json:Object})
                delete("url")

    each of these method returbn a Promsie. 
    a Promsie object has then(toReciveData) and a catch(receiveError)

redux-thunk 
------------------------------------------------------------------------------

    redux-thunk is a thunk library used to apply any asynchronous middleware operation
    in redux state management.

    thunk?      is a function that returns another function.

    in redux-thunk, action can be an object or action can be a function.

    
            store  →-----------------------------------------------------
            ↑                                          |               |
            |                                          | state         | state
            |                                          ↓               ↓ 
            |                                          | useSelector   | useSelector
            |                                          | extract       | extract
            |                                          | requried      | required 
            |                                          | data from     | data from
            |                                          | state         |
            |                                          ↓               ↓ 
            |                                      Component1      Component2
            |                                          |               |
            |                                          | useDispatch   | useDispatch
            | modified state                           | gives         | gives
            |                                          | dispatch      | dispatch
            |                                          |               |
            |                |←-- dispatch(actionObj)-←|               |
            |←-----reducer ←-|               dispatch(actionFunction)-←|
                             |                              |
                             |                              |
                             |                             |---------------------------------|
                             |←-- dispatch(waitActionObj)-←|  1. inform the comp to wait     |
                             |                             |  2. raise a axios req           |
                             |←-- dispatch(dataActionObj)-←|  3. recieve data                | 
                             |                             |         or                      |
                             |←-- dispatch(errActionObj)--←|    receive error                |
                                                           |---------------------------------|

    React Routing
    ------------------------------------------------------------------------

        npm install --save react-router react-router-dom

            react-router-dom v5

                    <Link to="targetPath"> Link Text </Link>

                    <BrowserRouter>
                        <Component1 />
                        <Component2 />  //will appear as common page layout

                        <Route path="/home" component="C4" />
                        <Route path="/about" component="C5" />
                        <Route path="/contact" component="C6" />

                    </BrowserRouter>

                    <BrowserRouter>
                        <Component1 />
                        <Component2 />  //will appear as common page layout

                        <Switch>
                            <Route path="/" exact component="C3" />
                            <Route path="/home" component="C4" />
                            <Route path="/about" component="C5" />
                            <Route path="/contact" component="C6" />
                        </Switch>
                    </BrowserRouter>
                    
                    <Redirect to="targetUrl" />

    react-router-dom v6

                    <Link to="targetPath"> Link Text </Link>

                    <BrowserRouter>
                        <Component1 />
                        <Component2 />  //will appear as common page layout

                        <Routes>
                            <Route path="/" element={<C3 />} />
                            <Route path="/home" element={<C4 />} />
                            <Route path="/about" element={<C5 />} />
                            <Route path="/contact" element={<C6 />} />
                        </Routes>
                    </BrowserRouter>
                    
                    <Redirect to="targetUrl" />    
                            




