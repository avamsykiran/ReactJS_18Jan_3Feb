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




