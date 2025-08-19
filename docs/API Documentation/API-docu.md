---
sidebar_position: 1
---

# API Reference

This document describes all API endpoints used in NAVIGO, including methods, URLs, and parameters.

---

## 1. Quest API

Manage quests and challenges in the system.

### Create a Quest

- **Method:** POST  
- **Endpoint:** `/api/quests`  
- **Body Parameters:**
  - `title` (string) – Quest title  
  - `description` (string) – Quest description  
  - `location` (object) – `{ latitude, longitude }`  
  - `points` (number) – Points rewarded for completion  

### Get All Quests

- **Method:** GET  
- **Endpoint:** `/api/quests`  
- **Query Parameters:**  
  - `status` (optional, string) – Filter by quest status (active/completed)  

### Update a Quest

- **Method:** PUT  
- **Endpoint:** `/api/quests/:id`  
- **Body Parameters:**  
  - Any of `title`, `description`, `location`, `points`  

### Delete a Quest

- **Method:** DELETE  
- **Endpoint:** `/api/quests/:id`  

---

## 2. Collectibles API

Manage badges and digital rewards.

### Create a Collectible

- **Method:** POST  
- **Endpoint:** `/api/collectibles`  
- **Body Parameters:**  
  - `name` (string) – Name of the collectible  
  - `type` (string) – Badge or item  
  - `pointsRequired` (number) – Points needed to unlock  

### Get All Collectibles

- **Method:** GET  
- **Endpoint:** `/api/collectibles`  

### Update a Collectible

- **Method:** PUT  
- **Endpoint:** `/api/collectibles/:id`  
- **Body Parameters:**  
  - Any of `name`, `type`, `pointsRequired`  

### Delete a Collectible

- **Method:** DELETE  
- **Endpoint:** `/api/collectibles/:id`  

---

## 3. Leaderboard API

Track scores and rankings.

### Get Leaderboard

- **Method:** GET  
- **Endpoint:** `/api/leaderboard`  
- **Query Parameters:**  
  - `week` (optional, number) – Filter leaderboard by week  

### Update User Score

- **Method:** PUT  
- **Endpoint:** `/api/leaderboard/:userId`  
- **Body Parameters:**  
  - `score` (number) – New score for the user  

---

## 4. Location API

Verify user location for quests.

### Verify Location

- **Method:** POST  
- **Endpoint:** `/api/location/verify`  
- **Body Parameters:**  
  - `userId` (string) – ID of the user  
  - `questId` (string) – Quest being verified  
  - `latitude` (number) – Current latitude of user  
  - `longitude` (number) – Current longitude of user  

---

This API reference covers the main endpoints for **NAVIGO**.  
Use proper authentication tokens (Firebase Auth) for all protected routes.
