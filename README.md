# EMI Products - Full Stack Web Application

A modern full-stack web application for browsing premium smartphones with flexible EMI (Equated Monthly Installment) plans backed by mutual funds.

## Live Demo

- **Deployed URL**: 
- **Demo Video**: 

## Features

- **Dynamic Product Catalog**: Browse multiple smartphone models with detailed information
- **Variant Selection**: Choose from different storage and color options
- **Multiple EMI Plans**: Compare and select from various EMI plans with different tenures
- **Unique URLs**: Each product has a unique, SEO-friendly URL (e.g., `/products/iphone-17-pro`)
- **Real-time Pricing**: Display MRP, discounted price, and savings
- **Cashback Offers**: View cashback benefits on selected EMI plans
- **Responsive Design**: Mobile-first responsive UI built with Tailwind CSS
- **Database-Driven**: All data served from PostgreSQL via Prisma ORM

## Tech Stack

### Frontend
- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

### Backend
- **Runtime**: Node.js
- **Framework**: Next.js API Routes
- **ORM**: Prisma
- **Database**: PostgreSQL

### Deployment
- **Platform**: Vercel 
- **Database Hosting**: Neon

## Installation & Setup

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- npm or yarn package manager

### Step 1: Clone the Repository
```bash
git clone <https://github.com/aryanxvz/1fi-assignment>
cd 1fi-assignment
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
Create a `.env` file in the root directory:

```env
# Database Connection
DATABASE_URL=""

# For production deployment
NEXT_PUBLIC_BASE_URL=""
```


### Step 4: Setup Database
```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# Seed the database with sample data
npm run db:seed
```

### Step 5: Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Database Schema

### Product Model
```prisma
model Product {
  id          String    @id @default(cuid())
  name        String
  slug        String    @unique
  description String?
  variants    Variant[]
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
```

### Variant Model
```prisma
model Variant {
  id        String    @id @default(cuid())
  productId String
  product   Product   @relation(fields: [productId], references: [id])
  name      String
  storage   String?
  color     String?
  mrp       Float
  price     Float
  imageUrl  String
  stock     Int       @default(10)
  emiPlans  EMIPlan[]
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
}
```

### EMIPlan Model
```prisma
model EMIPlan {
  id             String   @id @default(cuid())
  variantId      String
  variant        Variant  @relation(fields: [variantId], references: [id])
  monthlyPayment Float
  tenure         Int
  interestRate   Float
  cashback       Float?
  description    String?
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
}
```

## API Endpoints

### GET /api/products
Fetch all products with variants and EMI plans.

**Response:**
```json
[
  {
    "id": "clx...",
    "name": "iPhone 17 Pro",
    "slug": "iphone-17-pro",
    "description": "The most advanced iPhone ever",
    "variants": [
      {
        "id": "clx...",
        "name": "256GB Space Black",
        "storage": "256GB",
        "color": "Space Black",
        "mrp": 144900,
        "price": 134900,
        "imageUrl": "https://...",
        "emiPlans": [
          {
            "id": "clx...",
            "monthlyPayment": 11241.67,
            "tenure": 12,
            "interestRate": 0,
            "cashback": 2000,
            "description": "Backed by HDFC Mutual Fund"
          }
        ]
      }
    ]
  }
]
```

### GET /api/products/[slug]
Fetch a specific product by slug.

**Example:** `/api/products/iphone-17-pro`

**Response:**
```json
{
  "id": "clx...",
  "name": "iPhone 17 Pro",
  "slug": "iphone-17-pro",
  "description": "The most advanced iPhone ever",
  "variants": [...]
}
```

## Products in Database

The seed data includes 3 products with multiple variants:

1. **iPhone 17 Pro** (`/products/iphone-17-pro`)
   - 256GB Space Black
   - 512GB Desert Titanium
   - 1TB Natural Titanium

2. **Samsung Galaxy S24 Ultra** (`/products/samsung-s24-ultra`)
   - 256GB Titanium Black
   - 512GB Titanium Violet

3. **Google Pixel 9 Pro** (`/products/google-pixel-9-pro`)
   - 256GB Obsidian
   - 512GB Porcelain
   - 256GB Rose Quartz

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard:
   - `DATABASE_URL`
5. Deploy!

### Database Setup for Production

Use a cloud PostgreSQL provider:
- **Neon**: [neon.tech](https://neon.tech) (Free tier available)

After creating your database:
1. Copy the connection string
2. Update `DATABASE_URL` in Vercel environment variables
3. Run migrations: `npx prisma migrate deploy`
4. Seed database: `npm run db:seed`


## Development Scripts

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run Prisma Studio (Database GUI)
npx prisma studio

# Generate Prisma Client
npx prisma generate

# Reset database
npx prisma migrate reset

# Seed database
npm run db:seed
```


## Author

Aryan Mane

---