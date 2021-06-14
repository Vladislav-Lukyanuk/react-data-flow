import React from 'react';
import {Counter} from "./components/counter";
import {NoMemoComponent} from "./components/noMemoComponent/NoMemoComponent";

function App() {
  return (
      <Counter simpleSlot={
        <NoMemoComponent metaMessage={'should be rendered once (NoMemo, but its slot)'} />
      }>
        <NoMemoComponent metaMessage={'should be rendered once (NoMemo, but its children)'} />
      </Counter>
  );
}

export default App;
