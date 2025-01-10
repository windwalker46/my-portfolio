---
title: "Zero Trust Network Traffic Analysis"
description: "A JavaFX application for real-time network traffic analysis focused on Zero Trust security and anomaly detection. The system integrates with Snort for intrusion detection and prevention, provides a demo mode for testing, and offers custom rule-based monitoring."
technologies: ["Java", "JavaFX", "Snort", "Gradle"]
github: "https://github.com/windwalker46/ZeroTrustTrafficAnalysis"
instructions: >
  **Installation & Setup:**
  1. Clone the repository:
     ```
     git clone https://github.com/windwalker46/ZeroTrustTrafficAnalysis.git
     cd ZeroTrustTrafficAnalysis
     ```
  2. Run the application:
     - For Linux/macOS: `./gradlew clean build run`
     - For Windows: `.\gradlew clean build run`

  3. (Optional) Configure Snort:
     - Install and set up Snort to log alerts.
     - Start Snort in IDS or IPS mode using provided batch scripts.

  **Key Features:**
  - Zero Trust monitoring with customizable rules.
  - Integration with Snort for real-time alerts.
  - Demo mode for testing without Snort.
  - JavaFX GUI for alert management, email notifications, and report generation.
screenshots:
  - /assets/screenshot1.jpg
permalink: "/projects/{{ page.fileSlug }}/index.html"
layout: "project.njk"
---

# Zero Trust Network Traffic Analysis

## Overview

This project is a real-time network traffic monitoring and alerting system built using JavaFX. It focuses on Zero Trust principles by allowing users to define custom rules to block or flag suspicious traffic. The application integrates with Snort for intrusion detection and prevention but also provides a demo mode for presentations and testing when Snort is unavailable.

## Key Features

- **Custom Rule Monitoring:**
  - Define blacklists, whitelists, port monitoring, protocol anomalies, and time-based access in `manual_rules.json`.
  - Dynamically apply rules to live or demo alerts.

- **Snort Integration:**
  - Monitor Snort's alert logs in real-time.
  - Operate in IDS (detection) or IPS (prevention) mode.

- **User-Friendly JavaFX GUI:**
  - View and manage alerts in a table format.
  - Buttons for clearing alerts, generating reports, and sending email summaries.

- **Demo Mode:**
  - Automatically activates when Snort is not running.
  - Displays sample alerts for testing and showcasing functionality.

- **Batch Scripts for Snort Modes:**
  - `start_snort_ids.bat`: Starts Snort in intrusion detection mode.
  - `start_snort_ips.bat`: Starts Snort in intrusion prevention mode.

- **Email Notifications & Reports:**
  - Send alert summaries via email using customizable SMTP configurations.
  - Generate timestamped text-based reports in the `reports/` directory.

## Technologies Used

- **Programming:** Java, JavaFX
- **Build Tool:** Gradle
- **IDS/IPS Integration:** Snort
- **File Configuration:** JSON (for rules)

## Screenshots

*Include screenshots or placeholders here.*

[GitHub Repository](https://github.com/windwalker46/ZeroTrustTrafficAnalysis)
