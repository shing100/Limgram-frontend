import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import { useQuery } from 'react-apollo-hooks';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from '../../Styles/GlobalStyles';
import AppRouter from '../Routes';
import Theme from '../../Styles/Theme';
import { QUERY } from './AppQueris';
import Footer from "../Footer";
import Header from "../Header";

const Wrapper = styled.div `
    margin: 0 auto;
    max-width: ${props => props.theme.maxWidth};
    width: 100%;
`;

const AppContainer = () => {
  
  const { data: { isLoggedIn } } = useQuery(QUERY)

    return (
      <ThemeProvider theme={Theme}>
        <>
          <GlobalStyles />
          <Router>
            <>
              {isLoggedIn && <Header />}
              <Wrapper>
                <AppRouter isLoggedIn={isLoggedIn} />
                <Footer />
              </Wrapper>
            </>
          </Router>
          <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
        </>
      </ThemeProvider>
    )
}

export default AppContainer;
