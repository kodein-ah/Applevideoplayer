import React from 'react';
import ProfileImage from './components/ProfileImage';
import AdContainer from './components/AdContainer'; // Import AdContainer
import VideoPlayerAd from './components/VideoPlayerAd'; // Import VideoPlayerAd

const App = () => {
  return (
    <div className="App">
      <main>
        <ProfileImage src="https://raw.githubusercontent.com/kodein-ah/imahe/refs/heads/main/logo-apple-icon-information-apple-logo-png-cb2a995ce5ee2b4049f1daa647471a29.png" alt="Profile" />
        <h1>Apple Video Player</h1>

        {/* Menambahkan VideoPlayerAd */}
        <VideoPlayerAd 
          thumbnail="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAB17ChYm2ZsWed2hAMGKQuREjSUZd5OgCxckDNklBilDxfyk7nvQpvbVT-QKdnsBwKc_TlSbKarmBQnCb4dDT1vR31-4a69E1-Xefr2_cWKND3zCReyxumI_PClKmnJocmLFQFakt8oVesXel7XAMbH95ErwqAUs57Xd4ZEw8ewT6qPePoDCzUqqr09mj/w400-h228/images%20(2).png"
          directLink="https://www.profitablecpmrate.com/s99hsyay2?key=e0ebf2ace4d775d12331a4c1440a2acb"
        />

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