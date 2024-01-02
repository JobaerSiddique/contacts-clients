import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddContacts from "../../Pages/Contacts/Add Contacts/AddContacts";
import AllContacts from "../../Pages/Contacts/AllContacts/AllContacts";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
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
   