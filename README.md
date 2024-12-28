# Bhook - Food Delivery App

## Overview
Bhook is a modern food delivery application built with React Native, offering a seamless experience for browsing and ordering food items. The app features a clean UI with bottom tab navigation, authentication system, and infinite scroll functionality.

## Media 

<div style="display: flex; justify-content: space-between;">
   <img src="https://github.com/user-attachments/assets/32859ff8-b276-4b44-9e72-91af74b8b96d" alt="Login" width="32%" />
   <img src="https://github.com/user-attachments/assets/6c01eb44-86f3-47ea-a206-6ff99923bdf9" alt="Home" width="32%" />
   <img src="https://github.com/user-attachments/assets/8a8b6b3a-831a-44ff-939e-2cb40e73b14a" alt="Search" width="32%" />
</div>

https://github.com/user-attachments/assets/9c454872-20c6-4ec2-b5a3-d94d0df3a75e

## Username and password for login

| Username        | First Name | Password    |
|-----------------|------------|-------------|
| Ajaymaurya1008  | Ajay       | 12345678    |
| JohnDoe         | John       | password123 |
| JaneSmith       | Jane       | qwerty456   |
| AliceJohnson    | Alice      | alice789    |

## Features

- **Authentication System**
  - Login functionality with username/password
  - Session management using Zustand
  - Form validation with error messages

- **Home Screen**
  - Personalized greeting with user's name
  - Search bar for quick access
  - Food categories with icons
  - Special offers section with horizontal scrolling

- **Search Screen**
  - Infinite scroll implementation
  - Search header with search functionality
  - Grid layout for food items
  - Loading states and error handling

- **Navigation**
  - Bottom tab navigation with 4 main sections:
    - Home
    - Favorites
    - Search
    - Profile
  - Stack navigation for authentication flow

## Tech Stack

### Core
- React Native 0.76.3
- TypeScript
- NativeWind (TailwindCSS for React Native)

### State Management & Data Fetching
- Zustand for state management
- TanStack Query (React Query) for API calls
- Axios for HTTP requests

### UI Components
- React Native Vector Icons
- @shopify/flash-list for optimized lists
- React Native Reanimated for animations
- React Native Keyboard Controller

### Navigation
- React Navigation v7
  - Bottom Tabs
  - Native Stack

### Storage
- React Native MMKV for local storage

## Prerequisites

- Node.js >= 18
- Ruby >= 2.6.10
- Xcode (for iOS)
- Android Studio (for Android)
- CocoaPods (for iOS)

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Bhook
```

2. Install dependencies
```bash
npm install
```

3. iOS specific setup
```bash
cd ios
pod install
cd ..
```

4. Start the Metro bundler
```bash
npm start
```

5. Run the app
```bash
# For iOS
npm run ios

# For Android
npm run android
```

## Project Structure

```
src/
├── assets/
├── components/
├── hooks/
├── navigation/
├── screens/
├── store/
├── style/
├── types/
└── utils/
```

## Design Decisions & Approach

1. **API Adaptation**
   - Used calories as price since the dummy API didn't provide price information
   - Implemented infinite scroll for better performance with large datasets

2. **UI/UX**
   - Used NativeWind for consistent styling and better development experience
   - Implemented loading states and error boundaries for better user experience
   - Used FlashList instead of FlatList for better performance

3. **State Management**
   - Zustand for simple global state management (auth)
   - React Query for server state management
   - MMKV for persistent storage

4. **Type Safety**
   - Comprehensive TypeScript implementation
   - Defined interfaces for API responses and component props

## Challenges & Solutions

1. **Performance Optimization**
   - Challenge: Rendering large lists of food items
   - Solution: Implemented FlashList with proper estimation of item sizes

2. **State Management**
   - Challenge: Managing auth state across app restart
   - Solution: Implemented persistent storage with MMKV

3. **API Integration**
   - Challenge: Limited API data (no prices)
   - Solution: Creatively used calories as price placeholder

4. **Form Handling**
   - Challenge: Form validation and keyboard handling
   - Solution: Implemented custom validation and used React Native Keyboard Controller

## Future Improvements

1. Implement search functionality
2. Add favorites functionality
3. Complete profile section
4. Add cart functionality
6. Add unit tests and E2E tests
7. Implement proper error boundaries
8. Add proper API integration
9. Add proper authentication
10. Add proper validation

