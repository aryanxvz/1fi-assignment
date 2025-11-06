import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.eMIPlan.deleteMany();
  await prisma.variant.deleteMany();
  await prisma.product.deleteMany();

  const iphone17Pro = await prisma.product.create({
    data: {
      name: 'iPhone 17 Pro',
      slug: 'iphone-17-pro',
      description: 'The most advanced iPhone ever with A18 Bionic chip',
      variants: {
        create: [
          {
            name: '256GB Silver',
            storage: '256GB',
            color: 'Silver',
            mrp: 144900,
            price: 134900,
            imageUrl:
              'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-3inch-silver?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RzRIN3Q2Z245Z1F3L1paWlRjZnl6YTF1TmpsTkNoRVRMR1N6UXlVZFBaU0NYR1ZZZnEyMVlVQUliTThGMjNyaFJFRjhVelZBVy8wUHZRSVFLRUJEWEdMR1dOZHMwa2VjYTFxU2tiQm1KKzJB&traceId=1',
            emiPlans: {
              create: [
                {
                  monthlyPayment: 11241.67,
                  tenure: 12,
                  interestRate: 0,
                  cashback: 2000,
                  description: 'Backed by HDFC Mutual Fund',
                },
                {
                  monthlyPayment: 5745.83,
                  tenure: 24,
                  interestRate: 0,
                  description: 'Backed by ICICI Prudential MF',
                },
                {
                  monthlyPayment: 4497.5,
                  tenure: 36,
                  interestRate: 10.5,
                  description: 'Backed by SBI Mutual Fund',
                },
              ],
            },
          },
          {
            name: '512GB Deep Blue',
            storage: '512GB',
            color: 'Deep Blue',
            mrp: 164900,
            price: 154900,
            imageUrl:
              'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-3inch-deepblue?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RUczK3M0RVhxWWpFZXJsZzlEU0tTSHVHdDcxbVFRSnhaQ0pnV1pOaG5KaGhNQnJMcnc4RkxJd3ZMc3hKZVVFWHNGZ0xNcmF3NFg5dGNjU0hGYnBVTUF3bXM4bU92dFpiSk1vcFRiMHNtbGRn&traceId=1',
            emiPlans: {
              create: [
                {
                  monthlyPayment: 12908.33,
                  tenure: 12,
                  interestRate: 0,
                  cashback: 3000,
                  description: 'Backed by HDFC Mutual Fund',
                },
                {
                  monthlyPayment: 6595.83,
                  tenure: 24,
                  interestRate: 0,
                  description: 'Backed by Axis Mutual Fund',
                },
                {
                  monthlyPayment: 5161.67,
                  tenure: 36,
                  interestRate: 10.5,
                  description: 'Backed by SBI Mutual Fund',
                },
              ],
            },
          },
          {
            name: '1TB Cosmic Orange',
            storage: '1TB',
            color: 'Cosmic Orange',
            mrp: 184900,
            price: 174900,
            imageUrl:
              'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-finish-select-202509-6-3inch-cosmicorange?wid=5120&hei=2880&fmt=webp&qlt=90&.v=NUNzdzNKR0FJbmhKWm5YamRHb05tUzkyK3hWak1ybHhtWDkwUXVINFc0RUlmWnJkM2NiV2hVVVF2ZE1VdGpQZWhsQTdPYWVGbmdIenAvNE9qYmZVYVFDb1F2RTNvUEVHRkpGaGtOSVFHak5NTEhXRE11VU1QNVo2eDJsWlpuWHRlLys5ZkozSXJXZWZXNk8rZDF5S0V3&traceId=1',
            emiPlans: {
              create: [
                {
                  monthlyPayment: 14575.0,
                  tenure: 12,
                  interestRate: 0,
                  cashback: 5000,
                  description: 'Backed by Kotak Mutual Fund',
                },
                {
                  monthlyPayment: 7454.17,
                  tenure: 24,
                  interestRate: 0,
                  description: 'Backed by ICICI Prudential MF',
                },
                {
                  monthlyPayment: 5825.83,
                  tenure: 36,
                  interestRate: 10.5,
                  description: 'Backed by Aditya Birla MF',
                },
              ],
            },
          },
        ],
      },
    },
  });

  const samsungS24Ultra = await prisma.product.create({
    data: {
      name: 'Samsung Galaxy S24 Ultra',
      slug: 'samsung-s24-ultra',
      description: 'Galaxy AI is here. Meet the new S24 Ultra',
      variants: {
        create: [
          {
            name: '256GB Titanium Gray',
            storage: '256GB',
            color: 'Titanium Gray',
            mrp: 129999,
            price: 119999,
            imageUrl:
              'https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bztcins-539573275?imbypass=true',
            emiPlans: {
              create: [
                {
                  monthlyPayment: 10000.0,
                  tenure: 12,
                  interestRate: 0,
                  cashback: 1500,
                  description: 'Backed by HDFC Mutual Fund',
                },
                {
                  monthlyPayment: 5108.33,
                  tenure: 24,
                  interestRate: 0,
                  description: 'Backed by SBI Mutual Fund',
                },
                {
                  monthlyPayment: 3999.97,
                  tenure: 36,
                  interestRate: 10.5,
                  description: 'Backed by ICICI Prudential MF',
                },
              ],
            },
          },
          {
            name: '512GB Titanium Violet',
            storage: '512GB',
            color: 'Titanium Violet',
            mrp: 139999,
            price: 129999,
            imageUrl:
              'https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bzvcins-539573402?imbypass=true',
            emiPlans: {
              create: [
                {
                  monthlyPayment: 10833.25,
                  tenure: 12,
                  interestRate: 0,
                  cashback: 2500,
                  description: 'Backed by Axis Mutual Fund',
                },
                {
                  monthlyPayment: 5541.63,
                  tenure: 24,
                  interestRate: 0,
                  description: 'Backed by Kotak Mutual Fund',
                },
                {
                  monthlyPayment: 4333.3,
                  tenure: 36,
                  interestRate: 10.5,
                  description: 'Backed by HDFC Mutual Fund',
                },
              ],
            },
          },
        ],
      },
    },
  });

  const pixelPro = await prisma.product.create({
    data: {
      name: 'Google Pixel 9 Pro',
      slug: 'google-pixel-9-pro',
      description: 'Powered by Google AI and Tensor G4 chip',
      variants: {
        create: [
          {
            name: '256GB Obsidian',
            storage: '256GB',
            color: 'Obsidian',
            mrp: 109999,
            price: 99999,
            imageUrl:
              'https://lh3.googleusercontent.com/cF-N4RTZquL10BeOaqYyPFQ35NHwtUM8lSi57_8dSyxAQnyMd_8lt_ynxT5c_oZLu8S3iS2hITGrVBKCE1SgveAxfbUqvombpbo=s3000-w3000-e365-rw-v0',
            emiPlans: {
              create: [
                {
                  monthlyPayment: 8333.25,
                  tenure: 12,
                  interestRate: 0,
                  cashback: 1000,
                  description: 'Backed by SBI Mutual Fund',
                },
                {
                  monthlyPayment: 4258.29,
                  tenure: 24,
                  interestRate: 0,
                  description: 'Backed by ICICI Prudential MF',
                },
                {
                  monthlyPayment: 3333.3,
                  tenure: 36,
                  interestRate: 10.5,
                  description: 'Backed by Axis Mutual Fund',
                },
              ],
            },
          },
          {
            name: '512GB Porcelain',
            storage: '512GB',
            color: 'Porcelain',
            mrp: 119999,
            price: 109999,
            imageUrl:
              'https://lh3.googleusercontent.com/Nwi7lWAnyrc_xe_f5XCjINmVgQZkgK27i5XDzttFPP6oPpRXnNO0SJDu45BpJn--Th1PnayOlLSuYaL_M1DliEz9QUq1kkeqIdE8=s3000-w3000-e365-rw-v0',
            emiPlans: {
              create: [
                {
                  monthlyPayment: 9166.58,
                  tenure: 12,
                  interestRate: 0,
                  cashback: 2000,
                  description: 'Backed by Kotak Mutual Fund',
                },
                {
                  monthlyPayment: 4683.29,
                  tenure: 24,
                  interestRate: 0,
                  description: 'Backed by HDFC Mutual Fund',
                },
                {
                  monthlyPayment: 3666.63,
                  tenure: 36,
                  interestRate: 10.5,
                  description: 'Backed by Aditya Birla MF',
                },
              ],
            },
          },
          {
            name: '256GB Rose Quartz',
            storage: '256GB',
            color: 'Rose Quartz',
            mrp: 109999,
            price: 99999,
            imageUrl:
              'https://lh3.googleusercontent.com/8FcsZIOjpjk0pYs_8xtRQkLavx8kxEAh2tP3OSaBmS-svPYTMNXXrGqbm_JK-oRQa2m0Zumr4rTWz-0Jd74KOOcWHDsws2_h3G4m=s3000-w3000-e365-rw-v0',
            emiPlans: {
              create: [
                {
                  monthlyPayment: 8333.25,
                  tenure: 12,
                  interestRate: 0,
                  cashback: 1500,
                  description: 'Backed by ICICI Prudential MF',
                },
                {
                  monthlyPayment: 4258.29,
                  tenure: 24,
                  interestRate: 0,
                  description: 'Backed by SBI Mutual Fund',
                },
                {
                  monthlyPayment: 3333.3,
                  tenure: 36,
                  interestRate: 10.5,
                  description: 'Backed by HDFC Mutual Fund',
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log('✅ Database seeded successfully!');
  console.log({
    iphone17Pro,
    samsungS24Ultra,
    pixelPro,
  });
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
