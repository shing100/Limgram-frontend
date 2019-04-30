import React from 'react';
import { ThemeProvider } from "styled-components";
import GlobalStyles from '../../Styles/GlobalStyles';
import Theme from '../../Styles/Theme';
import AppRouter from '../Router';
import { useQuery } from 'react-apollo-hooks';
import { QUERY } from './AppQueris';

const AppContainer = () => {
  
  const { data: { isLoggedIn } } = useQuery(QUERY)

    return (
      <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <AppRouter isLoggedIn={isLoggedIn} />
      </>
      </ThemeProvider>
    )
}

export default AppContainer;
