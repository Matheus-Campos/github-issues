import { StackNavigator, TabNavigator } from 'react-navigation';
import { metrics } from 'styles';

// Pages
import Repositories from 'pages/repositories';
import OpenIssues from 'pages/openIssues';
import ClosedIssues from 'pages/closedIssues';
import AllIssues from 'pages/allIssues';

const Routes = StackNavigator({
  Repositories: { screen: Repositories },
  Issues: {
    screen: TabNavigator({
      Open: { screen: OpenIssues },
      Closed: { screen: ClosedIssues },
      All: { screen: AllIssues },
    }),
  },
}, {
  initialRouteName: 'Repositories',
  navigationOptions: {
    headerStyle: {
      padding: metrics.basePadding,
    },
  },
});

export default Routes;
