import React from 'react';
import TweetCard from './tweetCard';

function App() {
  const cards = [
    {
      name: 'Elon Musk',
      username: '@elonmusk',
      image: './img/elon-musk.png',
      timestamp: 'Aug 18',
      tweetText: 'Although there are some bad things in the world, remember that there are many good things too.',
      style: 'card-dark',
    },
    {
      name: 'Bill Gates',
      username: '@BillGates',
      image: './img/bill-gates.png',
      timestamp: 'Jul 11',
      tweetText: 'The risks of AI are real, and they can seem overwhelming—but the best reason to believe we can manage them is that we’ve done it before. History shows it’s possible to solve challenges created by new technologies, and if governments and the private sector do their parts, we can do it again.',
      style: 'card-dim',
    },
    {
      name: 'Jeff Bezos',
      username: '@JeffBezos',
      image: './img/jeff-bezos.png',
      timestamp: 'Jun 16',
      tweetText: 'Congratulations to <a href="https://twitter.com/elonmusk">@ElonMusk</a> and the <a href="https://twitter.com/SpaceX">@SpaceX</a> team on their successful Inspiration4 launch last night. Another step towards a future where space is accessible to all of us.',
      style: 'card-white',
    }
  ];

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {cards.map((card, index) => (
            <TweetCard
              key={index}
              name={card.name}
              username={card.username}
              image={card.image}
              timestamp={card.timestamp}
              tweetText={card.tweetText}
              style={card.style}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;