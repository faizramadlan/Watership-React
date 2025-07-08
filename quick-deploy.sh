#!/bin/bash

# Quick Deployment Script for Watership React
echo "🚀 Watership React Quick Deployment"
echo "=================================="

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    print_error "Vercel CLI not found. Installing..."
    npm install -g vercel
fi

echo ""
print_step "1. Deploying Backend (Server-side)..."
echo "----------------------------------------"

cd server-side

# Check if user is logged in to Vercel
if ! vercel whoami &> /dev/null; then
    print_warning "Please login to Vercel first:"
    vercel login
fi

print_step "Deploying backend to Vercel..."
vercel --yes

if [ $? -eq 0 ]; then
    print_success "Backend deployed successfully!"
    BACKEND_URL=$(vercel ls | grep server-side | awk '{print $2}')
    echo "Backend URL: $BACKEND_URL"
else
    print_error "Backend deployment failed!"
    exit 1
fi

cd ..

echo ""
print_step "2. Deploying Admin Dashboard..."
echo "----------------------------------"

cd admin-side/cms-c1

# Create .env file with backend URL
echo "VITE_API_URL=$BACKEND_URL" > .env

print_step "Deploying admin dashboard to Vercel..."
vercel --yes

if [ $? -eq 0 ]; then
    print_success "Admin dashboard deployed successfully!"
    ADMIN_URL=$(vercel ls | grep cms-c1 | awk '{print $2}')
    echo "Admin URL: $ADMIN_URL"
else
    print_error "Admin dashboard deployment failed!"
    exit 1
fi

cd ../..

echo ""
print_step "3. Deploying Client App..."
echo "-----------------------------"

cd client-side/client

# Create .env file with backend URL
echo "VITE_API_URL=$BACKEND_URL" > .env

print_step "Deploying client app to Vercel..."
vercel --yes

if [ $? -eq 0 ]; then
    print_success "Client app deployed successfully!"
    CLIENT_URL=$(vercel ls | grep client | awk '{print $2}')
    echo "Client URL: $CLIENT_URL"
else
    print_error "Client app deployment failed!"
    exit 1
fi

cd ../..

echo ""
print_success "🎉 All applications deployed successfully!"
echo ""
echo "📋 Deployment Summary:"
echo "====================="
echo "Backend API:     $BACKEND_URL"
echo "Admin Dashboard: $ADMIN_URL"
echo "Client App:      $CLIENT_URL"
echo ""
print_warning "Next steps:"
echo "1. Set up your database (PlanetScale/Railway)"
echo "2. Update environment variables in Vercel dashboard"
echo "3. Run database migrations"
echo "4. Test all applications"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT_GUIDE.md" 