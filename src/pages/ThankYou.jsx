import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Mail } from 'lucide-react';

const ThankYou = () => {
    // Simulating user email - in a real app this would come from context/state
    const userEmail = "seu-email@exemplo.com";

    return (
        <div className="min-h-screen bg-neutral-charcoal flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-[500px] w-full bg-white rounded-2xl shadow-soft-2xl overflow-hidden"
            >
                <div className="p-10 text-center">
                    {/* Success Icon Animation */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                        className="w-16 h-16 bg-accent-greenLight rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <Check className="w-8 h-8 text-accent-green" strokeWidth={3} />
                    </motion.div>

                    <h1 className="text-2xl font-bold text-neutral-darkCharcoal mb-2 font-display">
                        Pagamento confirmado!
                    </h1>

                    <p className="text-neutral-mediumGray mb-8 text-sm px-4">
                        Estamos felizes em ter você a bordo para escalar suas vendas na Shopee.
                    </p>

                    {/* Critical Info Box */}
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8 text-left">
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 shrink-0">
                                <Mail className="w-5 h-5 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-900 text-sm mb-1">
                                    Verifique seu e-mail
                                </h3>
                                <p className="text-blue-700/80 text-xs leading-relaxed">
                                    As instruções de acesso e suas credenciais foram enviadas para <span className="font-bold">seu e-mail de cadastro</span>. <br />
                                    Você não precisa criar senha agora.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <a
                            href="https://app.afiliadodash.com/login"
                            className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-soft-lg hover:shadow-soft-xl group"
                        >
                            Ir para o Login
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="https://mail.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-neutral-mediumGray hover:text-neutral-charcoal font-medium text-sm transition-colors"
                        >
                            Abrir Gmail
                        </a>
                    </div>

                    <div className="mt-12 text-[10px] text-neutral-mediumGray">
                        Afiliado Dash © 2026
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ThankYou;
