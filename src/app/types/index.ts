export interface EMIPlan {
  id: string;
  variantId: string;
  monthlyPayment: number;
  tenure: number;
  interestRate: number;
  cashback: number | null;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Variant {
  id: string;
  productId: string;
  name: string;
  storage: string | null;
  color: string | null;
  mrp: number;
  price: number;
  imageUrl: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
  emiPlans: EMIPlan[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  variants: Variant[];
}
