const z = require('zod')

const signUpSchema = z.object({
    username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 charcters" })
    .max(255, { message: "Name not be more than 255 charcters" }),

    email:z
    .string({ required_error: "Email is required" })
    .trim()
    .email({message:"Invalid email address"})
    .min(3, { message: "Email must be at least 3 charcters" })
    .max(255, { message: "Email not be more than 255 charcters" }),

    phone:z
    .string({ required_error: "phone number is required" })
    .trim()
    .min(10, { message: "phone number must be at least 10 charcters" })
    .max(20, { message: "phone number not be more than 20 charcters" }),

    password:z
    .string({ required_error: "password is required" })
    .min(7, { message: "password must be at least 7 charcters" })
    .max(1024, { message: "password not be more than 1024 charcters" }),
})

const loginSchema = z.object({
    email:z
    .string({ required_error: "Email is required" })
    .trim()
    .email({message:"Invalid email address"})
    .min(3, { message: "Email must be at least 3 charcters" })
    .max(255, { message: "Email not be more than 255 charcters" }),

    password:z
    .string({ required_error: "password is required" })
    .min(7, { message: "password must be at least 7 charcters" })
    .max(1024, { message: "password not be more than 1024 charcters" }),
})


module.exports = {signUpSchema,loginSchema}