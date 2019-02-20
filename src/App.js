import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Contact from './containters/contact/contact'
import Start from './components/startPage/startPage'
import axios from 'axios'
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Layout from './components/layout/layout'
import './App.css'


class App extends Component {
  state = {
    currentPath: '/',
    contactData: null,
    query: null
  }

  updateCurrentPath = (newPath) => {
    this.setState({
      currentPath: newPath
    });
  }

  submitQuery = (mData) => {
    this.setState({ query: mData }, () => { console.log(this.state) });

  }

  submitAll = (data) => {
    const updatedState = {
      ...this.state,
      contactData: data
    }
    this.setState(updatedState, () => {
      axios.post('https://nutritionstartup.firebaseio.com/submissions.json', this.state)
        .then((response) => { console.log(response) })
        .catch((err) => { console.log(err) });
    });

  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Navbar currentPath={this.state.currentPath} updatePath={this.updateCurrentPath} />
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={450}
                classNames="fade">
                <Switch location={location}>
                  <Route path='/start' render={() => <Start submitAll={this.submitAll} submitQuery={this.submitQuery} />} />
                  <Route path='/contact' component={Contact} />
                  <Route path='/about' component={About} />
                  <Route path='/' exact render={() => <Redirect to='/start' />} />

                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </Layout>
      </div>
    );
  }
}

export default App;
