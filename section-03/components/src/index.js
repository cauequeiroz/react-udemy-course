import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => (
  <div className="ui container comments">
  
    <ApprovalCard>
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.name.firstName()}
        date="Today at 5:00PM"
        comment="Nice post, dude!"
      />
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.name.firstName()}
        date="Today at 3:02PM"
        comment="You rocks!!!"
      />
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.name.firstName()}
        date="Yesterday at 8:00AM"
        comment="Yeah, kinda fun."
      />
    </ApprovalCard>

  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));