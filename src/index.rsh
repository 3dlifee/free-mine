"reach 0.1";

const [isGameNFT, NFT0, NFT1] = makeEnum(2);
const [isOutcome, Rare, Epic] = makeEnum(2);

const winner = (playerAlice) => playerAlice;

assert(winner(NFT0) == Rare);
assert(winner(NFT1) == Epic);

// Alice is the player of the game
// Gamewallet is the address where the NFT will be send

const Player = {
  // Gets two parameters getTrade amount of NFT seeOutcome the NFT that will received
  //input
  getTrade: Fun([], UInt),
  //output
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  // interface for both player and game Wallet
  const Alice = Participant("Alice", {
    ...Player,
    // Specify NFT ID
    getAmnTok: Fun([], Tuple(Token, UInt)),
    // time delta (blocks/rounds)
    deadline: UInt,
  });

  //Gamewallet is the address where the NFT are fund
  const GameWallet = Participant("GameWallet", {
    ...Player,
    //Specify NFT ID to be accepted
    acceptNFT: Fun([Token, UInt], Null),
  });

  init();

  const informTimeout = () => {
    each([Alice, GameWallet], () => {
      interact.informTimeout();
    });
  };

  // block of code that only Alice executes.
  Alice.only(() => {
    //Indicating the interaction of the token ID and amount with the frontend
    const [tokenA, amtA] = declassify(interact.getAmnTok());
    //Alice binds the value with the frontend trade value
    const playerAlice = declassify(interact.getTrade());
    const deadline = declassify(interact.deadline);
  });
  // Publish initiates a consensus transfer publication and show the values to the gamewallet participant
  Alice.publish(tokenA, amtA, playerAlice, deadline);

  GameWallet.only(() => {
    // If the GameWallet accept the terms is ready to send the NFT
    interact.acceptNFT(tokenA, amtA);
  });
  commit();
  // Indicates that the transaction is ready to Go
  GameWallet.pay([[amtA, tokenA]])
    // Indicates that the transaction has reached its deadline.
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

  // The player wins the NFT
  const outcome = winner(playerAlice);

  // Pays the Player and the NFT is transfer.
  transfer(amtA, tokenA).to(Alice);

  commit();

  each([Alice, GameWallet], () => {
    interact.seeOutcome(outcome);
  });
});
