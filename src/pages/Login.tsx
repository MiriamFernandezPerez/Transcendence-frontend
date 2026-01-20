import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
// import Footer from "../components/Footer";
// import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../components/layouts/AuthLayout";
import InputGroup from "../components/ui/InputGroup";

const Login = () => {
	const { t } = useTranslation();
	const { login } = useAuth();
	const navigate = useNavigate();

	/* Inputs States */
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});

	/* Validation errors state */
	const [errors, setErrors] = useState({
		email: "",
		password: ""
	});

	/* Handle Input Change */
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });

		if (errors[name as keyof typeof errors]) {
			setErrors({ ...errors, [name]: "" });
		}
	};

	/* Validation Function */
	const validate = (data: typeof formData) => {
		let isValid = true;
		let newErrors = { email: "", password: "" };

		/* Email Validation */
		if (!data.email) {
			newErrors.email = t("login.email_required");
			isValid = false;
		}
		/* Simple email regex for validation */
		else if (!/\S+@\S+\.\S+/.test(data.email)) {
			newErrors.email = t("login.email_invalid");
			isValid = false;
		}

		/* Password Validation */
		if (!data.password) {
			newErrors.password = t("login.password_required");
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};	
	
	/* Handle Form Submit */
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		/* Trim and toLowerCase on email input */
		/* Password not trimmed even toLowerCase */
		const cleanData = {
			email: formData.email.trim(),
			password: formData.password
		};

		/* Validate Inputs Form */
		if (!validate(cleanData))
			return;
		
		/* SIMULACION DE LOGUEO*/
		/* En un caso real, aquí se haría la llamada a la API para autenticar al usuario */
		const mirindaw = {
			id: '1',
			username: "mirindaw",
			email: formData.email
		};
		login(mirindaw);
		navigate("/index");
	};

	// /* Input Class Error Style */
	// const getInputClass = (hasError: boolean) => `
    //     w-full px-4 py-3 rounded-xl bg-dark-900/50 border 
    //     ${hasError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-700 focus:border-brand-500 focus:ring-brand-500/20'}
    //     text-white focus:outline-none focus:ring-2 
    //     transition-all duration-200 placeholder-slate-500
    // `;

	return (
        <AuthLayout title={t("login.title")} subtitle={t("login.subtitle")}>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <InputGroup
                    label={t("login.email")}
                    type="email"
                    name="email"
                    placeholder="email@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                
                <InputGroup
                    label={t("login.password")}
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    className="mb-8"
                />

                <button type="submit" className="w-full py-3.5 px-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl shadow-lg transition-transform transform hover:scale-[1.02]">
                    {t("login.enter")}
                </button>
            </form>

            <div className="mt-6 text-center space-y-2">
                <p className="text-slate-400 text-sm">
                    <Link to='/reset_password' className="text-slate-300 underline hover:text-brand-500 transition-colors">
                        {t("login.forgot_pass")}
                    </Link>
                </p>
                <p className="text-slate-400 text-sm">
                    {t("login.no_account")}{' '}
                    <Link to='/register' className="text-brand-500 font-bold hover:underline transition-colors">
                        {t("login.register")}
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
};

export default Login;
