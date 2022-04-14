import './App.css';
import { Div } from './styles';
import video from "./example.mp4"

import { useState } from 'react';

import { Repos } from './components/Repos/Repos';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {

const [repo, setRepo] = useState([])

  return (
    <div className="App">
      <header className="App-header">

        <SearchBar repo={repo} setRepo={setRepo}/>
        
        {repo.length > 0 ? (
          <>
            {repo.map((rep, index) => {
              return <Repos key={index} repo={rep}/>
            })}
          </>
          ) : (
            <Div>
              <h4>Como pesquisar:</h4>
              <video width="320" height="240" controls >
                <source src={video} type="video/mp4" />
              </video>
              <span>nome-do-usuário/repositório</span>
            </Div>
          )}
      </header>
    </div>
  );
}

export default App;
