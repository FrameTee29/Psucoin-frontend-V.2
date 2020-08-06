import React from "react";
import App from "next/app";
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store';
import 'antd/dist/antd.css';
import { ThemeProvider } from 'styled-components';

class MyApp extends App{
  render() {
    const { Component , pageProps } = this.props
    return (
      <Provider store={store}>
         <Component {...pageProps}></Component>
      </Provider>
    )
  }
}

const makestore = () => store;
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp);