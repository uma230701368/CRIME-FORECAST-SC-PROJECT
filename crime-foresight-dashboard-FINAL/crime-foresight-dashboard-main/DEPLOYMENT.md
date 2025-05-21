
# Deployment Guide for Crime Foresight Dashboard

This guide provides instructions for deploying the Crime Foresight Dashboard to various hosting platforms, with special focus on IP-based hosting.

## Prerequisites

Before deploying, ensure you have:

1. Node.js (v16 or higher) and npm/yarn installed
2. Git installed (for version control)
3. Access to a server/VPS (for IP-based hosting)

## Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`.

## Build for Production

To create a production build:

```bash
npm run build
```

This will generate optimized files in the `dist` directory.

## Deployment Options

### Option 1: IP-Based Deployment (VPS/Server)

This approach allows you to host the application on a specific IP address using your own server:

1. **Prepare your server**:
   - Set up a Linux server (Ubuntu/Debian recommended)
   - Install Node.js: `curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - && sudo apt-get install -y nodejs`
   - Install Nginx: `sudo apt-get install nginx`

2. **Build and transfer your application**:
   ```bash
   # On your local machine
   npm run build
   
   # Transfer files to server (replace with your server's IP)
   scp -r dist/* user@your-server-ip:/var/www/html/
   ```
   
   Alternatively, clone your repository directly on the server and build there:
   ```bash
   # On your server
   git clone https://github.com/yourusername/crime-foresight-dashboard.git
   cd crime-foresight-dashboard
   npm install
   npm run build
   sudo cp -r dist/* /var/www/html/
   ```

3. **Configure Nginx**:
   Create a new Nginx configuration file:
   ```bash
   sudo nano /etc/nginx/sites-available/crime-dashboard
   ```
   
   Add the following configuration:
   ```nginx
   server {
     listen 80;
     server_name your-server-ip;  # Replace with your actual IP
     root /var/www/html;
     index index.html;
     
     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

4. **Enable and restart Nginx**:
   ```bash
   sudo ln -s /etc/nginx/sites-available/crime-dashboard /etc/nginx/sites-enabled/
   sudo nginx -t  # Test configuration
   sudo systemctl restart nginx
   ```

5. **Configure firewall** (if applicable):
   ```bash
   sudo ufw allow 'Nginx Full'
   sudo ufw enable
   ```

Your application should now be accessible at `http://your-server-ip`.

### Option 2: Vercel

Vercel provides the simplest deployment experience for React applications:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. For production deployment:
   ```bash
   vercel --prod
   ```

Alternatively, connect your repository to Vercel's dashboard for automatic deployments.

### Option 3: Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy
   ```

3. For production:
   ```bash
   netlify deploy --prod
   ```

Alternatively, drag and drop your `dist` folder to Netlify's dashboard or connect your repository for CI/CD.

### Option 4: GitHub Pages

1. Add a `homepage` field to your package.json:
   ```json
   "homepage": "https://yourusername.github.io/repo-name"
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deployment scripts to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Environment Variables

If your application uses environment variables:

1. Create a `.env` file for local development (never commit this file)
2. For production, set environment variables in your hosting platform's dashboard or directly on your server

For IP-based hosting, you can create a `.env.production` file before building:
```bash
# Create .env.production with your actual values
cp .env.example .env.production
nano .env.production  # Edit values

# Build with production env
npm run build
```

## Troubleshooting

- **Routing Issues**: Ensure your server is configured to handle client-side routing by redirecting all requests to index.html
- **API Connection**: Update API endpoints in your code to point to your production API
- **CORS Issues**: Configure your API to accept requests from your new domain/IP
- **404 Not Found**: Make sure your Nginx/Apache configuration includes the try_files directive to redirect to index.html

## Maintenance

After deployment, monitor your application for:
- Performance issues
- Error rates
- User feedback

Regularly update dependencies to ensure security and stability.
