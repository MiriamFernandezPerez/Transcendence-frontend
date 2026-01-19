// import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext"; // Authenticator Hook

const Login = () => {
	const { t } = useTranslation();
	const { login } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		/* SIMULACION DE LOGUEO*/
		/* En un caso real, aquí se haría la llamada a la API para autenticar al usuario */
		const mirindaw = {
			id: '1',
			username: "mirindaw",
			email: "mail@mail.com"
		};
		login(mirindaw);
		navigate("/index");
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-dark-900 relative px-6">
			{/* Login Card (Glassmorphism) */}
			<div className="relative z-10 w-full max-w-md p-6 sm:p-8 bg-dark-800/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]">
				{/* Title & Logo */}
				<div className="text-center mb-8">
					<Link
						to="/"
						className="inline-flex items-center justify-center w-18 h-18 " title="Back to LandingPage">
						<Logo />
					</Link>

					<h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
						{t("login.title")}
					</h2>
					<p className="text-slate-400 mt-2 text-sm">{t("login.subtitle")}</p>
				</div>

				{/* Formulario */}
				<form className="space-y-4" onSubmit={handleSubmit}>
					<div>
						<label className="block text-sm font-medium text-slate-300 mb-1 ml-1">
							{t("login.email")}
						</label>
						<input
							type="email"
							placeholder="email@email.com"
							className="w-full px-4 py-3 rounded-xl bg-dark-900/50 border border-slate-700 text-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-200 placeholder-slate-500"/>
					</div>

					<div className="mb-8">
						<label className="block text-sm font-medium text-slate-300 mb-1 ml-1">
							{t("login.password")}
						</label>
						<input
							type="password"
							placeholder="••••••••"
							className="w-full px-4 py-3 rounded-xl bg-dark-900/50 border border-slate-700 text-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-200 placeholder-slate-500 "/>
					</div>

					<button
						type="submit"
						className="w-full py-3.5 px-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] transition-all duration-200 transform hover:scale-[1.02]">
						{t("login.enter")}
					</button>
				</form>

				{/* Card Footer */}
				<div className="mt-6 text-center">
					<p className="text-slate-400 text-sm mb-2">
						<Link to='/password_reset' className="text-slate-300 underline font-medium hover:text-brand-500 transition-colors">
							{t("login.forgot_pass")}
						</Link>
					</p>
					<p className="text-slate-400 text-sm">
						{t("login.no_account")}{' '}
						<Link to='/register' className="text-brand-500 font-medium hover:text-brand-400 hover:underline transition-colors">
							{t("login.register")}
						</Link>
					</p>
				</div>
			</div>

			{/* Footer Legal */}
			<Footer className="absolute bottom-0 w-full" />
		</div>
	);
};

export default Login;
