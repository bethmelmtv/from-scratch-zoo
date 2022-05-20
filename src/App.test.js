import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('when i click addd cat, there are now two cats instead of the single cat in the default state', () => {
  render(<App />);
  const catEmojisBefore = screen.queryAllByText(/🐈/i);
  const initialNumberofCats = catEmojisBefore.length;

  const addCatButton = screen.getByText(/Add Cat/i); //i is redge ex, which means it only finds the words/ emojis, regardless of capitalization
  fireEvent.click(addCatButton);
  fireEvent.click(addCatButton);

  const catEmojisAfter = screen.queryAllByText(/🐈/i);
  expect(catEmojisAfter.length).toBe(initialNumberofCats + 2);
});

test('when i click on add dog, there are now two dogs instead of the single dog in the defautl state ', () => {
  render(<App />);
  const addDogEmojisBefore = screen.queryAllByText(/🐕/i);
  const initialNumberofDogs = addDogEmojisBefore.length;

  const addDogButton = screen.getByText(/Add Dog/i);
  fireEvent.click(addDogButton);
  fireEvent.click(addDogButton);

  const dogEmojisAfter = screen.queryAllByText(/🐕/i);
  expect(dogEmojisAfter.length).toBe(initialNumberofDogs + 2);
});
