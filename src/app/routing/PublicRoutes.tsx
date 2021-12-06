import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { FallbackView } from '../common/components/fallback-view/FallbackView';
import { DefaultRouteConfig } from '../common/models/Common';


/**
 *All the public routes goes here
 Fall back view component to take card of the page before it renders
 *
 * @export
 * @returns
 */
export function PublicRoutes() {

    const Dashboard = lazy(() => import('../containers/dashboard/Dashboard'))
    const Topics = lazy(() => import('../containers/topics/Topics'))
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

/** Const Route Links */
export function defaultRouteConfig(): DefaultRouteConfig[] {
    return [
        {
            id: 'menu-1',
            label: 'Dashboard',
            link: '/dashboard',
            activate: 'txt-light-blue',
            hover: 'txt-light-blue',
        },
        {
            id: 'menu-2',
            label: 'Topics',
            link: '/topics',
            activate: 'txt-light-blue',
            hover: 'txt-light-blue',
        },
        {
            id: 'menu-3',
            label: 'Interview',
            link: '/interviews',
            activate: 'txt-light-blue',
            hover: 'txt-light-blue',
        },
        {
            id: 'menu-4',
            label: 'Assignments',
            link: '/assignments',
            activate: 'txt-light-blue',
            hover: 'txt-light-blue',
        }
    ]
}