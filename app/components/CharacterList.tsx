'use client';

import {useState } from 'react';
import Image from 'next/image';
import type { Character } from '../types/character';

interface CharacterListProps {
  initialCharacters: Character[];
}

export default function CharacterList({ initialCharacters }: CharacterListProps) {
  const [characters] = useState<Character[]>(initialCharacters);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {characters.map((character, index) => (
        <div key={character.id} className="border rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">{character.name}</h2>
          <Image 
            src={character.image} 
            alt={character.name}
            width={300}
            height={300}
            className="w-full h-auto rounded-md"
            priority={index < 3}
          />
          <div className="mt-2">
            <p><strong>Location:</strong> {character.location.name}</p>
            <p><strong>Origin:</strong> {character.origin.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 