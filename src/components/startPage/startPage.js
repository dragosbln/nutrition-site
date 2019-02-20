import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import Query from '../../containters/query/query'
import SharePage from '../share/share'
import Form from '../../containters/form/form'
import LandingHeader from '../landing-header/landing-header'



const startPage = (props) => (
    <Switch>
        <Route path={props.match.url + '/join'} render={() => <Query submitQuery={props.submitQuery} />} />
        <Route path={props.match.url + '/contact'} render={() => <Form submitAll={props.submitAll} />} />
        <Route path={props.match.url + '/share'} component={SharePage} />
        <Route path={props.match.url + '/'} component={LandingHeader} />
    </Switch>
)

export default withRouter(startPage);