import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const Dashboard = ({secretData}) => (
  <Card className="container">
    <CardTitle
      title="Welcome to your base dashboard!"
      subtitle="From here head over to your todo list and start adding items."
    />

  	{/* below is jsut a quick way to let users know they are authenticated */}
    {/* secretData && <CardText style={{ fontSize: '16px', color: '#36f08a' }}>{secretData}</CardText> */}
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;