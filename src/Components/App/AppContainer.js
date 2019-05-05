import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import { useQuery } from 'react-apollo-hooks';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from '../../Styles/GlobalStyles';
import AppRouter from '../Routes';
import Theme from '../../Styles/Theme';
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
          <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
        </Wrapper>
      </ThemeProvider>
    )
}

export default AppContainer;
