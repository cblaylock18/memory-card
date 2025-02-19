# Memory Card (Pokémon Edition)

A memory game built with React. Players click through Pokémon cards and score points by selecting different Pokémon without repeating any previously chosen card. This project was built as part of [The Odin Project](https://www.theodinproject.com/) curriculum to practice React fundamentals, state management, and dynamic data fetching (PokéAPI).

## Table of Contents
1. [Features](#features)
2. [Live Demo](#live-demo)
3. [Technologies Used](#technologies-used)
4. [Usage](#usage)
5. [Future Improvements](#future-improvements)
6. [Contributing](#contributing)
7. [License](#license)

---

## Features
- **Dynamic Card Generation**: Cards load from the [PokéAPI](https://pokeapi.co/)
- **Score Tracking**: Keeps track of the current score (number of unique picks) and the highest score.
- **Responsive Layout**: Scales smoothly across desktop and mobile.
- **Random Shuffle**: Cards randomize each time you select a Pokémon, ensuring the game stays challenging.

---

## Live Demo
**[View Demo on Vercel (Here)](https://memory-card-taupe-three.vercel.app/)**

<img alt="Screenshot of site" src="https://github.com/user-attachments/assets/5d8240d5-95a2-4338-8270-f760a9cda171">

---

## Technologies Used
- **React**
- **JavaScript (ES6+)**
- **Fetch API**
- **CSS**
- **Git & GitHub** for version control

---

## Usage
1. **Start a Round**: You’re presented with a set of Pokémon cards displayed on the screen.
2. **Click me for new Pokémon**: Click to fetch 12 different Pokémon.
3. **Select a Card**: Each time you click on a Pokémon you haven’t selected before, your score increases by one.
4. **Avoid Repeats**: Cards reshuffle after each click. If you pick a Pokémon you’ve already chosen, the game resets your current score back to zero.
5. **Aim for a High Score**: Keep going until you can’t remember which ones you’ve chosen! Max score is 12.

---

## Future Improvements
- **Increased Difficulty**: More cards, additional levels, or new Pokémon as you progress.
- **Animations**: Add flip animations or hover effects to make the game more interactive.
- **Leaderboard**: Store best scores for each user (requires a backend).
- **Testing**: Implement unit/integration tests using Jest, React Testing Library, or Vitest.

---

## Contributing
Contributions, issues, and feature requests are welcome! Feel free to open a pull request or issue.

1. Fork the project  
2. Create your feature branch: `git checkout -b feature/your-feature`  
3. Commit your changes: `git commit -m 'Add a cool feature'`  
4. Push to the branch: `git push origin feature/your-feature`  
5. Open a Pull Request

---

## License
This project is licensed under the [MIT License](./LICENSE.txt). You are free to use, modify, and distribute this project as you see fit.
