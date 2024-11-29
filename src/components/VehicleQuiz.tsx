import React, { useState } from 'react';
import { Car, Users, Star, Sparkles } from 'lucide-react';
import { Vehicle } from '../types/vehicle';

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: Record<string, number>;
  }[];
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "What's the occasion for your luxury travel?",
    options: [
      { 
        text: "Wedding Day",
        score: { "Rolls Royce Ghost": 5, "Bentley Mulsanne": 4 }
      },
      { 
        text: "Business Meeting",
        score: { "BMW 7 Series Long": 5, "Audi A8 L": 4 }
      },
      { 
        text: "Special Celebration",
        score: { "Bentley Flying Spur": 5, "Bentley Mulsanne Extended": 4 }
      },
      { 
        text: "Airport Transfer",
        score: { "Audi A8 L": 5, "BMW 7 Series Long": 4 }
      }
    ]
  },
  {
    id: 2,
    question: "How many passengers will be traveling?",
    options: [
      { 
        text: "1-2 passengers",
        score: { "Rolls Royce Ghost": 5, "BMW 7 Series Long": 4 }
      },
      { 
        text: "3-4 passengers",
        score: { "Bentley Mulsanne Extended": 5, "Bentley Flying Spur": 4 }
      }
    ]
  },
  {
    id: 3,
    question: "What's your priority for the journey?",
    options: [
      { 
        text: "Ultimate Luxury",
        score: { "Rolls Royce Ghost": 5, "Bentley Mulsanne": 4 }
      },
      { 
        text: "Business Comfort",
        score: { "BMW 7 Series Long": 5, "Audi A8 L": 4 }
      },
      { 
        text: "Classic Elegance",
        score: { "Bentley Flying Spur": 5, "Bentley Mulsanne": 4 }
      }
    ]
  }
];

interface VehicleQuizProps {
  vehicles: Vehicle[];
  onComplete: (vehicle: Vehicle) => void;
}

export default function VehicleQuiz({ vehicles, onComplete }: VehicleQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [animation, setAnimation] = useState(false);

  const handleAnswer = (option: typeof questions[0]['options'][0]) => {
    const newScores = { ...scores };
    Object.entries(option.score).forEach(([vehicle, score]) => {
      newScores[vehicle] = (newScores[vehicle] || 0) + score;
    });
    setScores(newScores);

    setAnimation(true);
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        const recommendedVehicle = vehicles.reduce((prev, current) => {
          return (newScores[current.name] || 0) > (newScores[prev.name] || 0) ? current : prev;
        });
        onComplete(recommendedVehicle);
        setShowResult(true);
      }
      setAnimation(false);
    }, 300);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-serif mb-2">Find Your Perfect Vehicle</h2>
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-gold rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className={`transition-opacity duration-300 ${animation ? 'opacity-0' : 'opacity-100'}`}>
        {!showResult && (
          <div className="space-y-6">
            <h3 className="text-xl mb-4">{questions[currentQuestion].question}</h3>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full p-4 text-left rounded-lg border border-gray-200 hover:border-gold hover:bg-gold/5 transition-all duration-200 group"
                >
                  <span className="flex items-center">
                    <Sparkles className="w-5 h-5 mr-3 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    {option.text}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}