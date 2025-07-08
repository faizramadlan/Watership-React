# 🚀 Deployment Guide - Watership React

This guide will walk you through deploying your three applications: **Backend API**, **Admin Dashboard**, and **Client App**.

## 📋 **Prerequisites**

1. **GitHub Account** - For hosting your code
2. **Vercel Account** - For hosting (free tier available)
3. **Database Service** - PlanetScale, Railway, or Supabase
4. **Node.js & npm** - For local development

## 🗄️ **Step 1: Database Setup**

### **Option A: PlanetScale (Recommended)**
1. Go to [planetscale.com](https://planetscale.com)
2. Create a free account
3. Create a new database
4. Get your connection string
5. Update your database configuration

### **Option B: Railway**
1. Go to [railway.app](https://railway.app)
2. Create a free account
3. Create a new MySQL database
4. Get your connection details

## 🔧 **Step 2: Backend Deployment (Server-side)**

### **Deploy to Vercel**

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Navigate to server directory:**
```bash
cd server-side
```

3. **Login to Vercel:**
```bash
vercel login
```

4. **Deploy:**
```bash
vercel
```

5. **Set Environment Variables in Vercel Dashboard:**
   - Go to your project in Vercel dashboard
   - Navigate to Settings → Environment Variables
   - Add these variables:
   ```
   JWT_SECRET=your_super_secret_jwt_key_here
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASS=your_database_password
   DB_NAME=your_database_name
   NODE_ENV=production
   ```

6. **Redeploy with environment variables:**
```bash
vercel --prod
```

### **Alternative: Deploy to Railway**

1. **Install Railway CLI:**
```bash
npm install -g @railway/cli
```

2. **Login and deploy:**
```bash
railway login
railway init
railway up
```

## 🎨 **Step 3: Frontend Deployments**

### **Admin Dashboard Deployment**

1. **Navigate to admin directory:**
```bash
cd admin-side/cms-c1
```

2. **Update API URL:**
   - Create `.env` file:
   ```env
   VITE_API_URL=https://your-backend-url.vercel.app
   ```

3. **Deploy to Vercel:**
```bash
vercel
```

4. **Set Environment Variables:**
   - In Vercel dashboard, add:
   ```
   VITE_API_URL=https://your-backend-url.vercel.app
   ```

5. **Redeploy:**
```bash
vercel --prod
```

### **Client App Deployment**

1. **Navigate to client directory:**
```bash
cd client-side/client
```

2. **Update API URL:**
   - Create `.env` file:
   ```env
   VITE_API_URL=https://your-backend-url.vercel.app
   ```

3. **Deploy to Vercel:**
```bash
vercel
```

4. **Set Environment Variables:**
   - In Vercel dashboard, add:
   ```
   VITE_API_URL=https://your-backend-url.vercel.app
   ```

5. **Redeploy:**
```bash
vercel --prod
```

## 🔄 **Step 4: Database Migration**

After deploying your backend, you need to run migrations:

1. **Connect to your production database**
2. **Run migrations:**
```bash
cd server-side
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

## 🌐 **Step 5: Custom Domains (Optional)**

### **Vercel Custom Domains**
1. Go to your project in Vercel dashboard
2. Navigate to Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

## 📱 **Step 6: Testing Your Deployment**

### **Test Backend API:**
```bash
curl https://your-backend-url.vercel.app/api/health
```

### **Test Frontends:**
- Visit your admin dashboard URL
- Visit your client app URL
- Test all functionality

## 🔧 **Troubleshooting**

### **Common Issues:**

1. **CORS Errors:**
   - Update CORS configuration in backend
   - Add frontend URLs to allowed origins

2. **Database Connection:**
   - Verify database credentials
   - Check if database is accessible from deployment platform

3. **Environment Variables:**
   - Ensure all variables are set in deployment platform
   - Check variable names match your code

4. **Build Errors:**
   - Check for missing dependencies
   - Verify Node.js version compatibility

## 📊 **Monitoring & Analytics**

### **Vercel Analytics:**
- Enable Vercel Analytics in dashboard
- Monitor performance and errors

### **Database Monitoring:**
- Use your database provider's monitoring tools
- Set up alerts for connection issues

## 🔒 **Security Checklist**

- [ ] JWT_SECRET is strong and unique
- [ ] Database credentials are secure
- [ ] CORS is properly configured
- [ ] Environment variables are set
- [ ] HTTPS is enabled
- [ ] API endpoints are protected

## 📈 **Performance Optimization**

### **Frontend:**
- Enable Vercel's edge caching
- Optimize images and assets
- Use CDN for static files

### **Backend:**
- Enable Vercel's serverless functions
- Optimize database queries
- Use connection pooling

## 🎯 **Final URLs Structure**

After deployment, you should have:
- **Backend API**: `https://your-backend.vercel.app`
- **Admin Dashboard**: `https://your-admin.vercel.app`
- **Client App**: `https://your-client.vercel.app`

## 📞 **Support**

If you encounter issues:
1. Check Vercel deployment logs
2. Verify environment variables
3. Test API endpoints individually
4. Check database connectivity

---

**🎉 Congratulations!** Your Watership React platform is now live and ready for users! 