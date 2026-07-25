import type { Step } from "@/shared/lib/step-navigation/useStepNavigation";
import styles from "./styles.module.css";

interface Props {
    title: string;
    steps: Step[];
    currentPath: string;
    onChange: (path: string) => void;
}

const Navigation = ({
    title,
    steps,
    currentPath,
    onChange,
}: Props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>

            <div className={styles.nav}>
                {steps.map((step, index) => {
                    const isDisabled = index >= 3;
                    return (
                        <button
                            disabled={isDisabled}
                            key={step.path}
                            onClick={() => onChange(step.path)}
                            className={`${styles.navButton} ${currentPath === step.path
                                ? styles.navButtonActive : ""}
                                ${isDisabled ? styles.navButtonDisabled : ""}
                                `}
                        >
                            {step.title}
                        </button>
                    )
                })}
            </div>
        </div>
    );
};

export default Navigation;