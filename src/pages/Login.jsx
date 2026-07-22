import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import Logo from "../components/common/Logo";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const result = login({
            email,
            password,
        });

        if (!result.success) {
            setError(result.message);
            return;
        }

        navigate("/dashboard");
    }

    return (
        <main className="login">
            <article className="login__card">
                <header className="login__header">
                    <Logo />
                    <h1 className="login__title">Welcome Back</h1>
                    <p className="login__description">
                        Log in to continue tracking your applications.
                    </p>
                </header>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="form__group">
                        <label htmlFor="email" className="form__label">
                            Email
                        </label>

                        <input
                            id="email"
                            className="form__input"
                            type="email"
                            placeholder="you@example.com"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setError("");
                            }}
                            required
                        />
                    </div>

                    <div className="form__group">
                        <label htmlFor="password" className="form__label">
                            Password
                        </label>

                        <div className="form__password">
                            <input
                                id="password"
                                className="form__input"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                name="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError("");
                                }}
                                required
                            />

                            <button
                                type="button"
                                className="form__password-toggle"
                                onClick={() => setShowPassword((prev) => !prev)}
                                aria-label={
                                    showPassword
                                        ? "Hide password"
                                        : "Show password"
                                }
                            >
                                {showPassword ? (
                                    <EyeOff
                                        size={18}
                                        className="form__toggle-icon"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <Eye
                                        size={18}
                                        className="form__toggle-icon"
                                        aria-hidden="true"
                                    />
                                )}
                            </button>
                        </div>
                    </div>

                    {error && (
                        <p className="form__error" role="alert">
                            {error}
                        </p>
                    )}

                    <button type="submit" className="btn btn--primary">
                        Log In
                    </button>
                </form>
            </article>
        </main>
    );
}

export default Login;
