import React from 'react'
import {withRouter, Switch, Route} from 'react-router-dom'
import AboutMenu from './aboutMenu/aboutMenu'
import Statement from './statement/statement'

const  about = (props) => (
    <Switch>
        <Route path={props.match.url + '/'} exact component={AboutMenu} />
        <Route path={props.match.url + '/why'} render={() => <Statement  />} />
        <Route path={props.match.url + '/how'} render={() => <Statement  />} />
        <Route path={props.match.url + '/what'} render={() => <Statement  />} />
        <Route path={props.match.url + '/facts'} render={() => <Statement  />} />
        
    </Switch>
);

export default withRouter(about);