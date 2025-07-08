#!/bin/bash

# Watership React Deployment Script
echo "🚀 Starting Watership React Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
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

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_status "Building Server-side..."
cd server-side
if npm install; then
    print_success "Server dependencies installed"
else
    print_error "Failed to install server dependencies"
    exit 1
fi
cd ..

print_status "Building Admin Dashboard..."
cd admin-side/cms-c1
if npm install; then
    print_success "Admin dependencies installed"
    if npm run build; then
        print_success "Admin dashboard built successfully"
    else
        print_error "Failed to build admin dashboard"
        exit 1
    fi
else
    print_error "Failed to install admin dependencies"
    exit 1
fi
cd ../..

print_status "Building Client App..."
cd client-side/client
if npm install; then
    print_success "Client dependencies installed"
    if npm run build; then
        print_success "Client app built successfully"
    else
        print_error "Failed to build client app"
        exit 1
    fi
else
    print_error "Failed to install client dependencies"
    exit 1
fi
cd ../..

print_success "🎉 All builds completed successfully!"
echo ""
print_status "Next steps:"
echo "1. Deploy server-side to Vercel: cd server-side && vercel"
echo "2. Deploy admin dashboard: cd admin-side/cms-c1 && vercel"
echo "3. Deploy client app: cd client-side/client && vercel"
echo ""
print_warning "Don't forget to set environment variables in your deployment platform!" 