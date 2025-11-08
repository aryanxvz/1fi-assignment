'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Check, Tag, TrendingUp } from 'lucide-react';
import { Product, Variant, EMIPlan } from '@/app/types';

interface ProductClientProps {
  product: Product;
}

export default function ProductClient({ product }: ProductClientProps) {
  const [selectedVariant, setSelectedVariant] = useState<Variant>(product.variants[0]);
  const [selectedEMIPlan, setSelectedEMIPlan] = useState<EMIPlan>(product.variants[0].emiPlans[0]);

  const discount = selectedVariant.mrp - selectedVariant.price;
  const discountPercent = Math.round((discount / selectedVariant.mrp) * 100);

  const handleVariantChange = (variant: Variant) => {
    setSelectedVariant(variant);
    setSelectedEMIPlan(variant.emiPlans[0]);
  };

  const handleProceed = () => {
    alert(`Proceeding with:\n\nProduct: ${product.name}\nVariant: ${selectedVariant.name}\nEMI Plan: ₹${selectedEMIPlan.monthlyPayment.toLocaleString('en-IN')}/month for ${selectedEMIPlan.tenure} months\n\nThis is a demo - payment integration would go here!`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 p-6">

        <div className="relative h-96 bg-gray-50 rounded-xl">
          <Image
            src={selectedVariant.imageUrl} alt={selectedVariant.name} fill
            className="object-contain p-8"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Select Variant
            </h3>
            <div className="flex flex-wrap gap-3">
              {product.variants.map((variant) => (
                <button key={variant.id} onClick={() => handleVariantChange(variant)}
                  className={`flex-1 min-w-[140px] p-3 rounded-lg border-2 text-left transition-all duration-200 
                    ${
                      selectedVariant.id === variant.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  style={{ flexBasis: 'calc(33.333% - 0.75rem)' }}>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-gray-900">{variant.name}</div>
                      <div className="text-sm text-gray-600">
                        ₹{variant.price.toLocaleString('en-IN')}
                      </div>
                    </div>
                    {selectedVariant.id === variant.id && (
                      <Check className="text-blue-600" size={20} />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 bg-blue-50 rounded-lg">
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-gray-900">
                ₹{selectedVariant.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xl text-gray-500 line-through">
                ₹{selectedVariant.mrp.toLocaleString('en-IN')}
              </span>
              <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                {discountPercent}% OFF
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1 text-green-600 text-sm font-medium">
              <Tag size={16} />
              You save ₹{discount.toLocaleString('en-IN')}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 p-6 bg-gray-50">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold text-gray-900">
            Choose Your EMI Plan
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {selectedVariant.emiPlans.map((plan) => (
            <button key={plan.id} onClick={() => setSelectedEMIPlan(plan)}
              className={`p-5 rounded-xl border-2 text-left transition-all flex flex-col justify-between h-full ${
                selectedEMIPlan.id === plan.id
                  ? 'border-blue-600 bg-white shadow-lg'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}>
              <div className="flex flex-col grow">
                <div className="mb-4">
                  <div className="text-2xl font-bold text-gray-900">
                    ₹{plan.monthlyPayment.toLocaleString('en-IN')}
                    <span className="text-sm font-normal text-gray-600">/month</span>
                  </div>
                </div>

                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tenure</span>
                    <span className="font-semibold text-gray-900">{plan.tenure} months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interest</span>
                    <span className="font-semibold text-gray-900">{plan.interestRate}%</span>
                  </div>
                  {plan.cashback && (
                    <div className="flex justify-between text-green-600">
                      <span>Cashback</span>
                      <span className="font-semibold">
                        ₹{plan.cashback.toLocaleString('en-IN')}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {plan.description && (
                <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
                  {plan.description}
                </div>
              )}
            </button>
          ))}
        </div>

        <button onClick={handleProceed}
          className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
          Proceed with Selected Plan
        </button>

        {selectedEMIPlan && (
          <div className="mt-3 p-3 bg-blue-50 rounded-lg text-lg text-gray-700">
            <strong>Total Amount:</strong> ₹
            {(selectedEMIPlan.monthlyPayment * selectedEMIPlan.tenure).toLocaleString('en-IN')}
            {selectedEMIPlan.cashback && (
              <span className="ml-2 text-green-600">
                (After ₹{selectedEMIPlan.cashback.toLocaleString('en-IN')} cashback: ₹
                {(
                  selectedEMIPlan.monthlyPayment * selectedEMIPlan.tenure -
                  selectedEMIPlan.cashback
                ).toLocaleString('en-IN')})
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
