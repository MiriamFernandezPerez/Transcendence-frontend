import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AuthLayout from "../components/layouts/AuthLayout";
import InputGroup from "../components/ui/InputGroup";
import AlertSuccess from "../components/ui/AlertSuccess";

const ResetPassword = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	/* State to verify if email is on database */
	const [isEmailed, setIsEmailed] = useState(false);

	/* State to wait for loading database response */
	const [isLoading, setIsLoading] = useState(false);

	/* State to show success message when password is changed */
	const [isPasswordChanged, setIsPasswordChanged] = useState(false);

	/* Inputs States */
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirm_password: ""
	});

	/* Validation errors state */
	const [errors, setErrors] = useState({
		email: "",
		password: "",
		confirm_password: ""
	});

	/* Handle Input Change */
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });

		if (errors[name as keyof typeof errors]) {
			setErrors({ ...errors, [name]: "" });
		}
	};

	/* Validation Function by steps */
	const validate = (step: 'email' | 'password') => {
		let isValid = true;
		let newErrors = { ...errors };

		/* Email Validation */
		if (step === 'email') {
			newErrors.email = "";
			if (!formData.email.trim()) {
				newErrors.email = t("password.email_required");
				isValid = false;
			}
			else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
				newErrors.email = t("password.email_invalid");
				isValid = false;
			}
		}

		/* Password Validation */
		if (step === 'password') {
			newErrors.password = "";
			newErrors.confirm_password = "";

			if (!formData.password) {
				newErrors.password = t("password.password_required");
				isValid = false;
			}
			/* Password length check */
			else if (formData.password.length < 6) {
				newErrors.password = t("password.password_short");
				isValid = false;
			}
			/* Password capital letter check */
			else if (!/[A-Z]/.test(formData.password)) {
				newErrors.password = t("password.password_capital"); 
				isValid = false;
			}
			/* Password special character check */
			else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
				newErrors.password = t("password.password_special"); 
				isValid = false;
			}
			
			/* Confirm Same Passwords  */
			if (formData.password !== formData.confirm_password) {
				newErrors.confirm_password = t("password.passwords_match");
				isValid = false;
			}
		}

		setErrors(newErrors);
		return isValid;
	};	
	
	/* Handle Form Submit */
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		/* Verify email */
        if (!isEmailed) {
            if (!validate('email')) return;

            setIsLoading(true);

            // SIMULACIÓN DE CONSULTA A BBDD
            setTimeout(() => {
                const emailToCheck = formData.email.trim().toLowerCase();
                
                // AQUÍ SIMULAMOS QUE SOLO EXISTE ESTE EMAIL
                // Cuando tengas backend: await api.post('/auth/check-email', { email })
                if (emailToCheck === "mirindaww@hotmail.com") {
                    setIsEmailed(true);
                    setErrors(prev => ({ ...prev, email: "" }));
                }
				else {
                    /* If e-mail is not in the database */
                    setErrors(prev => ({ 
                        ...prev, 
                        email: t("password.email_not_registered") 
                    }));
                }
                setIsLoading(false);
            }, 1000);
        } 
        
        /* Reset Password Logic */
        else {
            if (!validate('password')) return;

            setIsLoading(true);
                console.log(t("password.success"), formData.email);
                
                /* Show success message 2 secs and redirect to login */
                setIsLoading(false);
                setIsPasswordChanged(true);
                setTimeout(() => {
                    navigate("/login");
                }, 5000);
            
        }
    };

	/* Dinamic Title */
    const pageTitle = isPasswordChanged ? "¡Hecho!" : t("password.title");
    const pageSubtitle = isPasswordChanged ? "Redirigiendo..." : t("password.subtitle");

	return (
        <AuthLayout title={pageTitle} subtitle={pageSubtitle}>
            
            {isPasswordChanged ? (
                <AlertSuccess 
                    title={`${t("password.success")} ${formData.email}`} 
                    message={t("password.back_login")}
                />
            ) : (
                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                    
                    <InputGroup
                        label={t("password.email")}
                        type="email"
                        name="email"
                        placeholder="email@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isEmailed || isLoading}
                        error={errors.email}
                    />
                    
                    {/* Mensaje éxito paso 1 */}
                    {isEmailed && !errors.email && (
                        <p className="text-xs text-green-500 ml-1 -mt-2 mb-4 animate-fade-in">
                            ✓ {t("password.email_registered")}
                        </p>
                    )}

                    {isEmailed && (
                        <div className="space-y-4 animate-fade-in-down">
                            <InputGroup
                                label={t("password.password")}
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                error={errors.password}
                            />
                            <InputGroup
                                label={t("password.confirm_password")}
                                type="password"
                                name="confirm_password"
                                placeholder="••••••••"
                                value={formData.confirm_password}
                                onChange={handleChange}
                                error={errors.confirm_password}
                                className="mb-8"
                            />
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3.5 px-4 text-white font-bold rounded-xl shadow-lg transition-all transform hover:scale-[1.02] 
                            ${isLoading ? 'bg-slate-600 cursor-wait' : 'bg-brand-500 hover:bg-brand-600'}`}
                    >
                        {isLoading 
                            ? "Procesando..." 
                            : isEmailed ? "Cambiar Contraseña" : t("password.enter")}
                    </button>
                </form>
            )}
        </AuthLayout>
    );
};

export default ResetPassword;
