import { z } from "zod";

export const formSchema = z
  .object({
    username: z.string().min(1, "Введите никнейм"),
    email: z.string().email("Неверный формат email"),
    password: z
      .string()
      .min(8, "Пароль должен содержать минимум 8 символов")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
        "Пароль должен содержать заглавные и строчные буквы, цифры и специальные символы",
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof formSchema>;
