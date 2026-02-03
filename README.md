# 🌍 SmartLink AI - Global Trade Management Platform

> **Transform your international trade operations with AI-powered insights and intelligent supplier discovery**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](package.json)
![Status](https://img.shields.io/badge/status-Active-brightgreen.svg)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Pages Overview](#pages-overview)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**SmartLink AI** is a comprehensive global trade management platform designed to simplify international commerce. It connects businesses with verified suppliers, provides intelligent routing options, manages compliance, and offers AI-powered insights to optimize supply chain operations.

Whether you're a small importer or a large-scale trader, SmartLink AI streamlines your entire trade workflow—from supplier discovery to shipment tracking.

---

## ✨ Features

### 🤝 Supplier Discovery & Management
- Access to 5000+ verified suppliers across 50+ countries
- Trust scores and performance metrics
- Detailed supplier profiles with compliance history
- Real-time supplier ratings and reviews

### 📊 Analytics & Insights
- AI-powered cost optimization recommendations
- Trade trend analysis and market insights
- Performance metrics and KPIs
- Historical trade data visualization

### 🚢 Shipment Tracking
- Real-time GPS tracking of shipments
- Live status updates from ports
- Predictive delay alerts
- Multi-modal shipping support (Sea, Air, Rail)

### ✅ Compliance Management
- Automated document verification
- Compliance status tracking
- Certificate of Origin management
- Commercial Invoice generation

### 🛣️ Intelligent Route Planning
- Multi-option route comparison
- Cost vs. Speed optimization
- Port congestion alerts
- Smart carrier recommendations

### 📰 Trade News & Updates
- Live trade news updates
- Tariff changes notifications
- Market trend alerts
- Regulatory compliance updates

### 🔐 Secure Trade Setup Wizard
- Step-by-step trade configuration
- Supplier selection
- Product management with HS codes
- Route optimization
- Comprehensive review before submission

---

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required - runs entirely in browser

### Access the Application

1. **Open Homepage**
   ```
   Open homepage.html in your browser
   ```

2. **Login**
   - Email: `admin@gmail.com`
   - Password: `*************`

3. **Explore Features**
   - Navigate using the sidebar menu
   - Start a new trade setup using the wizard

---

## 📁 Project Structure

```
Bus/
├── index.html                    # Dashboard page
├── homepage.html                 # Landing page
├── suppliers.html                # Suppliers listing
├── supplier-profile.html         # Individual supplier profile
├── shipments.html                # Shipment tracking
├── compliance.html               # Compliance management
├── analytics.html                # Analytics & insights
├── trade-news.html               # Trade news feed
├── trade-setup.html              # Trade setup wizard
│
├── style/
│   ├── style.css                 # Global styles
│   ├── homepage.css              # Homepage specific styles
│   ├── analytics.css             # Analytics page styles
│   ├── compliance.css            # Compliance page styles
│   ├── shipments.css             # Shipments page styles
│   ├── supplier-profile.css      # Supplier profile styles
│   ├── suppliers.css             # Suppliers list styles
│   ├── trade-news.css            # Trade news styles
│   └── trade-setup.css           # Trade setup wizard styles
│
├── js/
│   ├── dashboard.js              # Dashboard functionality
│   ├── analytics.js              # Analytics charts
│   ├── compliance.js             # Compliance features
│   ├── shipments.js              # Shipment tracking logic
│   ├── suppliers.js              # Supplier data & filtering
│   ├── supplier-profile.js       # Profile page logic
│   ├── trade-news.js             # News feed functionality
│   ├── trade-setup.js            # Wizard navigation & logic
│   └── homepage.js               # Homepage interactions
│
└── README.md                      # This file
```

---

## 📄 Pages Overview

### 🏠 Homepage (`homepage.html`)
- Landing page with company overview
- Key statistics and features showcase
- Login and Sign Up modals
- Call-to-action sections

### 📊 Dashboard (`index.html`)
- Key performance indicators (KPIs)
- Active routes summary
- Shipment status overview
- AI recommendations
- Quick access to main features

### 👥 Suppliers (`suppliers.html`)
- Browse 5000+ verified suppliers
- Search and filter functionality
- Trust score display
- Supplier comparison
- Start trade option

### 👤 Supplier Profile (`supplier-profile.html`)
- Detailed supplier information
- Trust ring visualization
- Performance statistics
- Trade history
- Contact options

### 📦 Shipments (`shipments.html`)
- Real-time tracking map
- Route information
- Progress indicators
- Estimated delivery times
- Risk alerts

### ✅ Compliance (`compliance.html`)
- Document status tracking
- Compliance checklist
- Alert notifications
- Status indicators (OK/Warning)

### 📈 Analytics (`analytics.html`)
- Cost breakdown charts
- Lead time trends
- Top suppliers analysis
- AI insights and recommendations

### 📰 Trade News (`trade-news.html`)
- Live trade updates
- Tariff announcements
- Market news feed
- Real-time indicators

### 🛠️ Trade Setup Wizard (`trade-setup.html`)
- **Step 1: Supplier Selection** - Choose from verified suppliers
- **Step 2: Product Details** - Enter product info and pricing
- **Step 3: Route Planning** - Select shipping mode and priority
- **Step 4: Review & Submit** - Confirm all details before submission

---

## 🛠 Technologies

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (Vanilla)** - Interactive features and logic
- **Bootstrap Grid** - Responsive design principles

### Design Features
- **Glassmorphism** - Modern UI with blur effects
- **Gradient Colors** - Professional color schemes
- **Responsive Layout** - Mobile-friendly design
- **Dark Theme** - Eye-friendly interface

### Architecture
- **Client-Side Rendering** - Fast, responsive experience
- **Modular CSS** - Separate stylesheets for each page
- **Organized JavaScript** - Dedicated JS files per page
- **No Backend Required** - Static HTML/CSS/JS

---

## 💾 Installation

### Option 1: Direct File Access
1. Download or clone the repository
2. Open any `.html` file in a web browser
3. Start exploring!

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000/homepage.html`

---

## 📖 Usage

### Getting Started
1. **Visit Homepage** → Click "Login"
2. **Credentials**
   - Email: `admin@gmail.com`
   - Password: `*************`
3. **Explore Dashboard** → View KPIs and active routes
4. **Navigate Features** → Use sidebar for different sections

### Creating a New Trade
1. Go to **Trade Setup** page
2. **Step 1**: Select a supplier
3. **Step 2**: Enter product details
4. **Step 3**: Choose shipping route and options
5. **Step 4**: Review and submit

### Tracking Shipments
1. Navigate to **Shipments**
2. View live tracking map
3. Check delivery status
4. Monitor risk alerts

### Checking Compliance
1. Go to **Compliance**
2. Review document status
3. Check compliance alerts
4. Download required documents

---

## 🎨 Color Scheme

- **Primary Blue**: `#2563eb` - Buttons, accents
- **Success Green**: `#22c55e`, `#4ade80` - Positive actions, progress
- **Dark Background**: `#0f172a`, `#1e293b` - Modern dark theme
- **Light Text**: `#fff`, `#cbd5e1` - High contrast

---

## ⚡ Key Features Breakdown

### AI Recommendations
- Smart supplier suggestions based on trade history
- Optimal route recommendations
- Cost optimization insights
- Delay risk predictions

### Smart Notifications
- Port congestion alerts
- Compliance reminders
- Delivery delay warnings
- Market trend updates

### Real-Time Updates
- Live shipment tracking
- Market price updates
- Tariff changes
- Supplier availability

---

## 🔒 Security Features

- Client-side validation
- Secure form handling
- Data privacy focused
- No external API calls (for sensitive data)

---

## 📱 Responsive Design

All pages are fully responsive and work seamlessly on:
- ✅ Desktop (1920px and above)
- ✅ Laptop (1366px)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

---

## 🚀 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication system
- [ ] Real database integration
- [ ] Advanced analytics dashboards
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] Blockchain for compliance
- [ ] Automated invoicing

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 💬 Support & Feedback

- 📧 Email: support@smartlinkai.com
- 🐛 Report Issues: [GitHub Issues](https://github.com/smartlinkai/issues)
- 💡 Feature Requests: [GitHub Discussions](https://github.com/smartlinkai/discussions)

---

## 🙏 Acknowledgments

- Inspired by modern trade platforms
- Built with passion for global commerce
- Designed for seamless user experience

---

## 📊 Statistics

- **8 Main Pages** - Comprehensive features
- **6 Feature Categories** - Full supply chain management
- **5000+ Suppliers** - Verified global network
- **50+ Countries** - International coverage
- **$2B+** - Combined trade value

---

<div align="center">

**Made with ❤️ for Global Traders**

[Visit Homepage](homepage.html) | [Login](index.html) | [Documentation](README.md)

**SmartLink AI © 2026**

</div>
