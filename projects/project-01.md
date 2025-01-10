---
title: "ABCD Project: Photo Blogging Platform"
description: "The ABCD Project is a photo blogging platform that enables users to create, manage, and explore blogs. It provides tailored functionalities for visitors, registered users, and administrators, including advanced blog management, user controls, and dynamic content filtering."
technologies: ["PHP", "JavaScript", "CSS"]
github: "https://github.com/sjasthi/photo_abcd_B"
instructions: >
  **Installation & Setup:**
  1. Clone the repository:
     ```
     git clone https://github.com/sjasthi/photo_abcd_B.git
     cd photo_abcd_B
     ```
  2. Set up the database:
     - Import SQL scripts from `scripts/setup.php`.

  3. Configure environment variables:
     - Update `sessionManagement/db_configuration.php` with your database credentials.

  4. Run the application:
     - Deploy files to your web server's document root.
     - Access the platform via `http://localhost/photo_abcd_B`.
screenshots:
  - /assets/screenshot1.jpg
permalink: "/projects/{{ page.fileSlug }}/index.html"
layout: "project.njk"
---

# ABCD Project: Photo Blogging Platform

## Overview

The ABCD Project is a photo blogging platform that enables users to create, manage, and explore blogs. It provides tailored functionalities for visitors, registered users, and administrators.

## Key Features

- **Visitor View:**
  - Browse blogs with filters or by viewing user profiles.
  - Simple login and registration process.

- **Registered User Dashboard:**
  - Create, edit, and manage blogs with image uploads and public/private visibility.
  - Generate printable Alphabet Books from blog content.

- **Admin Dashboard:**
  - Manage blogs and users, including editing, deleting, and generating site-wide statistics.
  - Configure homepage preferences and generate printable reports.

- **Video Blog Integration:**
  - Supports YouTube video links for blogs in "Video Mode."
  - Dynamically displays blogs with embedded videos.

## Technologies Used

- PHP, JavaScript, CSS
- MySQL or MariaDB
- Apache/Nginx Web Server

## Screenshots

*Include screenshots or leave this as a placeholder if unavailable.*

[GitHub Repository](https://github.com/sjasthi/photo_abcd_B)  
