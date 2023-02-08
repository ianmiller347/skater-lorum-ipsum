import { useState } from 'react';
import Head from 'next/head';
import ipsumWords from '../data/ipsumWords';

export default function Home() {
  const [paragraphCount, setParagraphCount] = useState(1);
  const [wordCount, setWordCount] = useState(ipsumWords.length);

  // Creates a paragraph array with word limit and random words
  const randomParagraph = () =>
    ipsumWords
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .slice(0, wordCount)
      .join(' ');

  // Generates lorum ipsum paragraph elements
  // Array.from(Array(paragraphCount)) creates an empty iterable array
  const generate = Array.from(Array(paragraphCount)).map((par, idx) => {
    return (
      <p className="text-white" key={idx}>
        {randomParagraph().toLowerCase()}
      </p>
    );
  });

  return (
    <div className="bg-[#282a36]">
      <div className="container mx-auto ">
        <Head>
          <title>Skater Lorem Ipsum Generator</title>
          <meta
            name="description"
            content="Skateboarding lorem ipsum text generator"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="text-7xl text-center text-white">
            Skater Lorem Ipsum Generator
          </h1>

          <div className="py-6">
            <div className="text-white">
              {paragraphCount}{' '}
              {paragraphCount <= 1 ? 'paragraph' : 'paragraphs'}
            </div>
            <input
              type="range"
              min="1"
              max="50"
              onChange={(e) => setParagraphCount(Number(e.target.value))}
              value={paragraphCount}
              className="w-64"
            ></input>

            <div className="text-white">
              {wordCount} {wordCount <= 1 ? 'word' : 'words'}
            </div>
            <input
              type="range"
              min="1"
              max={ipsumWords.length}
              onChange={(e) => setWordCount(Number(e.target.value))}
              value={wordCount}
              className="w-64"
            ></input>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            {generate}
          </div>
        </main>
      </div>
    </div>
  );
}
