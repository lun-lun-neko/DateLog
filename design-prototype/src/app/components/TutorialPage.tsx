import { useState } from "react";
import { Button } from "./ui/button";
import { Heart, MapPin, Calendar, Camera, ChevronRight } from "lucide-react";

interface TutorialPageProps {
  onComplete: () => void;
  onSkip: () => void;
}

const tutorialSteps = [
  {
    icon: MapPin,
    title: "지도에 데이트 경로 기록",
    description: "우리가 함께 다녀온 장소를\n지도 위에 표시하고 경로를 그려보세요",
    color: "from-pink-400 to-pink-500"
  },
  {
    icon: Camera,
    title: "추억을 사진으로 저장",
    description: "각 장소마다 사진과 메모를 남겨\n특별한 순간을 기록하세요",
    color: "from-purple-400 to-purple-500"
  },
  {
    icon: Calendar,
    title: "캘린더로 한눈에 보기",
    description: "언제 어디서 데이트했는지\n캘린더에서 쉽게 찾아볼 수 있어요",
    color: "from-blue-400 to-blue-500"
  },
  {
    icon: Heart,
    title: "커플과 함께 공유",
    description: "커플 코드로 연결하면\n둘이 함께 추억을 만들 수 있어요",
    color: "from-pink-500 to-purple-500"
  }
];

export function TutorialPage({ onComplete, onSkip }: TutorialPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === tutorialSteps.length - 1;
  const step = tutorialSteps[currentStep];
  const Icon = step.icon;

  const handleNext = () => {
    if (isLastStep) {
      onComplete();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-pink-50">
      {/* Skip Button */}
      <div className="flex justify-end p-4">
        <Button variant="ghost" onClick={onSkip} className="text-gray-500">
          건너뛰기
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-8">
        {/* Icon */}
        <div className={`size-32 bg-gradient-to-br ${step.color} rounded-3xl shadow-2xl flex items-center justify-center mb-8`}>
          <Icon className="size-16 text-white" strokeWidth={1.5} />
        </div>

        {/* Title & Description */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          {step.title}
        </h2>
        <p className="text-gray-600 text-center leading-relaxed whitespace-pre-line mb-12">
          {step.description}
        </p>

        {/* Progress Dots */}
        <div className="flex gap-2 mb-12">
          {tutorialSteps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentStep
                  ? "w-8 bg-pink-500"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="p-6 space-y-3">
        <Button
          onClick={handleNext}
          className="w-full h-14"
          size="lg"
        >
          {isLastStep ? "시작하기" : "다음"}
          <ChevronRight className="size-5 ml-2" />
        </Button>

        {currentStep > 0 && (
          <Button
            onClick={handlePrev}
            variant="outline"
            className="w-full"
            size="lg"
          >
            이전
          </Button>
        )}
      </div>
    </div>
  );
}
