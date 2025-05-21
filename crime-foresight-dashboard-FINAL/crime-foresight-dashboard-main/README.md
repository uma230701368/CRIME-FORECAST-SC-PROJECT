
# Crime Foresight Dashboard

The Crime Rate Detection System employs machine learning algorithms and a real-time crime forecasting dashboard to analyze historical and real-time crime data, identifying patterns and predicting future crime trends. By integrating socio-economic factors, it enables law enforcement agencies to forecast crime outbreaks and optimize resource allocation. This proactive, data-driven approach enhances public safety through timely, targeted interventions.

## Features

- Real-time crime data analysis
- Predictive crime forecasting
- Geographic crime hotspot mapping
- Pattern recognition and trend analysis
- Resource allocation optimization
- Customizable reporting and alerts

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/crime-foresight-dashboard.git
   cd crime-foresight-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create environment variables file:
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your actual configuration values.

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The application will be available at `http://localhost:8080`.

## Deployment

For deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed guides on deploying to:
- Vercel
- Netlify
- GitHub Pages
- Custom VPS/Server

## Technologies Used

- React
- TypeScript
- Vite
- React Router
- TanStack Query (React Query)
- Recharts
- Tailwind CSS
- Shadcn UI Components

## Project Structure

```
crime-foresight-dashboard/
├── src/
│   ├── components/       # UI components
│   ├── context/          # React context providers
│   ├── data/             # Mock data and data handlers
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Application pages
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
├── .env.example          # Environment variables example
└── DEPLOYMENT.md         # Deployment instructions
```

