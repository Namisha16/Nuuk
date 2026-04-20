import { motion } from "motion/react";
import { useState } from "react";
import { Calculator, CreditCard, CheckCircle } from "lucide-react";

export function EMICalculator() {
  const [selectedTenure, setSelectedTenure] = useState(12);

  const emiPlans = [
    { months: 3, emi: 4500, total: 13500, interest: 0, label: "Quick payoff" },
    { months: 6, emi: 2250, total: 13500, interest: 0, label: "Balanced" },
    { months: 9, emi: 1500, total: 13500, interest: 0, label: "Comfortable" },
    { months: 12, emi: 1125, total: 13500, interest: 0, label: "Most Popular", featured: true },
    { months: 18, emi: 750, total: 13500, interest: 0, label: "Lowest EMI" },
    { months: 24, emi: 563, total: 13512, interest: 12, label: "Max tenure" },
  ];

  const selectedPlan = emiPlans.find((plan) => plan.months === selectedTenure);

  return (
    <section className="py-48 bg-gradient-to-b from-white via-green-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 md:px-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-green-100 border border-green-300 rounded-full px-6 py-2 mb-6">
            <Calculator className="w-4 h-4 text-green-700" />
            <span className="text-sm text-green-800 tracking-wide">
              Flexible Payment Options
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] tracking-[-0.03em] leading-[1.05] mb-8">
            Pay your way with 0% EMI
          </h2>
          <p className="text-lg text-black/35 max-w-2xl mx-auto tracking-wide">
            Choose a plan that fits your budget. No hidden charges, no processing fees.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* EMI Options Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {emiPlans.map((plan, index) => (
              <motion.button
                key={plan.months}
                onClick={() => setSelectedTenure(plan.months)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`group w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  selectedTenure === plan.months
                    ? plan.featured
                      ? "border-green-500 bg-gradient-to-r from-green-500 to-emerald-500 shadow-xl shadow-green-500/30"
                      : "border-green-500 bg-green-50"
                    : "border-black/10 bg-white hover:border-green-200 hover:bg-green-50/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <p
                        className={`text-lg ${
                          selectedTenure === plan.months && plan.featured
                            ? "text-white"
                            : "text-black/80"
                        }`}
                      >
                        {plan.months} month{plan.months > 1 ? "s" : ""}
                      </p>
                      {plan.featured && (
                        <span
                          className={`text-xs px-3 py-1 rounded-full ${
                            selectedTenure === plan.months
                              ? "bg-white/20 text-white backdrop-blur-sm"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {plan.label}
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <p
                        className={`text-3xl tracking-tight ${
                          selectedTenure === plan.months && plan.featured
                            ? "text-white"
                            : "text-black"
                        }`}
                      >
                        ₹{plan.emi.toLocaleString("en-IN")}
                      </p>
                      <span
                        className={`text-sm ${
                          selectedTenure === plan.months && plan.featured
                            ? "text-white/80"
                            : "text-black/40"
                        }`}
                      >
                        /month
                      </span>
                    </div>
                    {plan.interest === 0 ? (
                      <p
                        className={`text-xs mt-2 ${
                          selectedTenure === plan.months && plan.featured
                            ? "text-white/90"
                            : "text-green-700"
                        }`}
                      >
                        ✓ No Cost EMI · 0% interest
                      </p>
                    ) : (
                      <p className="text-xs text-black/40 mt-2">
                        Total: ₹{plan.total.toLocaleString("en-IN")} (incl. ₹{plan.interest} interest)
                      </p>
                    )}
                  </div>

                  {selectedTenure === plan.months && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        plan.featured ? "bg-white/20" : "bg-green-500"
                      }`}
                    >
                      <CheckCircle
                        className={`w-5 h-5 ${
                          plan.featured ? "text-white" : "text-white"
                        }`}
                      />
                    </motion.div>
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* EMI Breakdown Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-white rounded-3xl border-2 border-black/5 p-8 shadow-2xl shadow-black/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl tracking-tight">Your EMI Plan</h3>
                  <p className="text-sm text-black/40">
                    {selectedPlan?.months} months tenure
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                  <p className="text-sm text-black/60 mb-2">Monthly Payment</p>
                  <p className="text-5xl tracking-tight mb-1">
                    ₹{selectedPlan?.emi.toLocaleString("en-IN")}
                  </p>
                  <p className="text-xs text-green-700">
                    {selectedPlan?.interest === 0 ? "0% interest" : `Includes ₹${selectedPlan?.interest} interest`}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-black/5">
                    <span className="text-sm text-black/60">Product Price</span>
                    <span className="text-sm">₹13,499</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-black/5">
                    <span className="text-sm text-black/60">Processing Fee</span>
                    <span className="text-sm text-green-600">₹0</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-black/5">
                    <span className="text-sm text-black/60">Interest</span>
                    <span className="text-sm text-green-600">
                      ₹{selectedPlan?.interest || 0}
                    </span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-base">Total Amount</span>
                    <span className="text-base">
                      ₹{selectedPlan?.total.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <button className="w-full bg-green-600 text-white py-4 rounded-full hover:bg-green-700 transition-all hover:shadow-xl hover:shadow-green-600/30 active:scale-[0.97]">
                    Continue with EMI
                  </button>
                  <p className="text-xs text-center text-black/40">
                    Available on HDFC, ICICI, SBI, Axis & more
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-6 space-y-3">
              {[
                "Instant approval on eligible cards",
                "No documentation required",
                "Pre-closure available anytime",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                  </div>
                  <p className="text-sm text-black/60">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
