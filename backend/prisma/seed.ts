import { PrismaClient, GameType, Difficulty } from '../src/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  // Create some House of Games game types
  const games = await Promise.all([
    prisma.game.create({
      data: {
        name: 'Answer Smash',
        type: GameType.ANSWER_SMASH,
        description: 'Players must combine the answer to a picture with the answer to a question',
        rules: 'Look at the picture and listen to the question. The answer is both answers smashed together.',
        round: 5,
      },
    }),
    prisma.game.create({
      data: {
        name: 'Rhyme Time',
        type: GameType.RHYME_TIME,
        description: 'Two clues are given whose answers rhyme with each other',
        rules: 'Find the two answers that rhyme based on the clues provided.',
        round: 1,
      },
    }),
    prisma.game.create({
      data: {
        name: "The Answer's In The Question",
        type: GameType.ANSWERS_IN_QUESTION,
        description: 'The answer is an anagram of the highlighted letters in the question',
        rules: 'Use the blue highlighted letters to form an anagram that answers the question.',
        round: 2,
      },
    }),
    prisma.game.create({
      data: {
        name: 'Sorry, Wrong Number',
        type: GameType.SORRY_WRONG_NUMBER,
        description: 'Modify a number in a well-known answer according to the instruction',
        rules: 'Take the original number and perform the mathematical operation given.',
        round: 3,
      },
    }),
    prisma.game.create({
      data: {
        name: 'Internet History',
        type: GameType.INTERNET_HISTORY,
        description: 'Identify historical figures from fictional social media hashtags',
        rules: 'Look at the hashtags and guess which historical figure they relate to.',
        round: 4,
      },
    }),
  ])

  // Create some sample questions
  await Promise.all([
    // Answer Smash questions
    prisma.question.create({
      data: {
        gameId: games[0].id,
        content: 'Picture: A cat + Question: What you sleep in?',
        answer: 'CATBED',
        explanation: 'CAT (from picture) + BED (what you sleep in) = CATBED',
        difficulty: Difficulty.EASY,
        category: 'General',
        metadata: JSON.stringify({ picture: 'cat.jpg', question: 'What you sleep in?' }),
      },
    }),
    // Rhyme Time questions
    prisma.question.create({
      data: {
        gameId: games[1].id,
        content: 'A large African mammal with tusks, and a communication device',
        answer: 'ELEPHANT TELEPHONE',
        explanation: 'Elephant rhymes with telephone',
        difficulty: Difficulty.MEDIUM,
        category: 'Animals & Technology',
      },
    }),
    // The Answer's In The Question
    prisma.question.create({
      data: {
        gameId: games[2].id,
        content: 'Which PLANET orbits closest to the SUN?',
        answer: 'NEPTUNE',
        hints: JSON.stringify(['Use letters P-L-A-N-E-T and S-U-N', 'Rearrange: PLANETSUN']),
        explanation: 'PLANET + SUN rearranged spells NEPTUNE (though Mercury is actually closest!)',
        difficulty: Difficulty.HARD,
        category: 'Space',
        metadata: JSON.stringify({ highlightedLetters: 'PLANETSUN' }),
      },
    }),
    // Sorry, Wrong Number
    prisma.question.create({
      data: {
        gameId: games[3].id,
        content: 'MULTIPLY BY 2: The number of days in a week',
        answer: '14 DAYS',
        explanation: '7 days in a week × 2 = 14 days',
        difficulty: Difficulty.EASY,
        category: 'Mathematics',
        metadata: JSON.stringify({ operation: 'MULTIPLY BY 2', originalAnswer: '7 days' }),
      },
    }),
    // Internet History
    prisma.question.create({
      data: {
        gameId: games[4].id,
        content: '#RoundTable #Camelot #ExcaliburSword #NobleKnights',
        answer: 'KING ARTHUR',
        explanation: 'The hashtags all relate to the legendary King Arthur',
        difficulty: Difficulty.MEDIUM,
        category: 'History & Legend',
        metadata: JSON.stringify({ 
          hashtags: ['#RoundTable', '#Camelot', '#ExcaliburSword', '#NobleKnights'] 
        }),
      },
    }),
  ])

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })