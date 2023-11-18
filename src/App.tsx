import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "./modules/Layout/Layout.tsx";
import Catalog from "./modules/Catalog/Catalog.tsx";
import Form from "./modules/Form/Form.tsx";
import Store from "./store/store.ts";

const App: React.FC = () => {

    useEffect(() => {
        Store.fetch()
    }, []);

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Catalog/>}/>
                <Route path='form' element={<Form/>}/>
                <Route path='*' element={<Navigate to="/" replace/>}/>
            </Route>
        </Routes>
    )
}

export default App;