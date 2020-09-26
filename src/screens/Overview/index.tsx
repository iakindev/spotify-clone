import React from 'react';
import '../../styles/App.scss';
import '../../styles/Overview.scss';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import TopbarOverview from '../../components/TopbarOverview/TopbarOverview';
import HeroOverview from '../../components/HeroOverview/HeroOverview';
import OverviewPage from '../../components/OverviewPage/OverviewPage';
import Account from './Account';
import Edit from './Edit';
import Sidebar from './Sidebar';

const Overview = () => {
  const match = useRouteMatch();

  return (
    <div className="overview-background" style={{ height: '100%' }}>
      <TopbarOverview />
      <div className="overview-wrapper">
        <HeroOverview
          HeroTitle="Hello!"
          HeroBody="Want to edit your profile? Find an old playlist? Put off work for a while? You can do it all here."
        />
        <div className="overview-page-wrapper">
          <Sidebar />
          <OverviewPage>
            <Switch>
              <Route path={`${match.path}/account`}>
                <Account />
              </Route>
              <Route path={`${match.path}/edit`}>
                <Edit />
              </Route>
              <Route path={`${match.path}/`}>
                <Redirect to={`${match.url}/account`} />
              </Route>
            </Switch>
          </OverviewPage>
          {/* TODO: FOOTER */}
        </div>
      </div>
    </div>
  );
};

export default Overview;