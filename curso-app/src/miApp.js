import React from 'react';
import NavBarfc from './Components/NavBar';
import ItemListContainer from './Components/itemListContainer';

function App() {
    return (
        <>
        <NavBarfc></NavBarfc>
        <ItemListContainer Titulo="Titulo enviado por props " />
        </>
    );
}
export default App;
