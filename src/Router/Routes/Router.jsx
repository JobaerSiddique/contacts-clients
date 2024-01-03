import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddContacts from "../../Pages/Contacts/Add Contacts/AddContacts";
import AllContacts from "../../Pages/Contacts/AllContacts/AllContacts";
import Home from "../../Pages/Home/Home";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'addcontacts',
                element:<AddContacts/>
            },
            {
                path:'allcontact',
                element:<AllContacts/>
            },
            
        ]
    }
])
   