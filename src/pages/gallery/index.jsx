/* eslint-disable @next/next/no-img-element */
import React from 'react';
import MainLayout from '../../layouts/main';
import WorkHeader from '../../components/Work-header';
import WorkFourColumn from '../../components/Work-Four-Column';

const Work3 = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3');
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        center
        title={{
          first: 'Captivating Spaces:',
          second: 'Explore Bisabo Gallery',
        }}
        // title = "text",
        content="Discover the Artistry of Our Exquisite Apartments"
      />
      <WorkFourColumn />
    </MainLayout>
  );
};

export default Work3;
