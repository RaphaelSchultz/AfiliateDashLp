import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/5 last:border-0">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className="text-lg font-medium text-gray-200 group-hover:text-orange-400 transition-colors">
                    {question}
                </span>
                {isOpen ? <ChevronUp className="text-orange-400" /> : <ChevronDown className="text-gray-600" />}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-gray-400 leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

export default AccordionItem;
