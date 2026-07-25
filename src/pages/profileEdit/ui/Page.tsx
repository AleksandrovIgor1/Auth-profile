import { useStepNavigation } from '@/shared/lib/step-navigation/useStepNavigation';
import styles from './styles.module.css';
import { Outlet } from 'react-router-dom';
import { steps } from '../config/steps';
import Navigation from '@/shared/ui/Navigation/Navigation';
import type { StepNavigationContext } from '@/shared/lib/step-navigation/types';

const EditProfile = () => {
    const navigation = useStepNavigation({
        steps,
        basePath: "/profile/edit",
    });

    const outletContext: StepNavigationContext = {
        next: navigation.next
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <Navigation title="Редактирование профиля"
                    steps={steps}
                    currentPath={navigation.currentStep.path}
                    onChange={navigation.goTo} />
                <div className={styles.main}>
                    <Outlet context={outletContext} />
                </div>
            </div>
        </div>
    )
}

export default EditProfile