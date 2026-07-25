import { useNavigate, useLocation } from "react-router-dom";

export interface Step {
  title: string;
  path: string;
}

interface Props {
  steps: Step[];
  basePath: string;
}

export const useStepNavigation = ({ steps, basePath }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname.split("/").pop() || "info";

  const currentIndex = steps.findIndex((s) => s.path === currentPath);

  const safeIndex = currentIndex === -1 ? 0 : currentIndex;

  const currentStep = steps[safeIndex];

  const hasNext = safeIndex < steps.length - 1;
  const hasPrevious = safeIndex > 0;

  const next = () => {
    if (!hasNext) return;

    navigate(`${basePath}/${steps[safeIndex + 1].path}`);
  };

  const previous = () => {
    if (!hasPrevious) return;

    navigate(`${basePath}/${steps[safeIndex - 1].path}`);
  };

  const goTo = (path: string) => {
    navigate(`${basePath}/${path}`);
  };

  return {
    currentStep,
    hasNext,
    hasPrevious,
    next,
    previous,
    goTo,
  };
};
