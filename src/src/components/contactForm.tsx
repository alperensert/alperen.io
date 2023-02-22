import axios from "axios"
import { useFormik } from "formik"
import React from "react"
import { toast } from "react-toastify"
import { ToastOptions } from "react-toastify/dist/types"
import { InputInvalidFeedback } from "."
import { useTheme } from "../hooks"
import * as Yup from "yup"

export const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(32, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().min(3, "Too short").max(300, "Too long!").required(),
})

interface ContactFormValues {
    name: string
    email: string
    message: string
}

export const ContactForm = () => {
    const { currentMode } = useTheme()
    const toastConfig: ToastOptions = {
        position: "bottom-right",
        closeButton: false,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: currentMode === "dark" ? "dark" : "light",
    }
    const initialFormValues: ContactFormValues = {
        name: "",
        email: "",
        message: "",
    }
    const formik = useFormik({
        initialValues: initialFormValues,
        validationSchema: ContactSchema,
        onSubmit: async (v) => {
            try {
                const { status } = await axios.post("website/contact", v, {
                    baseURL: "https://api.quasm.io",
                })
                if (status === 200)
                    toast.success("🦄 Wow so easy!", toastConfig)
                else toast.error("🦄 Something went wrong!", toastConfig)
            } catch (err) {
                toast.error("🦄 Something went wrong!", toastConfig)
            }
        },
    })
    return (
        <form
            onSubmit={formik.handleSubmit}
            className="contact-form max-w-3xl lg:mx-auto lg:min-w-3xl"
        >
            <div className="flex flex-col space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
                <div className="flex w-full flex-col space-y-4">
                    <label htmlFor="name" className="font-medium">
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <InputInvalidFeedback text={formik.errors.name} />
                    )}
                </div>
                <div className="flex w-full flex-col space-y-4">
                    <label htmlFor="email" className="font-medium">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="mail"
                        name="email"
                        onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <InputInvalidFeedback text={formik.errors.email} />
                    )}
                </div>
            </div>
            <div className="mt-8 flex flex-col space-y-4">
                <label htmlFor="message" className="font-medium">
                    Message
                </label>
                <textarea
                    name="message"
                    className="h-60 w-full resize-none"
                    onChange={formik.handleChange}
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                    <InputInvalidFeedback text={formik.errors.message} />
                )}
            </div>
            <button type="submit" className="mt-8">
                Submit
            </button>
        </form>
    )
}
