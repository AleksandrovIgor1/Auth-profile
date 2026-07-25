import { useSendVerificationEmailMutation } from "@/entities/auth/api/authApi";
import styles from "./styles.module.css";
import NextArrow from "@/shared/icons/NextArrow.svg?react";

interface VerifyEmailProps {
  username: string | undefined;
  userId: string | undefined;
}

const VerifyEmailCard = ({ username, userId }: VerifyEmailProps) => {
  const [sendVerificationEmail, { isLoading: isSending }] =
    useSendVerificationEmailMutation();

  const handleSendVerification = async () => {
    try {
      await sendVerificationEmail(userId).unwrap();

      alert("Письмо отправлено.");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.emailConfirmContainer}>
      <div className={styles.emailConfirmContent}>
        <h2 className={styles.h2}>{username}, подтвердите ваш email</h2>
        <p className={styles.emailText}>Станьте частью нашей команды! Подтвердите ваш email, чтобы получить доступ к дополнительным возможностям платформы и начать расширять свои горизонты в сообществе таких же целеустремлённых профессионалов, как и вы. Присоединяйтесь к нам на пути к новым вершинам!</p>
      </div>
      <button onClick={handleSendVerification} className={styles.confirmButton}><span>{isSending
        ? "Отправка..."
        : "Подтвердить email"}</span> <NextArrow className={styles.confirmArrow} /></button>
    </div>
  )
}

export default VerifyEmailCard