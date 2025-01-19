---
title: "Multithreaded Pac-Man Game"
description: "A multithreaded version of the classic Pac-Man game developed in Python. The game features real-time gameplay using Pygame, with synchronized multithreaded agents and unique AI behaviors for ghosts."
technologies: ["Python", "Pygame", "Multithreading"]
github: "https://github.com/Justin-HAL/320-fa24-Final-Exam"
instructions: >
  **Installation & Setup:**
  1. Clone the repository:
     git clone https://github.com/Justin-HAL/320-fa24-Final-Exam.git
     cd 320-fa24-Final-Exam

  2. Install dependencies:
     pip install pygame

  3. Run the game:
     python main.py


  **Gameplay:**
  - Use keyboard controls to move Pac-Man and collect dots and power-ups.
  - Avoid ghosts, unless under the effect of an energizer to temporarily eat ghosts.
  - Multithreaded agents ensure smooth and responsive gameplay.

  **Key Features:**
  - Multithreading for all game agents (Pac-Man and ghosts).
  - Collision detection and shared memory synchronization.
  - Ghosts with unique AI behaviors (chase and random movement).
  - Pygame-powered real-time graphics and interactions.
screenshots:
  - \assets\pacMan.jpg
permalink: "/projects/{{ page.fileSlug }}/index.html"
layout: "project.njk"
---

# Multithreaded Pac-Man Game

## Overview

This project is a modernized, multithreaded version of the classic Pac-Man game, built using Python and Pygame. Designed as part of an operating systems course, the project focuses on implementing multithreading, synchronization, and real-time gameplay mechanics.

## Key Features

- **Multithreading:**
  - Pac-Man and ghost agents run as independent threads.
  - Smooth gameplay experience with thread-safe shared memory.

- **AI-Driven Ghosts:**
  - Ghosts exhibit unique behaviors:
    - Chase mode: Targets Pac-Man directly.
    - Random mode: Moves unpredictably.
  - Ghost behavior adapts based on Pac-Man's power-up state.

- **Collision Detection:**
  - Accurate collision handling for walls, dots, and interactions between Pac-Man and ghosts.

- **Power-Ups:**
  - Energizers temporarily allow Pac-Man to eat ghosts for bonus points.

- **Real-Time Display:**
  - Visuals powered by Pygame ensure an engaging gaming experience.

## Technologies Used

- **Programming Language:** Python
- **Game Framework:** Pygame
- **Core Concept:** Multithreading

## How to Play

1. **Start the Game:** Use `python main.py` to launch the game.
2. **Control Pac-Man:** Use arrow keys to navigate the maze.
3. **Collect Dots:** Clear the maze by eating all dots.
4. **Avoid Ghosts:** Stay away from ghosts unless you’ve collected an energizer, which allows you to eat them temporarily.

## Contributors

- **Ben Tran**
- **Daniel Leone**
- **Justin Halvorson**

