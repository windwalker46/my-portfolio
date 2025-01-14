---
title: "File Shuffler and Organizer"
description: "A Rust-based utility for shuffling, renaming, and organizing files in directories. The application supports recursive directory traversal, timestamp modification, and automated tasks, making it ideal for managing large datasets or file-based workflows."
technologies: ["Rust", "Filetime", "Chrono", "Randomization"]
github: "https://github.com/windwalker46/File-shuffler-rust"
instructions: >
  **Installation & Setup:**

  1. Clone the repository:
     ```
     git clone https://github.com/windwalker46/File-shuffler-rust.git
     cd File-shuffler-rust
     ```

  2. Install dependencies:
     Ensure you have Rust and Cargo installed. Then, build the project:
     ```
     cargo build --release
     ```

  3. Run the application:
     ```
     cargo run --release
     ```

  **Features:**
  - Shuffle and rename files with randomized names.
  - Traverse directories recursively, processing files and subdirectories.
  - Modify file timestamps (creation, access, and modification times).
  - Automated or manual task execution with configurable intervals.

screenshots:
  - \assets\fileShuffler.jpg
permalink: "/projects/{{ page.fileSlug }}/index.html"
layout: "project.njk"
---

# File Shuffler and Organizer

## Overview

The *File Shuffler and Organizer* is a utility tool written in Rust, designed for efficient file management. It provides functionalities to shuffle, rename, and organize files within directories. This tool is particularly useful for managing large datasets or preparing files for machine learning workflows, experiments, or other structured processing tasks.

## Key Features

- **File Shuffling and Renaming:** Randomizes file order and assigns new names in a sequential format (e.g., `001.csv`, `002.csv`).
- **Recursive Directory Traversal:** Processes all files in a directory and its subdirectories, ensuring comprehensive coverage.
- **File Timestamp Modification:** Randomizes file timestamps (creation, modification, and access times) to simulate new or altered files.
- **Configurable Task Automation:** Supports manual execution or periodic automation at custom intervals.
- **Error Handling:** Provides detailed error messages for any issues encountered during processing.

## Usage Scenarios

- **Dataset Preparation:** Organize and anonymize files for machine learning or research.
- **File Archival:** Randomize and reorganize files for archiving or backup purposes.
- **Simulation and Testing:** Modify file attributes for testing software that relies on file metadata.

## How to Use

1. **Run the Program:** Launch the application using the command:
cargo run --release

2. **Select Path Configuration:** Choose default or custom paths interactively.
3. **Choose Operation Mode:**
- Manual shuffle and rename.
- Automated runs every 30 seconds.
- Weekly task execution for long-term automation.
4. **Monitor Output:** View detailed logs of processed files, including before and after states for renaming and timestamp changes.

## Code Structure

- **Core Modules:**
- `main.rs`: Entry point for the application.
- `file_shuffler/`: Core logic for file renaming, timestamp updates, and directory traversal.

- **Dependencies:**
- `rand`: Randomization for file order and timestamps.
- `filetime`: Utilities for file timestamp manipulation.
- `chrono`: Date and time utilities for detailed logging.

## Contributors

- **Ben Tran**
- **Justin Halvorson**
- **Daniel Leone**
