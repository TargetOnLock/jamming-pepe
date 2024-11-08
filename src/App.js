// src/App.js
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTwitter, FaTelegram } from 'react-icons/fa';

const AppContainer = styled.div`
  background: linear-gradient(135deg, #00bfff, #1e90ff); /* Solana colors */
  color: white;
  font-family: Arial, sans-serif;
  padding: 20px; /* Add padding to the container */
  margin: 0; /* Remove margin to fit the screen */
  width: 100%; /* Ensure full width */
`;

const Section = styled.section`
  max-width: 800px; /* Set a maximum width for the sections */
  margin: 20px auto; /* Center the sections with margin */
  padding: 20px; /* Padding for better spacing */
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.3); /* Shadow for depth */
  background: rgba(255, 255, 255, 0.1); /* Light background for contrast */
  text-align: center; /* Center text in the section */
`;

const AboutHeading = styled.h2`
  font-size: 2.8em; /* Larger font size for the heading */
  margin-bottom: 20px; /* Space below the heading */
  color: #1e90ff; /* Color for the heading */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Subtle shadow for the heading */
`;

const AboutText = styled.p`
  font-size: 1.3em; /* Slightly larger font size for the paragraph */
  line-height: 1.8; /* Improved line height for readability */
  color: white; /* Text color */
  max-width: 800px; /* Max width for better readability */
  margin: 0 auto; /* Center the paragraph */
  padding: 0 20px; /* Padding for better spacing */
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center; /* Center the menu on larger screens */
  align-items: center;
  padding: 5px 0; /* Remove horizontal padding */
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    justify-content: space-between; /* Space between logo and hamburger on mobile */
    padding: 10px; /* Add some padding for mobile */
  }
`;

const Logo = styled.img`
  height: 40px; /* Adjust height as needed */
  width: auto; /* Maintain aspect ratio */
`;

const Hamburger = styled.div`
  cursor: pointer;
  font-size: 28px;
  display: none; /* Hidden on larger screens */
  
  @media (max-width: 768px) {
    display: block; /* Show on mobile */
    margin: 0 auto; /* Center the hamburger icon */
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center; /* Center menu items on larger screens */
  list-style: none; 

  @media (max-width: 768px) {
    display: ${props => (props.open ? 'flex' : 'none')}; /* Show or hide based on state */
    flex-direction: column; /* Stack items vertically */
    position: fixed; /* Change to fixed positioning */
    top: 60px; /* Position below the navbar */
    right: 0; /* Align to the right */
    background: rgba(0, 0, 0, 0.9);
    padding: 20px;
    width: 100%; /* Set width to 100% to fit the screen */
    max-width: 300px; /* Optional: Set a max width for the menu */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Optional: Add shadow for depth */
  }
`;

const MenuItem = styled.li`
  margin: 0 15px; /* Adjust margin for list items */
  color: white;
  text-decoration: none; /* No underline by default */
  font-size: 18px;

  a {
    text-decoration: none; /* Ensure no underline on links */
    color: inherit; /* Inherit color from MenuItem */
  }

  &:hover a {
    text-decoration: underline; /* Underline on hover */
  }

  @media (max-width: 768px) {
    margin: 10px 0; 
  }
`;

const SocialIcon = styled.a`
  margin-left: 15px;
  color: white;
  font-size: 24px;

  &:hover {
    color: #1e90ff; /* Change color on hover */
  }
`;

const HeroImage = styled.img`
  width: 100%; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
  max-width: 600px; /* Set a maximum width for better display on web */
`;

const CopyButton = styled.button`
  background: #1e90ff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    background: #00bfff; /* Lighter blue on hover */
  }
`;

const TokenomicsSection = styled(Section)`
  background: rgba(255, 255, 255, 0.1); /* Light background for consistency */
  color: white; /* Text color */
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.5); /* Deeper shadow for depth */
  text-align: center; /* Center text in the section */
`;

const TokenHeading = styled.h2`
  font-size: 2.8em; /* Larger font size for the heading */
  margin-bottom: 20px; /* Space below the heading */
  color: #1e90ff; /* Color for the heading */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Subtle shadow for the heading */
`;

const TokenInfoContainer = styled.div`
  display: flex; /* Use flexbox for layout */
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  margin: 20px 0; /* Margin for spacing */
  padding: 20px; /* Padding for better spacing */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on mobile */
  }
`;

const TokenInfoBox = styled.div`
  background: rgba(255, 255, 255, 0.2); /* Light background for contrast */
  border: 2px solid #1e90ff; /* Border for emphasis */
  border-radius: 10px; /* Rounded corners */
  padding: 15px; /* Padding for better spacing */
  margin: 10px; /* Margin for spacing between boxes */
  width: 150px; /* Fixed width for uniformity */
  height: 100px; /* Fixed height for uniformity */
  display: flex; /* Use flexbox for centering text */
  flex-direction: column; /* Stack text vertically */
  justify-content: center; /* Center text vertically */
  align-items: center; /* Center text horizontally */
  font-size: 1.2em; /* Match font size with the rest of the app */
  text-align: center; /* Center text inside the box */

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    max-width: 300px; /* Optional: Set a max width for the boxes */
  }
`;

const TokenDescription = styled.p`
  font-size: 1.2em; /* Font size for description */
  line-height: 1.6; /* Improved line height for readability */
  max-width: 800px; /* Max width for better readability */
  margin: 20px auto; /* Center the paragraph */
  padding: 0 20px; /* Padding for better spacing */
`;

const RoadmapSection = styled(Section)`
  background: rgba(255, 255, 255, 0.1); /* Light background for consistency */
  color: white; /* Text color */
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.5); /* Deeper shadow for depth */
  text-align: center; /* Center text in the section */
`;

const RoadmapHeading = styled.h2`
  font-size: 2.8em; /* Larger font size for the heading */
  margin-bottom: 20px; /* Space below the heading */
  color: #1e90ff; /* Color for the heading */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Subtle shadow for the heading */
`;

const PhaseContainer = styled.div`
  background: rgba(255, 255, 255, 0.2); /* Light background for contrast */
  border: 2px solid #1e90ff; /* Border for emphasis */
  border-radius: 10px; /* Rounded corners */
  padding: 20px; /* Padding for better spacing */
  margin: 20px; /* Margin for spacing between phases */
  width: 300px; /* Fixed width for uniformity */
  min-height: 180px; /* Minimum height to fit all text comfortably */
  display: flex; /* Use flexbox for centering text */
  flex-direction: column; /* Stack text vertically */
  justify-content: center; /* Center text vertically */
  align-items: center; /* Center text horizontally */
  font-size: 1.2em; /* Match font size with the rest of the app */
  text-align: center; /* Center text inside the box */
`;

const PhaseTitle = styled.h3`
  margin-bottom: 10px; /* Space below the title */
`;

const PhaseDescription = styled.p`
  font-size: 1.2em; /* Font size for phase description */
  line-height: 1.6; /* Improved line height for readability */
`;

const PartnersSection = styled(Section)`
  background: rgba(255, 255, 255, 0.1); /* Light background for consistency */
  color: white; /* Text color */
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.5); /* Deeper shadow for depth */
`;

const PartnersHeading = styled.h2`
  font-size: 2.8em; /* Larger font size for the heading */
  margin-bottom: 20px; /* Space below the heading */
  color: #1e90ff; /* Color for the heading */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Subtle shadow for the heading */
`;

const PartnerList = styled.ul`
  list-style: none; /* Remove default list styling */
  padding: 0; /* Remove padding */
  text-align: center; /* Center the logos */
  display: flex; /* Use flexbox for layout */
  justify-content: center; /* Center the logos */
  flex-wrap: wrap; /* Allow wrapping of logos */
`;

const PartnerItem = styled.li`
  margin: 20px; /* Margin for spacing */
`;

const PartnerLogo = styled.a`
  display: inline-block; /* Make the link an inline block */
  height: 90px; /* Set a fixed height for logos */
  width: auto; /* Maintain aspect ratio */
  max-width: 100%; /* Ensure logos do not exceed their container */
`;

// Animation for falling music notes
const fall = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
`;

const MusicNote = styled.div`
  position: absolute;
  top: -10%;
  font-size: 24px; /* Adjust size as needed */
  animation: ${fall} 5s linear infinite;
  opacity: 0.7;

  /* Randomize the position and animation duration */
  left: ${(props) => props.left}%;
  animation-duration: ${(props) => props.duration}s;
`;

// Create a container for the music notes
const MusicNotesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Allow clicks to pass through */
  overflow: hidden; /* Hide overflow */
`;

// Function to generate random music notes
const generateMusicNotes = (count) => {
  const notes = [];
  for (let i = 0; i < count; i++) {
    const left = Math.random() * 100; // Random left position
    const duration = Math.random() * 5 + 3; // Random duration between 3s and 8s
    notes.push(<MusicNote key={i} left={left} duration={duration}>🎵</MusicNote>);
  }
  return notes;
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const contractAddress = "0xYourContractAddressHere";

  return (
    <AppContainer>
      <MusicNotesContainer>
        {generateMusicNotes(20)} {/* Adjust the number of notes as needed */}
      </MusicNotesContainer>
      <Navbar>
        <Logo src="/logo.png" alt="Jamming Pepe Logo" />
        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>☰</Hamburger>
        <Menu open={menuOpen}>
          <MenuItem><a href="#home">Home</a></MenuItem>
          <MenuItem><a href="#about">About</a></MenuItem>
          <MenuItem><a href="#tokenomics">Tokenomics</a></MenuItem>
          <MenuItem><a href="#roadmap">Roadmap</a></MenuItem>
          <MenuItem><a href="#partners">Partners</a></MenuItem>
          <MenuItem>
            <SocialIcon href="https://x.com/JPEPE_Official" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
          </MenuItem>
          <MenuItem>
            <SocialIcon href="https://t.me/JPEPEOfficial" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </SocialIcon>
          </MenuItem>
        </Menu>
      </Navbar>

      <Section id="home">
        <HeroImage src="/logo.png" alt="Jamming Pepe Hero Logo" />
        <h1>Welcome to Jamming Pepe</h1>
        <CopyButton onClick={() => navigator.clipboard.writeText(contractAddress)}>
          Copy Contract Address
        </CopyButton>
        
        <div style={{ marginTop: '20px' }}>
          <SocialIcon href="https://x.com/JPEPE_Official" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="https://t.me/JPEPEOfficial" target="_blank" rel="noopener noreferrer">
            <FaTelegram />
          </SocialIcon>
        </div>
      </Section>

      <Section id="about">
        <AboutHeading>About Us</AboutHeading>
        <AboutText>
          At Jamming Pepe, we believe in embracing a chill and laid-back lifestyle. 
          In a world that often rushes by, we find solace in the simple moments. 
          Sometimes, it's essential to sit back, take in the beautiful things in life, 
          and just enjoy the moment. Whether it's the sound of your favorite music 
          or the beauty of nature around you, we encourage everyone to appreciate 
          the little things that bring joy and peace to our lives.
        </AboutText>
        <AboutText>
          Our journey began with a shared love for music and the desire to create a 
          community where everyone feels welcome. We believe that music has the power 
          to connect us, to heal us, and to inspire us. It's not just about the beats 
          or the lyrics; it's about the feelings they evoke and the memories they create. 
          We invite you to join us in celebrating life, love, and the magic of music. 
          Together, let's create moments that resonate in our hearts and minds.
        </AboutText>
      </Section>

      <TokenomicsSection id="tokenomics">
        <TokenHeading>Tokenomics</TokenHeading>
        <TokenInfoContainer>
          <TokenInfoBox>
            <strong>Token Name:</strong><br /> Jamming Pepe
          </TokenInfoBox>
          <TokenInfoBox>
            <strong>Ticker:</strong><br /> JPEPE
          </TokenInfoBox>
          <TokenInfoBox>
            <strong>Total Supply:</strong><br /> 1,000,000,000 JPEPE
          </TokenInfoBox>
        </TokenInfoContainer>
        <TokenDescription>
          Jamming Pepe is all about having fun and building a vibrant community of enthusiasts 
          who love the meme space. With a total supply of 1 billion tokens, JPEPE invites you 
          to join us in celebrating the joy of memes and the spirit of togetherness. 
          Let's jam together, share laughs, and create unforgettable moments in the world of 
          Jamming Pepe!
        </TokenDescription>
      </TokenomicsSection>

      <RoadmapSection id="roadmap">
        <RoadmapHeading>Roadmap</RoadmapHeading>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <PhaseContainer>
            <PhaseTitle>🚀 Phase 1: Stealth Launch</PhaseTitle>
            <PhaseDescription>
              We kick things off with a stealth launch on Pump.fun! Get ready to jam with us as we unveil the magic of Jamming Pepe to the world!
            </PhaseDescription>
          </PhaseContainer>
          <PhaseContainer>
            <PhaseTitle>🎉 Phase 2: Meme Mania</PhaseTitle>
            <PhaseDescription>
              Time to spread the word! We'll unleash a wave of memes across social media, bringing the community together to celebrate the joy of Jamming Pepe!
            </PhaseDescription>
          </PhaseContainer>
          <PhaseContainer>
            <PhaseTitle>🎶 Phase 3: Community Jams</PhaseTitle>
            <PhaseDescription>
              Join us for virtual jam sessions! We'll host events where the community can come together, share music, and enjoy the laid-back vibes of Jamming Pepe!
            </PhaseDescription>
          </PhaseContainer>
          <PhaseContainer>
            <PhaseTitle>🎵 Phase 4: Music Bot for Telegram</PhaseTitle>
            <PhaseDescription>
              Introducing our very own music bot for Telegram! Enjoy seamless music sharing and listening experiences with your friends in the community.
            </PhaseDescription>
          </PhaseContainer>
          <PhaseContainer>
            <PhaseTitle>🎤 Phase 5: Music NFT Social Media DApp</PhaseTitle>
            <PhaseDescription>
              Launch a music NFT social media DApp that allows users to create, share, and trade music NFTs. This platform will provide utility for our community by enabling artists to monetize their work and fans to engage with exclusive content.
            </PhaseDescription>
          </PhaseContainer>
          <PhaseContainer>
            <PhaseTitle>🌟 Phase 6: Partnerships & Collaborations</PhaseTitle>
            <PhaseDescription>
              We’ll team up with other meme projects and influencers to expand our reach and create even more fun experiences for our community!
            </PhaseDescription>
          </PhaseContainer>
          <PhaseContainer>
            <PhaseTitle>🏆 Phase 7: Meme Contests</PhaseTitle>
            <PhaseDescription>
              Get your creative juices flowing! We'll host meme contests where the community can showcase their best Jamming Pepe memes for a chance to win awesome prizes!
            </PhaseDescription>
          </PhaseContainer>
          <PhaseContainer>
            <PhaseTitle>🎊 Phase 8: The Great Pepe Festival</PhaseTitle>
            <PhaseDescription>
              Celebrate the success of Jamming Pepe with a grand virtual festival! Expect music, games, and lots of fun as we come together to jam and enjoy the community we've built!
            </PhaseDescription>
          </PhaseContainer>
        </div>
      </RoadmapSection>

      <PartnersSection id="partners">
        <PartnersHeading>Partners & Listings</PartnersHeading>
        <h3>Current Listings:</h3>
        <PartnerList>
          <PartnerItem>
            <PartnerLogo href="https://pump.fun" target="_blank" rel="noopener noreferrer">
              <img src="/pumpfun.png" alt="Pump.fun Logo" style={{ height: '100%', width: 'auto' }} />
            </PartnerLogo>
          </PartnerItem>
          <PartnerItem>
            <PartnerLogo href="https://solscan.io" target="_blank" rel="noopener noreferrer">
              <img src="/solana.png" alt="Solscan Logo" style={{ height: '100%', width: 'auto' }} />
            </PartnerLogo>
          </PartnerItem>
        </PartnerList>

        <h3>Upcoming Listings:</h3>
        <PartnerList>
          <PartnerItem>
            <PartnerLogo href="https://raydium.io" target="_blank" rel="noopener noreferrer">
              <img src="/raydium.png" alt="Raydium Logo" style={{ height: '100%', width: 'auto' }} />
            </PartnerLogo>
          </PartnerItem>
          <PartnerItem>
            <PartnerLogo href="https://jupiter.exchange" target="_blank" rel="noopener noreferrer">
              <img src="/jupiter.png" alt="Jupiter Logo" style={{ height: '100%', width: 'auto' }} />
            </PartnerLogo>
          </PartnerItem>
          <PartnerItem>
            <PartnerLogo href="https://birdeye.so" target="_blank" rel="noopener noreferrer">
              <img src="/birdeye.png" alt="Birdeye Logo" style={{ height: '100%', width: 'auto' }} />
            </PartnerLogo>
          </PartnerItem>
          <PartnerItem>
            <PartnerLogo href="https://dextools.io" target="_blank" rel="noopener noreferrer">
              <img src="/dextools.png" alt="Dextools Logo" style={{ height: '100%', width: 'auto' }} />
            </PartnerLogo>
          </PartnerItem>
          <PartnerItem>
            <PartnerLogo href="https://dexscreener.com" target="_blank" rel="noopener noreferrer">
              <img src="/dexscreener.png" alt="Dexscreener Logo" style={{ height: '100%', width: 'auto' }} />
            </PartnerLogo>
          </PartnerItem>
        </PartnerList>

        <h3>Future Listings:</h3>
        <PartnerList>
          <PartnerItem>
            <PartnerLogo href="https://www.coingecko.com" target="_blank" rel="noopener noreferrer">
              <img src="/coingecko.png" alt="CoinGecko Logo" style={{ height: '100%', width: 'auto' }} />
            </PartnerLogo>
          </PartnerItem>
          <PartnerItem>
            <PartnerLogo href="https://coinmarketcap.com" target="_blank" rel="noopener noreferrer">
              <img src="/coinmarketcap.png" alt="CoinMarketCap Logo" style={{ height: '100%', width: 'auto' }} />
            </PartnerLogo>
          </PartnerItem>
        </PartnerList>
      </PartnersSection>
    </AppContainer>
  );
}

export default App;