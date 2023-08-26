'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputValue}`);
  };
  return (
    <div>
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="text-black"
          type="text"
          placeholder="Type your name..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Predict Data</button>
      </form>
    </div>
  );
}
