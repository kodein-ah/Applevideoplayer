import React from 'react';
import LinkButton from './components/LinkButton';
import ProfileImage from './components/ProfileImage';
import AdContainer from './components/AdContainer'; 
import Images from './assets/yes.jpg';

const App = () => {
  return (
    <div className="App">
      <main>
        <ProfileImage src={Images} alt="Profile" />
        <h1>Apple Link Bio</h1>
        <LinkButton url="https://www.profitablecpmrate.com/ipqxesfjj?key=69bf0e1d7d2296a296c2cb3f36698cc7" text="Play video" />
        <LinkButton url="https://www.profitablecpmrate.com/s99hsyay2?key=e0ebf2ace4d775d12331a4c1440a2acb" text="Downloads" />

        {/* Menambahkan iklan native */}
        <AdContainer
          adType="native"
          adScript="//pl25348502.profitablecpmrate.com/9d95eb22509185ecb3fac091c67a5692/invoke.js"
        />

        {/* Menambahkan iklan pop-under */}
        <AdContainer
          adType="pop-under"
          adScript="//pl25348239.profitablecpmrate.com/64/97/29/64972932ab389b5d472af3382f785c79.js"
          hidden={true} // Menyembunyikan iklan pop-under
        />

        {/* Menambahkan DirectLink yang disembunyikan */}
        <iframe
          src="https://www.profitablecpmrate.com/s99hsyay2?key=e0ebf2ace4d775d12331a4c1440a2acb"
          style={{ display: 'none' }}
          title="profitablecpmrate-directlink"
        ></iframe>
      </main>
    </div>
  );
};

export default App;