import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../components/layouts/AuthLayout";
import InputGroup from "../components/ui/InputGroup";
import { validateEmail } from "../utils/validators";

const Login = () => {
    const { t } = useTranslation();
    const { login } = useAuth();
    const navigate = useNavigate();

    /* Inputs States */
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({ email: "", password: "" });

    /* Handle Input Change */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name as keyof typeof errors]) setErrors({ ...errors, [name]: "" });
    };

    /* Validation Function */
    const validate = (data: typeof formData) => {
        /* Validate email from utility function */ 
        const emailError = validateEmail(data.email, t);
        
        /* Validate password only if is empty, right password will be validated on backend */
        const passwordError = !data.password ? t("validation.password_required") : "";

        const newErrors = {
            email: emailError,
            password: passwordError
        };

        setErrors(newErrors);
        
        /* Returns true if both are clean */
        return (!emailError && !passwordError);
    };  
    
    /* Handle Form Submit */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const cleanData = { email: formData.email.trim(), password: formData.password };

        if (!validate(cleanData)) return;
        
        /* SIMULACION DE LOGUEO*/
        const mirindaw = { id: '1', username: "mirindaw", email: formData.email };
        login(mirindaw);
        navigate("/index");
    };

    return (
        <AuthLayout title={t("login.title")} subtitle={t("login.subtitle")}>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <InputGroup
                    label={t("common.email")}
                    type="email"
                    name="email"
                    placeholder="email@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                
                <InputGroup
                    label={t("common.password")}
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    className="mb-8"
                />

                {/* Arreglado: Se usa la clase definida en CSS */}
                <button type="submit" className="btn-primary-full">
                    {t("common.enter")}
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
                        {t("common.register")}
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
};

export default Login;