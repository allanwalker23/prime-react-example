import logo from './logo.png';
import './App.css';
import {InputText} from 'primereact/inputtext';
import{Toast} from 'primereact/toast';
import {Button} from 'primereact/button';
import "primereact/resources/themes/md-dark-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { useState,useRef  } from 'react';

function App() {
  const [text, setText]= useState('');
  const toastRef = useRef();

  const onButtonClick = () =>{
    if(text){
      toastRef.current.show({severity: 'info', summary: 'Success', detail: text})
    }else{
      toastRef.current.show({severity: 'error', summary: 'Erro', detail: 'Valor obrigatório'})
    }
  }
  return (
    <div className="App p-input-filled">
      <Toast ref={toastRef}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <span className="p-float-label">
        <InputText id="input_txt" value={text} onChange={e=>setText(e.target.value)}/>
        <label htmlFor="input_txt" className="p-component">Texto</label>
        </span>
        <br/>
        <Button type="button" label="Enviar" icon="pi pi-check" onClick={onButtonClick}/>
      </header>
    </div>
  );
}

export default App;
