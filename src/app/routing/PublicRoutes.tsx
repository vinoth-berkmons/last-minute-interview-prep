import React, { Fragment, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FallbackView } from '../common/fallback-view/FallbackView';

// import { MasterLayout } from '../../layout/MasterLayout';
// import { Dashboard } from '../modules/dashboard/Dashboard';
// import Topics from '../modules/topics/Topics';

export function PublicRoutes() {

    const Dashboard = lazy(() => import('../modules/dashboard/Dashboard'))
    const Topics = lazy(() => import('../modules/topics/Topics'))
    return (
        <Suspense fallback={<FallbackView />}>
            <Switch>
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/topics' component={Topics} />
                <Redirect exact from='/' to='/dashboard' />
            </Switch>
        </Suspense>
    )
}