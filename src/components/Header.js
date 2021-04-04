function Header() {
    
    let headingMessage = 'Hello React World';
    
    return (
        <header>
        <h1>{headingMessage + '....'}</h1>
        <h2>From Custom Component</h2>
      </header>
    );
}

export default Header;