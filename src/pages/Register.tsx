import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AuthLayout from "../components/layouts/AuthLayout";
import InputGroup from "../components/ui/InputGroup";
import AlertSuccess from "../components/ui/AlertSuccess";

const Register = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [isRegistered, setIsRegistered] = useState(false);

	/* Inputs States */
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: ""
	});

	/* Validation errors state */
	const [errors, setErrors] = useState({
		username: "",
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
		let newErrors = { username: "", email: "", password: "" };

		/* Username Validation */
		if (!data.username) {
			newErrors.username = t("register.username_required");
			isValid = false;
		}

		/* Email Validation */
		if (!data.email) {
			newErrors.email = t("register.email_required");
			isValid = false;
		}
		/* Simple email regex for validation */
		else if (!/\S+@\S+\.\S+/.test(data.email)) {
			newErrors.email = t("register.email_invalid");
			isValid = false;
		}
		
		/* Password Validation */
		if (!data.password) {
			newErrors.password = t("register.password_required");
      		isValid = false;
	    }
		/* Password length check */
	    else if (data.password.length < 6) {
    		newErrors.password = t("register.password_short");
      		isValid = false;
    	}
		/* Password capital letter check */
		else if (!/[A-Z]/.test(data.password)) {
	  		newErrors.password = t("register.password_capital"); 
			isValid = false;
		}
		/* Password special character check */
		else if (!/[!@#$%^&*(),.?":{}|<>]/.test(data.password)) {
      		newErrors.password = t("register.password_special"); 
    		isValid = false;
    	}

   		setErrors(newErrors);
    	return isValid;
	};

	/* Handle Form Submit */
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		/* Trim inputs */
		const cleanData = {
			username: formData.username.trim(),
			email: formData.email.trim(),
			password: formData.password
		};

		if (validate(cleanData)) {
			// Aquí iría la llamada a la API para registrar al usuario
			// const response = await api.post('/auth/register', cleanData);
			
			// Por ahora, simulamos un registro exitoso
			setIsRegistered(true);
			console.log(t("register.success"), cleanData);

			/* Timeout to show success message before redirecting */
			setTimeout(() => {
				navigate('/login');
			}, 3000);
		}
	}

	return (
        <AuthLayout title={t('register.title')} subtitle={t('register.subtitle')}>
            
            {isRegistered ? (
                <AlertSuccess 
                    title={t("register.success")} 
                    message={t("register.back_login")} />
            ) : (
                <form className="space-y-4" noValidate onSubmit={handleSubmit}>
                    <InputGroup
                        label={t('register.username')}
                        type="text"
                        name="username"
                        placeholder="player1"
                        value={formData.username}
                        onChange={handleChange}
                        error={errors.username}
                    />
                    <InputGroup
                        label={t('register.email')}
                        type="email"
                        name="email"
                        placeholder="email@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                    />
                    <InputGroup
                        label={t('register.password')}
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password}
                        className="mb-8"
                    />

                    <button type="submit" className="w-full py-3.5 px-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl shadow-lg transition-transform transform hover:scale-[1.02]">
                        {t('register.enter')}
                    </button>

					<div className="mt-6 text-center">
						<p className="text-slate-400 text-sm">
							{t('register.account')}{' '}
							<Link to="/login" className="text-brand-500 font-bold hover:underline transition-colors">
								{t('register.login')}
							</Link>
						</p>
					</div>
                </form>
            )}

            
        </AuthLayout>
    );
};

export default Register;