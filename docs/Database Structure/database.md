---
sidebar_position: 2
---

# Database Structure

This document explains how **NAVIGO** stores data in **Firebase Firestore**, including collections, example documents, and user progress tracking.

---

## 1. Users Collection

Stores all user profiles, authentication info, and progress.

**Fields:**

- `userId` (string) – Unique identifier for the user  
- `name` (string) – User’s first name  
- `surname` (string) – User’s last name  
- `email` (string) – User’s email address  
- `level` (number) – Current level of the user  
- `points` (number) – Total points earned  

---

## 2. Quests Collection

Stores all quests and challenges available in NAVIGO.

**Fields:**

- `questId` (string) – Unique identifier for the quest  
- `title` (string) – Quest title  
- `description` (string) – Description of the quest  
- `location` (object) – `{ latitude, longitude }` for GPS verification  
- `points` (number) – Points awarded upon completion  
- `active` (boolean) – Indicates if the quest is currently active  

---

## 3. Collectibles Collection

Stores digital rewards, badges, and other items.

**Fields:**

- `collectibleId` (string) – Unique identifier for the collectible  
- `name` (string) – Name of the badge or item  
- `type` (string) – Type, e.g., badge or item  
- `pointsRequired` (number) – Points required to unlock  
- `description` (string) – Details about the collectible  

---

## 4. Leaderboard Collection

Tracks user scores and rankings.

**Fields:**

- `userId` (string) – Reference to the user  
- `week` (number) – Week number for leaderboard tracking  
- `score` (number) – Total points for the week  
- `rank` (number) – User rank for the week  

---

### Summary of Data Relationships

- Each **user document** stores completed quests and collected badges as arrays.  
- **Quests** and **collectibles** are standalone documents and referenced by their IDs in user progress.  
- **Leaderboard** documents aggregate user scores and rank weekly.  
- Location data in quests is used for verifying user check-ins via the Google Maps API.  

This structure allows efficient tracking of **user progress, quests, rewards, and leaderboard rankings**.
