import { useState } from 'react';
import * as c from './App.styles'
import { Item } from './types/item'
import { ListItem } from './components/ListItem';
import { AddArea } from './components/ListItem/AddArea'
import { createVariableDeclarationList } from 'typescript';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: "Estudar React.js", done: false },

  ]);

const handleAddText = (taskName: string)=>{
  let newList = [...list]; /*fiz o clone da lista original */
  newList.push({           /*adicionei o novo item */
    id: list.length + 1,
    name: taskName,
    done: false
  });
  setList(newList);        /* peguei o clone atualizado e coloquei na array original */

}


  return(
    <c.Container>
      <c.Area>
        <c.Header>Lista de Tarefas</c.Header>

        <AddArea onEnter = {handleAddText} />

        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}
        
      </c.Area>
    </c.Container>
  );
}

export default App;