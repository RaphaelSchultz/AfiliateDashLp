import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-neutral-warmBeige last:border-0">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className="text-lg font-bold text-neutral-darkCharcoal group-hover:text-primary transition-colors">
                    {question}
                </span>
                {isOpen ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-neutral-mediumGray group-hover:text-primary transition-colors" />}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-neutral-charcoal leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

export default AccordionItem;
