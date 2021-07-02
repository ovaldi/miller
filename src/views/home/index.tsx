import React, { FC } from 'react';
import request from 'misc/request';
import McBody from 'components/mc-body';
import McMiller from 'components/mc-miller';

const Home: FC = () => {
  return (
    <McBody>
      <McMiller
        path="/usr"
        onRequest={request}
        onChanged={x => console.log('items:', x)}
      />
    </McBody>
  );
};

export default Home;
