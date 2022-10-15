import logo from '../logo.svg';
import '../App.css';
import Saludar from '../components/Saludar';
import { useState, useEffect } from 'react';
import FadeInOut from '../components/FadeInOut';

const Home = () => {
    const extraStyles = {}
    const [value, setValue] = useState("")
    const [name, newName] = useState("")
    const [show, setShow] = useState(false)
    useEffect(() => {
        console.log('APP1');
        let timer1 = 0
        clearTimeout(timer1)

        return () => {
            console.log('APP2');
            timer1 = setTimeout(() => {
                setShow(false)
            }, 2000)
        }
    }, [name])

    const onChange = (e) => {
        setValue(e.target.value)
    }
    const enterEvent = (e) => {
        if (e.key === 'Enter') {
            console.log(e.key);
            newName("Hola " + value)
            setShow(true)
        }
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Escribe tu nombre</h1>
                <input type="text" value={value} onChange={onChange} onKeyPress={enterEvent}></input>
                <div className="container">
                    <FadeInOut show={show} duration={2000} style={extraStyles}>
                        <Saludar name={name} />
                    </FadeInOut>
                </div>

            </header>
        </div>
    );
}

export default Home;
