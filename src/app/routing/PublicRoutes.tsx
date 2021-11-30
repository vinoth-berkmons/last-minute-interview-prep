import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { FallbackView } from '../common/fallback-view/FallbackView';

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