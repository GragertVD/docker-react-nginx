import { Header } from './components/Header';
import styled from 'styled-components';
import { Board } from './components/Board';
import { BoardsProvider } from './Context/Context';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './them';
import React, { useState } from 'react';
import { useResize } from './hooks/useResize';
import { TypeSetState } from './interface';


const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;


interface IContextTheme {
  theme: "light" | "dark";
  setTheme: TypeSetState<"light" | "dark">;
}

export const ThemeContext = React.createContext<IContextTheme>({ theme: "light", setTheme: () => { } });

function App() {
  const widthWindow = useResize();

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [StateShowSideBar, setStateShowSideBar] = useState<'show' | 'hiden'>(!widthWindow.isScreenMobileL ? 'hiden' : 'show');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <BoardsProvider>
          <AppContainer className="App">
            <Header StateShowSideBar={StateShowSideBar} setStateShowSideBar={setStateShowSideBar} />
            <Board {...{ StateShowSideBar, setStateShowSideBar }} />
          </AppContainer>
        </BoardsProvider>
      </ThemeProvider>
    </ThemeContext.Provider>

  );
}

export default App;
