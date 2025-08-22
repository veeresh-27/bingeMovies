# Binge Movies

A modern movie streaming platform built with React and Vite.

## Features

- Browse movies and TV shows
- Search functionality
- Responsive design
- Modern UI with Material-UI v5

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **UI Library**: Material-UI v5
- **Styling**: CSS3
- **Icons**: Material-UI Icons
- **Carousel**: React Alice Carousel

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd bingeMovies
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with your API key:

```env
VITE_MOVIESDB_API_KEY=your_moviesdb_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── main.jsx       # Application entry point
└── App.jsx        # Main App component
```

## API Integration

This project integrates with:

- **The Movie Database (TMDB)** - For movie and TV show data

## Recent Updates

- ✅ Converted from Create React App to Vite
- ✅ Updated Material-UI from v4 to v5
- ✅ Removed deprecated packages
- ✅ Removed authentication system
- ✅ Updated environment variable format
- ✅ Modernized build configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.
