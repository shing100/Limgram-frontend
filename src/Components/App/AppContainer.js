import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from '../../Styles/GlobalStyles';
import Theme from '../../Styles/Theme';
import AppRouter from '../Routes';
import { useQuery } from 'react-apollo-hooks';
import { QUERY } from './AppQueris';
import Footer from "../Footer";

const Wrapper = styled.div `
    margin: 0 auto;
    max-width: 935px;
    width: 100%;
`;

const AppContainer = () => {
  
  const { data: { isLoggedIn } } = useQuery(QUERY)

    return (
      <ThemeProvider theme={Theme}>
        <Wrapper>
          <GlobalStyles />
          <AppRouter isLoggedIn={isLoggedIn} />
          <Footer />
        </Wrapper>
      </ThemeProvider>
    )
}

export default AppContainer;
