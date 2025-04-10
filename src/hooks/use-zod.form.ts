import { UseMutateFunction } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { ZodSchema } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'

const useZodForm=(
    schema:ZodSchema,
    mutation:UseMutateFunction,
    
)=>{

    const{
        register,
        formState: { errors },
        handleSubmit,
       
    }=useForm({
    resolver:zodResolver(schema),
    defaultValues:{ }
    })
    const onFormSubmit=handleSubmit(async(values)=>mutation({...values}))
    return {
        register,
        errors,
        onFormSubmit,
       
    }
}

export default useZodForm

