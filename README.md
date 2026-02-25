# Project Overview

Chuks Kitchen is a modern Food Ordering & Customer
Management website built using Next.js that allows customers to register, browse meals, place
orders, and track activity online. This project is designed to provide a seamless user experience with fast load times and optimized performance. The application features a clean and responsive design, making it accessible on various devices.
> This project is strictly a **FRONTEND WEBSITE**, and does not include backend functionality or database integration. The focus is on creating a visually appealing and user-friendly interface based on the provided Figma design.

### Technology Stack

- **Language**: TypeScript
- **Library**: React
- **Framework**: Next.js (React-based)
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons
- **Image Optimization**: Next.js Image component

## Project Structure

The five(5) screens i created from the figma design are the *Home page*, the *Explore page*, the *My Orders page*, the *Login page*, and the *Sign up page*. I already hosted this project on Vercel for easy access. To navigate to these pages, you can use the following URLs:

- **Home page** : [chukskitchen-trust.vercel.app/](http://chukskitchen-trust.vercel.app/)
- **Explore page**: [chukskitchen-trust.vercel.app/explore](http://chukskitchen-trust.vercel.app/explore)
- **My Orders page**: [chukskitchen-trust.vercel.app/orders](http://chukskitchen-trust.vercel.app/orders)
- **Login page**: [chukskitchen-trust.vercel.app/login](http://chukskitchen-trust.vercel.app/login)
- **Sign up page**: [chukskitchen-trust.vercel.app/sign_up](http://chukskitchen-trust.vercel.app/sign_up)


```
chuks_kitchen/
├── app/                    # Next.js App Router directory
├── components/             # Reusable React components
├── public/                 # Static assets (images)
├── styles/                 # Global and module styles
├── lib/                    # Utility functions and helpers
├── pages/                  # API routes (Using Next.js Router)
└── package.json           # Dependencies and scripts
```

## Design Interpretation
I translated the Figma design into a responsive website using Tailwind CSS for styling. The design is clean and modern, with a focus on user experience. I ensured that the application is fully responsive, providing an optimal viewing experience across different devices and screen sizes.

### Assumptions Made
* The figma design provided did not specify hover states for buttons and cards, so I implemented basic hover effects to enhance interactivity and user experience.
* It also included design flaws like footers in the login and sign-up pages, which I removed to enhance the user experience. 
* The dropdown menu on the [Explore page](http://chukskitchen-trust.vercel.app/explore) was not specified as a dropdown but looked like one, so i added a down arrow icon to indicate that it is a dropdown menu and made the links a bit functional as well, thus improving user experience.
* Certain mobile views had design flaws in their layout like the cards on the [Explore page](http://chukskitchen-trust.vercel.app/explore) and the [My Orders page](http://chukskitchen-trust.vercel.app/orders), which didn't have a mobile friendly/logical layout. I redesigned the mobile view of the cards for a more refined and professional look to ensure a better user experience on mobile devices.
* There was also no Header or Footer designs for the mobile view of the pages, so I added a simple header and footer to the mobile view of the pages.
* Finally, there was a lack of proper text heirachy in some of the pages. Hence, I implemented proper text heirachy to improve the overall UI of the pages

## Limitations & Improvements
If given more time, i would love to add more screens/pages and make the entire site a bit more interactive by adding a functional cart and a dark mode feature to enhance user experience.

## Key Features

- Server-side rendering and static generation
- API routes using Next.js Router
- Responsive design with Tailwind CSS
- Optimized image loading with Next.js Image component

## Build & Deployment

Run the production build:

```bash
npm run build
npm run start
```

## Getting Started

To get started, run the development server:

```bash
cd chuks_kitchen
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
