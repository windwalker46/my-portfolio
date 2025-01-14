---
title: "River Raid: Multiplayer Game with Client-Server Architecture"
description: "A modernized multiplayer version of the classic *River Raid* game, featuring a client-server architecture, SSH communication, and real-time gameplay. Built using Python and designed to showcase advanced server-side integration and gameplay mechanics."
technologies: ["Python", "Pygame", "Multithreading", "Paramiko", "SSH"]
github: "https://github.com/Justin-HAL/320-fa24-final-task"
instructions: >
  **Installation & Setup:**

  *Client Application:*
  1. Clone the repository:
     ```
     git clone https://github.com/Justin-HAL/320-fa24-final-task.git
     cd 320-fa24-final-task/standalone_app
     ```
  2. Install dependencies:
     ```
     pip install -r ../requirements.txt
     ```
  3. Run the client game:
     ```
     python main.py
     ```

  *Server Application:*
  1. Navigate to the server directory:
     ```
     cd ../river_raid/server
     ```
  2. Install server-side dependencies (ensure `paramiko` is installed):
     ```
     pip install paramiko
     ```
  3. Configure environment variables:
     - `SERVER_HOST`: Default is `127.0.0.1`.
     - `SERVER_PORT`: Default is `2200`.
     - `SERVER_KEY_FILENAME`: Path to your RSA private key for SSH communication.

  4. Run the server:
     ```
     python main.py
     ```

  **Gameplay Controls:**
  - Move Left/Right: Use the arrow keys.
  - Shoot: Press the Spacebar to fire missiles.
  - Quit: Press Q to exit the game.

screenshots:
  - \assets\riverRaid.jpg
permalink: "/projects/{{ page.fileSlug }}/index.html"
layout: "project.njk"
---

# River Raid: Multiplayer Game with Client-Server Architecture

## Overview

This project is a modernized multiplayer remake of the classic *River Raid* game. The game showcases advanced client-server integration, real-time SSH communication, and multithreaded gameplay. Built as part of an operating systems course, the project explores server-side architecture and real-time game mechanics.

## Key Features

- **Multiplayer Support:**
  - Clients connect to the server over SSH, enabling synchronized gameplay.
  - Players interact in real time with shared game states managed by the server.

- **Client-Side Game:**
  - Built with Python and Pygame.
  - Handles player movement, collision detection, and score tracking.

- **Server-Side Architecture:**
  - Built with Python, using the Paramiko library for SSH communication.
  - Includes a dedicated `GameManager` for processing player actions and managing the game state.

- **Gameplay Mechanics:**
  - **Obstacles:** Randomly spawned objects to avoid.
  - **Fuel Management:** Collect fuel to survive; running out of fuel results in losing a life.
  - **Shooting:** Destroy obstacles for points.
  - **Lives:** Start with 3 lives; collisions or running out of fuel reduce lives.

- **Real-Time Communication:**
  - Server processes client actions and updates the game state.
  - Uses JSON-based message serialization and deserialization.

- **Custom Batch Scripts:**
  - Server-side batch scripts simplify deployment and management.

## Technologies Used

- **Client-Side:** Python, Pygame
- **Server-Side:** Python, Paramiko (SSH)
- **Networking:** JSON serialization/deserialization, socket programming
- **Game Concepts:** Multithreading, shared memory synchronization

## How to Play

1. **Run the Server:** Start the server application.
2. **Connect Clients:** Launch client instances to join the game.
3. **Play the Game:**
   - Use the arrow keys to navigate.
   - Collect fuel and shoot obstacles to score points.
   - Avoid running out of fuel or colliding with obstacles.

## Contributors

- **Ben Tran**
- **Justin Halvorson**
- **Daniel Leone**
