import { useForm } from "react-hook-form";
import { formSchema, type RegisterFormValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useRegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({
        resolver: zodResolver(formSchema), mode: 'onBlur',
    })

    return { register, handleSubmit, errors }
}